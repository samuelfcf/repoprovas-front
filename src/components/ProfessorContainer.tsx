/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  examsQuantity: number;
}

const ProfessorContainer = ({ name, examsQuantity }: Props) => {
  return (
    <li>
      <Container>
        <p>Prof: {name}</p>
        <p>Quantidade de provas: {examsQuantity}</p>
      </Container>
    </li>
  );
};

const Li = styled.li``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-left: 20px;
  background-color: red;
  width: 200px;
  height: 100px;
`;

export default ProfessorContainer;
