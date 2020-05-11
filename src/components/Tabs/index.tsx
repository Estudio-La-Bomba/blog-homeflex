import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';

import balanceImg from '../../assets/balance.svg';
import chuveiroImg from '../../assets/chuveiro.svg';
import lixeiraImg from '../../assets/lixeira.svg';
import monitorImg from '../../assets/monitor.svg';
import tesourasImg from '../../assets/tesouras.svg';
import pistolaImg from '../../assets/pistola-de-cola-quente.svg';

import { Container, Option } from './styles';

const itens = [
  { img: balanceImg },
  { img: chuveiroImg },
  { img: lixeiraImg },
  { img: monitorImg },
  { img: tesourasImg },
  { img: pistolaImg },
];

const Tabs: React.FC = () => {
  return (
    <Container>
      {itens.map(item => (
        <Option>
          <img src={item.img} alt="Categoria" />

          <RiArrowDownSLine size={30} color="#D9E7FF" />
        </Option>
      ))}
    </Container>
  );
};

export default Tabs;
