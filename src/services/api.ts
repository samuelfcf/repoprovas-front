import axios from 'axios';
import { Exam } from '../types/Exam';

interface ExamBody extends Omit<Exam, 'subject' | 'professor'> {
  subjectId: number | undefined;
  professorId: number | undefined;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllSubjects = async () => {
  const promise = await axios.get(`${BASE_URL}/subjects`);
  return promise;
};

const getAllProfessors = async () => {
  const promise = await axios.get(`${BASE_URL}/professors`);
  return promise;
};

const postExam = async (body: ExamBody) => {
  const promise = await axios.post(`${BASE_URL}/exams`, body);
  return promise;
};

export { getAllSubjects, getAllProfessors, postExam };
