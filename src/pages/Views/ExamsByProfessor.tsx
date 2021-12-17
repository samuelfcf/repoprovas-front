/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllProfessors } from '../../services/api';
import Professor from '../../types/Professor';
import ProfessorContainer from '../../components/ProfessorContainer';
import PageStyle from '../../styles/PageStyle';

const ExamsByProfessor = () => {
  const [professors, setProfessors] = useState<Professor[]>([]);

  useEffect(() => {
    getAllProfessors().then((res) => {
      setProfessors(res.data.data);
    });
  }, []);

  return (
    <PageStyle>
      <h1>Professores</h1>
      <Ul>
        {professors.map((professor) => {
          return (
            <ProfessorContainer
              name={professor.name}
              subject={professor.subject}
              exams={professor.exams}
            />
          );
        })}
      </Ul>
    </PageStyle>
  );
};

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
`;

export default ExamsByProfessor;
