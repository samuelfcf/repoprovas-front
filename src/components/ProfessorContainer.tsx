import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Exam } from '../types/Exam';
import Subject from '../types/Subject';
import { Container, Title } from '../styles/PageStyle';

interface Props {
  name: string;
  subject: Subject;
  exams: Exam[];
}

const ProfessorContainer = ({ name, subject, exams }: Props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/exams/`, {
          state: { exams, subject: subject.name, professors: [name] }
        });
      }}
    >
      <p>
        Prof: <Title>{name}</Title>
      </p>
      <p>Quantidade de provas: {exams.length}</p>
    </Container>
  );
};

export default ProfessorContainer;
