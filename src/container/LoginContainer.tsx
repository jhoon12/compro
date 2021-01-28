import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { changeID, changePW, initialState } from "../modules/login/login";
import Login from "../components/login/Login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BASEURL from "../baseURL";
const LoginContainer = () => {
  const dispatch = useDispatch();
  const store : initialState = useSelector((state: RootState) => state.loginReducer);
  const history = useHistory();
  const dispatchID = useCallback((id: string) => {
    dispatch(changeID(id));
  }, []);

  const dispatchPW = useCallback((pw: string) => {
    dispatch(changePW(pw));
  }, []);
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
        history.push("/main");
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  }, [store]);
  return <Login idChange={idChange} pwChange={pwChange} login={login} />;
};
export default LoginContainer;
