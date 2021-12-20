import React, { useState } from 'react';
import PageStyle, { Header } from '../../styles/PageStyle';
import Register from '../Register/Register';
import Views from '../Views/Views';
import * as S from './style';

const Home = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [renderForm, setRenderForm] = useState(false);
  const [renderViews, setRenderViews] = useState(false);

  const renderRegisterForm = () => {
    if (!firstTime) {
      setFirstTime(true);
    }
    setFirstTime(false);
    setRenderViews(false);
    setRenderForm(true);
  };

  const renderViewsOptions = () => {
    if (!firstTime) {
      setFirstTime(true);
    }
    setFirstTime(false);
    setRenderViews(true);
    setRenderForm(false);
  };

  return (
    <PageStyle>
      <Header>
        <h1> Bem vindo ao RepoProvas</h1>
      </Header>

      <S.ButtonArea>
        <S.Button type="submit" onClick={renderRegisterForm}>
          Cadastrar Prova
        </S.Button>
        <S.Button type="submit" onClick={renderViewsOptions}>
          Visualizar Provas
        </S.Button>
      </S.ButtonArea>

      <div>
        {firstTime ? (
          ''
        ) : renderForm === false && renderViews === true ? (
          <Views />
        ) : (
          <Register />
        )}
      </div>
    </PageStyle>
  );
};

export default Home;
