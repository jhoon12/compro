import React, { useCallback } from "react";
import * as S from "./LoginStyle";  


interface LoginProps {

  idChange:(id :  React.ChangeEvent<HTMLInputElement>)=>void;
  pwChange:(pw:  React.ChangeEvent<HTMLInputElement>) =>void;
  login: ()=>void;

}
const Login: React.FC<LoginProps> = ({ idChange, pwChange, login }) => {
 
  return (
    <S.Background>
      <S.GlobalStyle />
      <S.LoginBox>
        <S.Title>로그인</S.Title>
        <S.InputBox>
          <S.Input placeholder="ID" onChange={idChange} />
          <S.Input placeholder="Password" onChange={pwChange}  type='password'/>
        </S.InputBox>
        <S.Button onClick={login}>로그인</S.Button>
      </S.LoginBox>
    </S.Background>
  );
};
export default Login;
