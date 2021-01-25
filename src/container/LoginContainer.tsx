import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { changeID, changePW } from "../modules/login/login";
import Login from "../components/login/Login";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.loginReducer);
  const dispatchID = useCallback((id: string) => {
    dispatch(changeID(id));
  }, []);

  const dispatchPW = useCallback((pw: string) => {
    dispatch(changePW(pw));
  }, []);
  return (
    <Login dispatchID={dispatchID} dispatchPW={dispatchPW} store={store} />
  );
};
export default LoginContainer;
