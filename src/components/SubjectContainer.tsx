/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Li, Container } from '../styles/PageStyle';
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

  const professorsNames = [...new Set(professors)];

  return (
    <Li
      onClick={() => {
        navigate('/exams', {
          state: { exams, subject: subject.name, professors: professorsNames }
        });
      }}
    >
      <Container>
        <p>Matéria: {`${subject.name}`}</p>
        <p>Quantidade de provas: {`${subject.exams.length}`}</p>
      </Container>
    </Li>
  );
};

export default SubjectContainer;
