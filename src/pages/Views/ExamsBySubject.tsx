import React, { useEffect, useState } from 'react';
import { getAllSubjects } from '../../services/api';
import Subject from '../../types/Subject';
import PageStyle, { Ul } from '../../styles/PageStyle';
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
      <h1>Períodos</h1>

      <div>
        {periods.map((p: string) => {
          return (
            <>
              <p>{p}</p>
              {renderSubjects(p)}
            </>
          );
        })}
      </div>
    </PageStyle>
  );
};

export default ExamsBySubject;
