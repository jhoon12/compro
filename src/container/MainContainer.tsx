import React, { useEffect, useState } from "react";
import { RootState } from "../modules/index";
import { setLabel, setData, setURL, setRes, initialState } from "../modules/main/main";
import Main from "../components/main/Main";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import BASEURL from "../baseURL";
const MainContainer = () => {
  const dispatch = useDispatch();
  let obj: any = {};
  const store: initialState = useSelector(
    (state: RootState) => state.mainReducer
  ); //타입 지정 안해주니까 never로 처리됨 왜?
  const dataSetting = (data: object) => {
    dispatch(setData(data));
  };
  const labelSetting = (data: object) => {
    dispatch(setLabel(data));
  };
  const urlSetting = (data: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setURL(data.target.value));
  };
  useEffect(() => {
    (async () => {
      for (let i = 0; i < store.data.length - 1; i++) {
        for (let j = 0; j < store.data[0].length; j++) {
          obj[store.label[0][j]] = store.data[i][j];
        }
        {
          try {
            const res = await axios.post(
              `${BASEURL}api/risk-assessment/${store.url}/`,
              {
                phr: obj,
              }
            );
            dispatch(
              setRes({
                obj : obj,
                class: res.data.data.prediction.class,
                confidence: res.data.data.prediction.confidence,
              })
            );
            console.log(res);
          } catch (err) {
            if (err.response.status === 500) {
              alert("잘못된 주소입니다. 다시 입력해주세요!");
              dispatch(setURL(""));
              break;
            }
            console.log(err);
          }
        }
      }
    })();
  }, [store.label, store.data]); //왜 obj가 빠져야 작동할까? === 왜 dispatch(setURL())을 했을 때 obj가 없데이트 될까?
  return (
    <Main
      store={store}
      dataSetting={dataSetting}
      labelSetting={labelSetting}
      urlSetting={urlSetting}
    />
  );
};
export default MainContainer;
