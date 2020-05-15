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
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const Post = styled(Link)`
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(223, 235, 255, 0.8);

  @media (max-width: 414px) {
    margin-bottom: 25px;
  }

  img {
    width: 100%;
  }

  div {
    padding: 16px;

    h2 {
      font-size: 22px;
      font-weight: normal;
      color: #000;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    > p {
      margin-top: 10px;
      font-weight: normal;
      font-size: 14px;
      color: #95abce;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;
