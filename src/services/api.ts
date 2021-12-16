import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const getAllSubjects = async () => {
  const promise = await axios.get(`${BASE_URL}/subjects`);
  return promise;
};

const getAllProfessors = async () => {
  const promise = await axios.get(`${BASE_URL}/professors`);
  return promise;
};

export { getAllSubjects, getAllProfessors };
