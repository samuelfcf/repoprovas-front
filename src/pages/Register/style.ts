import styled from 'styled-components';

const Form = styled.form`
  width: calc(100vw - 1000px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  &::placeholder {
    color: #8d8d8d;
  }
`;

const Select = styled.select`
  width: calc(100% - 100px);
  padding-left: 30px;
  height: 40px;
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: #fff;
  color: #8d8d8d;
`;

export { Form, Input, Select };
