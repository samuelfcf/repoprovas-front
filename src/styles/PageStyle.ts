import styled from 'styled-components';

const PageStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Header = styled.header`
  background-color: darkblue;
  height: 100px;
  width: 100vw;
  text-align: center;

  h1 {
    color: #fff;
    padding-top: 30px;
    font-weight: 700;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
  }
`;

const Text = styled.h1`
  color: #333;
  padding-top: 30px;
  font-weight: 700;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
`;

const OptionButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-left: 20px;
  background-color: lightblue;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

const Button = styled.button`
  width: 100%;
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

const Title = styled.h1`
  font-weight: 600;
  display: inline;
`;

export { Text, OptionButtonsArea, Ul, Container, Button, Title, Header };

export default PageStyle;
