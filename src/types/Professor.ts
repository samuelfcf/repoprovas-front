import { Exam } from './Exam';
import Subject from './Subject';

interface Professor {
  id: number;
  name: string;
  subject: Subject;
  exams: Exam[];
}

export default Professor;
