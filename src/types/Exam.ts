import Professor from './Professor';

interface ExamForm {
  name: string;
  category: string;
  subject?: string;
  professor?: string;
  url: string;
}

interface Exam extends Omit<ExamForm, 'professor'> {
  professor: Professor;
}

export type { ExamForm, Exam };
