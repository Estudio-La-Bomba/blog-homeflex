import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="HomeFlex Blog" />

        <div>
          <a href="#!">
            <FaFacebookSquare size={40} color="#1C65E4" />
          </a>

          <a href="#!">
            <FaInstagram size={40} color="#1C65E4" />
          </a>
        </div>
      </div>

      <p>
        homeflex - sua casa agradece. 2020 © | Todos os direitos reservados.
        <br />
        Desenvolvido por Estúdio La.Bomba
      </p>
    </Container>
  );
};

export default Footer;
