import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;

  @media (max-width: 414px) {
    img {
      max-width: 150px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin-top: 50px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #95abce;

    @media (max-width: 414px) {
      font-size: 10px;
    }
  }
`;
