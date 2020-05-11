import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  padding: 40px 30px;

  .loading {
    text-align: center;
    margin: 50px 0;
  }
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const Post = styled(Link)`
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(223, 235, 255, 0.8);

  div {
    padding: 16px;

    h2 {
      font-size: 22px;
      font-weight: normal;
      line-height: 22px;
      color: #000;
    }

    > p {
      margin-top: 10px;
      font-weight: normal;
      font-size: 14px;
      color: #95abce;
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;
