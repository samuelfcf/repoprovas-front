/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import PageStyle from '../../styles/PageStyle';
import { getAllProfessors, getAllSubjects, postExam } from '../../services/api';
import { modalError, modalWarning, modalSuccess } from '../../utils/modals';
import { Exam } from '../../types/Exam';
import Professor from '../../types/Professor';
import Subject from '../../types/Subject';


const Register = () => {
  const categories = ['P1', 'P2', 'P3', 'Optativas'];
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [inputFields, setInputFields] = useState<Exam>({
    name: '',
    category: '',
    subject: '',
    professor: '',
    url: ''
  });

  useEffect(() => {
    getAllSubjects().then((res) => {
      setSubjects(res.data.data);
    });
  }, []);

  useEffect(() => {
    getAllProfessors()
      .then((res) => {
        const professorsFromApi = res.data.data;
        setProfessors(professorsFromApi);

        if (inputFields.subject) {
          const filteredBySubject = professorsFromApi.filter((p: Professor) => {
            return p.subject.name === inputFields.subject;
          });
          setProfessors(filteredBySubject);
        }
      })
      .catch(async () => {
        return modalError(
          'Não foi possível listar os professores, tente novamente!'
        );
      });
  }, [inputFields.subject]);

  const handleChange = (e: React.ChangeEvent | any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent | any) => {
    e.preventDefault();

    const { name, category, subject, professor, url } = inputFields;
    if (
      !name ||
      !category ||
      category.includes('Categorias') ||
      !subject ||
      subject.includes('Matérias') ||
      !professor ||
      professor.includes('Professores') ||
      !url
    ) {
      return modalWarning('Preencha todos os campos!');
    }

    const subjectBody = subjects.find(s => s.name === subject)
    const professorBody = professors.find(p => p.name === professor)

    const body = {
      name,
      category,
      subjectId: subjectBody?.id,
      professorId: professorBody?.id,
      url,
    }

    return postExam(body)
      .then(() => {
        modalSuccess('Prova cadastrada com sucesso!');
      })
      .catch(() => {
        modalError('Erro ao cadastrar prova, tente novamente!');
      });
    return 0
  };

  return (
    <PageStyle>
      <h1>Insira as informações sobre a prova</h1>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          required
          placeholder="Nome"
          type="text"
          name="name"
          value={inputFields.name}
          onChange={handleChange}
          minLength={3}
          autoComplete="off"
        />
        <S.Select
          value={inputFields.category}
          name="category"
          onChange={handleChange}
          required
        >
          <option selected>--- Categorias ---</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </S.Select>
        <S.Select
          value={inputFields.subject}
          name="subject"
          onChange={handleChange}
          required
        >
          <option selected>--- Matérias ---</option>
          {subjects.map((subject) => {
            return (
              <option key={subject.id} value={subject.name}>
                {subject.name}
              </option>
            );
          })}
        </S.Select>
        <S.Select
          value={inputFields.professor}
          name="professor"
          onChange={handleChange}
          required
        >
          <option selected>--- Professores ---</option>
          {professors.map((professor) => {
            return (
              <option key={professor.id} value={professor.name}>
                {professor.name}
              </option>
            );
          })}
        </S.Select>
        <S.Input
          required
          placeholder="url da prova"
          type="text"
          name="url"
          value={inputFields.url}
          onChange={handleChange}
          minLength={3}
          autoComplete="off"
        />
        <S.Button type="submit">Cadastrar prova</S.Button>
      </S.Form>
    </PageStyle>
  );
};

export default Register;
