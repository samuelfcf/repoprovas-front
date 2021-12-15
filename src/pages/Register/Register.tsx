/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './style';
import PageStyle from '../../styles/PageStyle';

const Register = () => {
  const categories = ['P1', 'P2', 'P3', 'Optativas'];
  const subjects = ['Cálculo 1', 'Álgebra Linear', 'Física 3', 'Libras'];
  const [inputFields, setInputFields] = useState({
    name: '',
    category: '',
    subject: '',
    professor: '',
    url: ''
  });

  const handleChange = (e: React.ChangeEvent | any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent | any) => {
    e.preventDefault();

    const { name, category, subject, professor, url } = inputFields;
    if (!name || (!category || category.includes('Categorias')) || (!subject || subject.includes('Matérias')) || (!professor || professor.includes('Professores')) || !url) {
      return Swal.fire({
        icon: 'error',
        title: 'Por favor preencha todos os campos!'
      });
    }

    const body = { ...inputFields };
    console.log(body)
    return 0;
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
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </S.Select>
        <S.Select
          value={inputFields.subject}
          name="subject"
          onChange={handleChange}
          required
        >
          <option selected>--- Matérias ---</option>
          {subjects.map((subject) => (
            <option value={subject}>{subject}</option>
          ))}
        </S.Select>
        <S.Select
          value={inputFields.professor}
          name="professor"
          onChange={handleChange}
          required
        >
          <option selected>--- Professores ---</option>
          <option value="João">João</option>
          <option value="Paulo">Paulo</option>
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
