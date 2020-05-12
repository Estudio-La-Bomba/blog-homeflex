import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 414px) {
    display: none;
    overflow: hidden;
  }
`;

export const Option = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 50px;

    @media (max-width: 640px) {
      height: 30px;
    }
  }

  svg {
    margin-top: 10px;
  }
`;
