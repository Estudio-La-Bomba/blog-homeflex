import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  padding: 40px 30px;

  .loading {
    text-align: center;
    margin: 100px 0;
  }
`;
export const Content = styled.div`
  a {
    color: #95abce;
    text-decoration: none;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    h1 {
      font-size: 45px;
      font-weight: 500;
      color: #505050;
      margin: 25px 0;
    }

    img {
      width: 100%;
      max-height: 350px;
      object-fit: cover;
    }

    > p {
      color: #505050;
      line-height: 30px;
      margin: 25px 0;
    }
  }

  .footer {
    margin: 50px auto;
    text-align: center;
    max-width: 500px;
    font-size: 14px;
    color: #000000;
    display: block;

    span {
      color: #1c65e4;
    }
  }
`;
