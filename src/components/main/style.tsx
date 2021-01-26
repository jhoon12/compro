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
export const Container = styled.div`
  width:100vw;
  height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
