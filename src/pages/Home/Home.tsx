/* eslint-disable arrow-body-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../../styles/PageStyle';
import * as S from './style';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageStyle>
      <h1>Bem vindo ao RepoProvas</h1>

      <S.ButtonArea>
        <button type="submit" onClick={() => navigate('/register')}>
          Cadastrar Prova
        </button>
        <button type="submit">Visualizar Provas</button>
      </S.ButtonArea>
    </PageStyle>
  );
};

export default Home;
