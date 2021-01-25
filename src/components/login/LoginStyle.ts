import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    
    body, html, #root {
      margin: 0;
      padding: 0;
      height: 100vh;
      overflow-x:hidden;
  font-family: 'Noto Sans KR', sans-serif;
    }
  `;
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c2d5cc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #707070;
  width: 35%;
  height: 75%;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  height: 35%;
  width: 100%;
  align-items: center;
  color: #a2c2b3;
  font-size: 30px;
`;
export const InputBox = styled.div`
  width: 100%;
  height: 30%;
`;
export const Input = styled.input`
  border: none;
  display: block;
  border-bottom: 1px solid #909090;
  height: 10%;
  width: 45%;
  font-size: 21px;
  outline: none;
  padding: 4px;
  /* height:5%; */
  color: #909090;
  &::placeholder {
    color: #909090;
  }
  margin: 0 auto;
  margin-bottom: 10%;
`;
export const Button = styled.button`
  background-color: #e7e7e7;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 1.5rem;
  width: 28%;
  margin: 0 auto;
  height: 9%;
  display: flex;
  margin-top: 10%;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: #aeaeae;
`;
