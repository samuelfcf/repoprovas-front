/* eslint-disable arrow-body-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle, { ButtonArea } from '../../styles/PageStyle';

const Views = () => {
  const navigate = useNavigate();

  return (
    <PageStyle>
      <h1>Seleciona uma opção</h1>

      <ButtonArea>
        <button type="submit" onClick={() => navigate('/views/by-professor')}>
          Professor
        </button>
        <button type="submit" onClick={() => navigate('/views')}>
          Disciplina
        </button>
      </ButtonArea>
    </PageStyle>
  );
};

export default Views;
