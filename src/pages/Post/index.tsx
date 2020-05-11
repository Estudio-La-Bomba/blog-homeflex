import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { BsArrowLeftShort } from 'react-icons/bs';
import Loader from 'react-loader-spinner';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Content } from './styles';

interface PostParams {
  post: string;
}

interface PostProps {
  id: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  better_featured_image: {
    media_details: {
      file: string;
    };
  };
}

const Post: React.FC = () => {
  const { params } = useRouteMatch<PostParams>();

  const [post, setPost] = useState<PostProps | null>(null);

  useEffect(() => {
    async function loadPost(): Promise<void> {
      const response = await api.get(`?slug=${params.post}`);

      const [postData] = response.data;

      setPost(postData);
    }

    loadPost();
  }, [params.post]);

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <BsArrowLeftShort size={22} color="#95abce" />
          voltar
        </Link>

        {post ? (
          <div>
            <h1>{post.title.rendered}</h1>

            <img
              src={`https://homeflexutilidades.com.br/wp-content/uploads/${post.better_featured_image.media_details.file}`}
              alt={post.title.rendered}
            />

            <p>{ReactHtmlParser(post.content.rendered)}</p>
          </div>
        ) : (
          <div className="loading">
            <Loader type="Grid" color="#95abce" height={50} width={50} />
          </div>
        )}

        <p className="footer">
          Pra ficar dentro de todas as novidades, continue nos acompanhando por
          aqui e pelo
          <span>@homeflex.utilidades</span>
          💙
        </p>
      </Content>
    </Container>
  );
};

export default Post;
