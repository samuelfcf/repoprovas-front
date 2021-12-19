import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Exam } from '../types/Exam';
import Subject from '../types/Subject';
import { Li, Container } from '../styles/PageStyle';

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
          state: { exams, subject: subject.name, professors: [name] }
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

export default ProfessorContainer;
