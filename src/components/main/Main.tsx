import React, { ChangeEvent } from "react";
import * as S from "./style";
import CSVReader from "react-csv-reader";
import { GlobalStyle } from "../login/LoginStyle";
import { initialState, Obj, DataSet } from "../../modules/main/main";
interface MainProps {
  store: initialState;
  dataSetting: (data: string[][]) => void;
  labelSetting: (data: string[][]) => void;
  urlSetting: (data: React.ChangeEvent<HTMLInputElement>) => void;
  test: () => React.ReactElement[];
  findKeyName: (data: Obj) => string[];
}

const Main: React.FC<MainProps> = ({
  store,
  dataSetting,
  labelSetting,
  urlSetting,
  test,
  findKeyName,
}) => {
  return (
    <S.Container>
      <GlobalStyle />
      <S.UrlInput
        placeholder="url 끝자리 입력"
        onChange={(e: ChangeEvent<HTMLInputElement>) => urlSetting(e)}
        value={store.url}
      />
      {store.url !== "" ? (
        <CSVReader
          onFileLoaded={(data: string[][]) => {
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
          <tbody>
            <S.tr>{test()}</S.tr>
            {store.dataSet.map((ele: DataSet, index: number) => {
              return (
                <S.tr key={index}>
                  {findKeyName(ele.obj).map((ele: string, index: number) => (
                    <S.td key={index}>{ele}</S.td>
                  ))}
                  <S.td>{ele.confidence}</S.td>
                  <S.td>{ele.class}</S.td>
                </S.tr>
              );
            })}
          </tbody>
        </S.Table>
      ) : (
        <></>
      )}
    </S.Container>
  );
};
export default Main;
