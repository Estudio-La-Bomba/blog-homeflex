/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Loader from 'react-loader-spinner';

import api from '../../services/api';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Footer from '../../components/Footer';

import { Container, Posts, Post } from './styles';

export interface Post {
  id: string;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  better_featured_image: {
    media_details: {
      file: string;
    };
  };
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts(): Promise<void> {
      const response = await api.get('?categories=41');

      setPosts(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

    loadPosts();
  }, []);

  return (
    <Container>
      <Header />

      <Tabs />

      <Posts>
        {posts &&
          posts.map(post => (
            <Post to={`/post/${post.slug}`} key={post.slug}>
              <img
                src={`https://homeflexutilidades.com.br/wp-content/uploads/${post.better_featured_image.media_details.file}`}
                alt={post.title.rendered}
              />
              <div>
                <h2>{post.title.rendered}</h2>
                <p>
                  {formatDistance(new Date(post.date), new Date(), {
                    locale: ptBR,
                  })}
                </p>
              </div>
            </Post>
          ))}
      </Posts>

      {loading && (
        <div className="loading">
          <Loader type="Grid" color="#95abce" height={50} width={50} />
        </div>
      )}

      <Footer />
    </Container>
  );
};

export default Home;
