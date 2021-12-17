/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Exam } from '../types/Exam';
import Subject from '../types/Subject';

interface Props {
  name: string;
  subject: Subject;
  exams: Exam[];
}

const ProfessorContainer = ({ name, subject, exams }: Props) => {
  const navigate = useNavigate();

  return (
    <Li
      onClick={() => {
        navigate('/exams', {
          state: { exams, subject: subject.name, professor: name }
        });
      }}
    >
      <Container>
        <p>Prof: {name}</p>
        <p>Quantidade de provas: {exams.length}</p>
      </Container>
    </Li>
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
