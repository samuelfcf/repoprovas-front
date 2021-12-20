/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from '../styles/PageStyle';
import Subject from '../types/Subject';

interface Props {
  subject: Subject;
}

const SubjectContainer = ({ subject }: Props) => {
  const navigate = useNavigate();

  const { exams } = subject;

  const professors = exams.map((exam: any) => {
    return exam.professor.name;
  });

  return (
    <Container
      onClick={() => {
        navigate('/exams', {
          state: {
            exams,
            subject: subject.name,
            professors: [...new Set(professors)]
          }
        });
      }}
    >
      <p>
        Matéria: <Title>{`${subject.name}`}</Title>
      </p>
      <p>Quantidade de provas: {`${subject.exams.length}`}</p>
    </Container>
  );
};

export default SubjectContainer;
