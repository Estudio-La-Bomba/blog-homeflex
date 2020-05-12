import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 414px) {
    margin-bottom: 40px;

    a {
      img {
        max-width: 100px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    a {
      margin-right: 20px;
      text-decoration: none;
      font-size: 14px;
      color: #95abce;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.5, '#95abce')};
      }
    }
  }
`;
