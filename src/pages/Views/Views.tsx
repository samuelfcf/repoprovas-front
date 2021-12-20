/* eslint-disable arrow-body-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OptionButtonsArea, Text } from '../../styles/PageStyle';
import { Button } from '../Register/style';

const Views = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text>Selecione uma opção</Text>

      <OptionButtonsArea>
        <Button type="submit" onClick={() => navigate('/views/by-professor')}>
          Professor
        </Button>
        <Button type="submit" onClick={() => navigate('/views/by-subject')}>
          Disciplina
        </Button>
      </OptionButtonsArea>
    </>
  );
};

export default Views;
