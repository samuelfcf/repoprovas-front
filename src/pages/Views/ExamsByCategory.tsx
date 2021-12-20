/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ExamContainer from '../../components/ExamContainer';
import PageStyle, { Text, Header } from '../../styles/PageStyle';
import { Exam } from '../../types/Exam';

const ExamsByCategory = () => {
  const { state } = useLocation();
  const { exams, subject, professors } = state;
  const categories = ['P1', 'P2', 'P3', 'Final'];

  const renderExams = (category: string) => {
    const renderArray: Exam[] = [];

    exams.forEach((exam: Exam) => {
      if (exam.category.toLowerCase() === category.toLowerCase()) {
        renderArray.push(exam);
      }
    });

    return renderArray.map((exam: Exam, index: number) => {
      const professor = professors.filter((p: string) => {
        return p === exam.professor.name;
      });

      return (
        <ExamContainer
          key={index}
          exam={exam}
          subject={subject}
          professor={professor}
        />
      );
    });
  };

  return (
    <PageStyle>
      <Header>
        <Text>Provas</Text>
      </Header>

      <Ul>
        {categories.map((category, index) => {
          return (
            <Container key={index}>
              <p>{category}</p>
              {renderExams(category)}
            </Container>
          );
        })}
      </Ul>
    </PageStyle>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 300px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export default ExamsByCategory;
