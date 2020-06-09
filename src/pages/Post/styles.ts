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

      @media (max-width: 414px) {
        font-size: 25px;
      }
    }

    > img {
      width: 100%;
      max-height: 350px;
      object-position: center;
      object-fit: cover;

      @media (max-width: 414px) {
        max-height: 150px;
      }
    }

    > p {
      color: #505050;
      line-height: 30px;
      margin: 25px 0;

      @media (max-width: 414px) {
        font-size: 14px;
      }
    }

    .content {
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 20px 0;
        color: #1c65e4;
      }

      p {
        text-align: justify;
        margin: 10px 0;
      }

      a {
        display: inline-block;
      }

      .wp-block-media-text {
        display: grid;
        margin: 35px 0;
        align-items: center;

        &__media {
          text-align: center;
        }
      }

      img {
        max-width: 300px;
        width: 100%;
        height: auto;
        margin: 0 auto;
      }

      ul {
        margin-left: 30px;
        line-height: 2;
      }
    }
  }

  .footer {
    margin: 50px auto;
    text-align: center;
    max-width: 500px;
    font-size: 14px;
    color: #000000;
    display: block;

    @media (max-width: 414px) {
      font-size: 12px;
    }

    span {
      color: #1c65e4;
    }
  }
`;
