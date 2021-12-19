/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ExamContainer from '../../components/ExamContainer';
import PageStyle from '../../styles/PageStyle';
import { Exam } from '../../types/Exam';

const ExamsByCategory = () => {
  const { state } = useLocation();
  const categories = ['P1', 'P2', 'P3', 'Final'];

  const renderExams = (category: string) => {
    const renderArray: Exam[] = [];
    const { exams, subject, professors } = state;

    exams.forEach((exam: Exam) => {
      if (exam.category.toLowerCase() === category.toLowerCase()) {
        renderArray.push(exam);
      }
    });

    return renderArray.map((exam: Exam, index: number) => {
      return (
        <ExamContainer
          key={index}
          exam={exam}
          subject={subject}
          professor={
            professors.length === 0 ? professors[0] : professors[index]
          }
        />
      );
    });
  };

  return (
    <PageStyle>
      <h1>Provas</h1>

      {categories.map((category, index) => {
        return (
          <Container key={index}>
            <p>{category}</p>
            {renderExams(category)}
          </Container>
        );
      })}
    </PageStyle>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default ExamsByCategory;
