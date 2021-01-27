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
 
`;
export const UrlInput = styled.input`
  outline:none;
  
`;
export const Table = styled.table`
   border: 1px solid #444444;
   border-collapse: collapse;
`
export const th = styled.th`
  border: 1px solid #444444;
`
export const td = styled.td`
  border:1px solid #444444;
  text-align:center;
`
export const tr = styled.tr`
  border: 1px solid #444444;
`