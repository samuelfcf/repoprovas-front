/* eslint-disable arrow-body-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OptionButtonsArea, Text, Button } from '../../styles/PageStyle';

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
