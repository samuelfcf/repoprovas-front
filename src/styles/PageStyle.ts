import styled from 'styled-components';

const PageStyle = styled.div`
  background-color: #333;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
`;

const Li = styled.li``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-left: 20px;
  background-color: red;
  width: 200px;
  height: 100px;
`;

export { ButtonArea, Ul, Li, Container };

export default PageStyle;
