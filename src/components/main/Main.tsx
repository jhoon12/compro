import React, { useState, useEffect } from "react";
import * as S from "./style";
import CSVReader from "react-csv-reader";
import { GlobalStyle } from "../login/LoginStyle";
import axios from "axios";
import BASEURL from "../../baseURL";
import { initialState } from "../../modules/main/main";
interface MainProps {
  store: initialState;
  dataSetting: (data: object) => void;
  labelSetting: (data: object) => void;
}
const Main: React.FC<MainProps> = ({ store, dataSetting, labelSetting }) => {
  let obj: any = {};

  useEffect(() => {
    (async () => {
      for (let i = 0; i < store.data.length - 1; i++) {
        for (let j = 0; j < store.data[0].length; j++) {
          obj[store.label[0][j]] = store.data[i][j];
        }
        try {
          const res = await axios.post(`${BASEURL}api/risk-assessment/test/`, {
            phr: obj,
          });
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    })();
  }, [obj, store.label, store.data]);
  return (
    <S.Container>
      <GlobalStyle />
      <CSVReader
        onFileLoaded={(data, fileInfo) => {
          labelSetting(data.splice(0, 1));
          dataSetting(data);
        }}
      />
    </S.Container>
  );
};
export default Main;
