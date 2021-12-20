import React, { useEffect, useState } from 'react';
import { getAllSubjects } from '../../services/api';
import Subject from '../../types/Subject';
import PageStyle, { Ul, Text } from '../../styles/PageStyle';
import SubjectContainer from '../../components/SubjectContainer';

const ExamsBySubject = () => {
  const periods = ['1', '2', '3', 'Optativas'];
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    getAllSubjects().then((res) => {
      setSubjects(res.data.data);
    });
  }, []);

  const renderSubjects = (p: string) => {
    const subjectsOfThisPeriod: Subject[] = [];

    subjects.forEach((subject: any) => {
      if (subject.period.toLowerCase() === p.toLowerCase()) {
        subjectsOfThisPeriod.push(subject);
      }
    });

    return subjectsOfThisPeriod.map((subject: Subject) => {
      return <SubjectContainer subject={subject} />;
    });
  };

  return (
    <PageStyle>
      <Text>Períodos</Text>

      {periods.map((p: string) => {
        return (
          <Ul>
            <Text>{!p.includes('Optativas') ? `${p} Semestre` : p}</Text>
            {renderSubjects(p)}
          </Ul>
        );
      })}
    </PageStyle>
  );
};

export default ExamsBySubject;
