import styled from 'styled-components';

const ButtonArea = styled.div`
  width: calc(100vw - 700px);
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: -60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export { Button, ButtonArea };
