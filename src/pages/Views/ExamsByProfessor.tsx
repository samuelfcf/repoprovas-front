import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProfessors } from '../../services/api';
import Professor from '../../types/Professor';
import ProfessorContainer from '../../components/ProfessorContainer';
import PageStyle, { Ul, Header } from '../../styles/PageStyle';

const ExamsByProfessor = () => {
  const [professors, setProfessors] = useState<Professor[]>([]);

  useEffect(() => {
    getAllProfessors().then((res) => {
      setProfessors(res.data.data);
    });
  }, []);

  return (
    <PageStyle>
      <Header>
        <h1>Professores</h1>
        <Link to="/">
          <h2>Voltar para home</h2>
        </Link>
      </Header>

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

export default ExamsByProfessor;
