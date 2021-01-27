import React, { useState, useEffect } from "react";
import * as S from "./style";
import CSVReader from "react-csv-reader";
import { GlobalStyle } from "../login/LoginStyle";
import { initialState } from "../../modules/main/main";
interface MainProps {
  store: initialState;
  dataSetting: (data: object) => void;
  labelSetting: (data: object) => void;
  urlSetting: (data: React.ChangeEvent<HTMLInputElement>) => void;
}

const Main: React.FC<MainProps> = ({
  store,
  dataSetting,
  labelSetting,
  urlSetting,
}) => {
  let arr: any = [];
  const test = () => {
    store.label[0].map((ele) => {
      // console.log(ele);
      arr.push(<S.th>{ele}</S.th>);
    });
    arr.push(<S.th>class</S.th>);
    arr.push(<S.th>confidence</S.th>);
    return arr;
  };
  const findKeyName = (obj: object): string[] => {
    //타입 인터페이스 수정
    let arr = [];
    // for(let key in Object){
    //   arr.push()
    // }
    arr = Object.keys(obj);
    return arr;
  };
  return (
    <S.Container>
      <GlobalStyle />
      <S.UrlInput
        placeholder="url 끝자리 입력"
        onChange={(e) => urlSetting(e)}
        value={store.url}
      />
      {store.url !== "" ? (
        <CSVReader
          onFileLoaded={(data, fileInfo) => {
            labelSetting(data.splice(0, 1));
            dataSetting(data);
          }}
        />
      ) : (
        <></>
      )}
      {store.label.length > 0 &&
      store.dataSet.length === store.data.length - 1 ? (
        <S.Table>
          <S.tr>{test()}</S.tr>

          {store.dataSet.map((ele) => {
            return (
              <S.tr>
                {findKeyName(ele.obj).map((ele) => (
                  <S.td>{ele}</S.td>
                ))}
                <S.td>{ele.confidence}</S.td>
                <S.td>{ele.class}</S.td>
              </S.tr>
            );
            console.log(ele.class);
          })}
        </S.Table>
      ) : (
        <></>
      )}
    </S.Container>
  );
};
export default Main;
