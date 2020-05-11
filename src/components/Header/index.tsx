import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="HomeFlex Blog" />
      </Link>

      <div>
        <a href="https://www.homeflexutilidades.com.br" target="blank">
          Todos os Produtos
        </a>
      </div>
    </Container>
  );
};

export default Header;
