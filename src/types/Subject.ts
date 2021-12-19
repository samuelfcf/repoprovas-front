import { Exam } from './Exam';

interface Subject {
  id: number;
  name: string;
  period: string;
  exams: Exam[];
}

export default Subject;
