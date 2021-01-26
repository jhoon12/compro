import React, { useState, useEffect} from "react";
import * as S from "./style";
import CSVReader from "react-csv-reader";
import { GlobalStyle } from "../login/LoginStyle";
import axios from "axios";
import BASEURL from "../../baseURL";
const Main = () => {
  const [data, setData] = useState<Array<Array<string>>>([]);
  const [label, setLabel] = useState<Array<string>>([]);    
  let obj: any= {}; 

  useEffect(()=>{
      (async () => {
        for (let i = 0; i < data.length - 1; i++) {
          for (let j = 0; j < data[0].length; j++) {
            obj[label[0][j]] = data[i][j];
          }
          console.log(obj);
          try {
            const res = await axios.post(`${BASEURL}api/risk-assessment/test/`, {
              phr: obj,
            });
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        }
      })()
  },[obj, label, data])
  return (
    <S.Container>
      <GlobalStyle />
      <CSVReader
        onFileLoaded={(data, fileInfo) => {
          setLabel(data.splice(0, 1));
          setData(data);
        }}
      />
      
    </S.Container>
  );
};
export default Main;
