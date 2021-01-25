import React, { useCallback } from "react";
import * as S from "./LoginStyle";
import { RootState } from "../../modules";
import { useHistory } from "react-router-dom";
import { initialState } from "../../modules/login/login";
import axios from "axios";

import BASEURL from "../../baseURL";
interface LoginProps {
  dispatchID: (id: string) => void;
  dispatchPW: (pw: string) => void;
  store: initialState;
}
const Login: React.FC<LoginProps> = ({ dispatchID, dispatchPW, store }) => {
  const history = useHistory();
  const idChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatchID(e.target.value);
    },
    [dispatchID]
  );
  const pwChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPW(e.target.value);
  }, []);
  const login = useCallback(async () => {
    try {
      const res = await axios.post(`${BASEURL}api/users/auth/login/`, {
        username: store.id,
        password: store.pw,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.data.token);
        history.push("/");
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  }, [store]);

  return (
    <S.Background>
      <S.GlobalStyle />
      <S.LoginBox>
        <S.Title>로그인</S.Title>
        <S.InputBox>
          <S.Input placeholder="ID" onChange={idChange} />
          <S.Input placeholder="Password" onChange={pwChange} />
        </S.InputBox>
        <S.Button onClick={login}>로그인</S.Button>
      </S.LoginBox>
    </S.Background>
  );
};
export default Login;
