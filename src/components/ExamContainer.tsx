/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Exam } from '../types/Exam';

interface Props {
  exam: Exam;
  subject: string;
  professor: string;
}

const ExamContainer = ({ exam, subject, professor }: Props) => {
  const href = exam.url.includes('http') ? exam.url : `https://${exam.url}`;

  return (
    <Container>
      <div>
        <p>
          Título: <Title>{exam.name}</Title>
        </p>
        <p>Disciplina: {subject}</p>
        <p>Professor: {professor}</p>
      </div>

      <aside>
        <a href={href} target="_blank" rel="noreferrer">
          Acessar prova
        </a>
      </aside>
    </Container>
  );
};

const Container = styled.div`
  background-color: lightblue;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  aside {
    a {
      color: black;
      height: 20px;
      font-weight: 600;

      &:hover {
        color: white;
      }
    }
  }
`;

const Title = styled.h1`
  font-weight: 600;
  display: inline;
`;

export default ExamContainer;
