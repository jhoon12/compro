import React, { useEffect, useCallback } from "react";
import { RootState } from "../modules/index";
import {
  setLabel,
  setData,
  setURL,
  setRes,
  initialState,
  Obj,
} from "../modules/main/main";
import Main from "../components/main/Main";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as S from "../components/main/style";
import BASEURL from "../baseURL";

const MainContainer = () => {
  const dispatch = useDispatch();
  let obj: Obj = {};
  let arr: any = [];
  const store: initialState = useSelector(
    (state: RootState) => state.mainReducer
  );
  const dataSetting = useCallback(
    (data: string[][]) => {
      dispatch(setData(data));
    },
    [setData]
  );
  const labelSetting = useCallback(
    (data: string[][]) => {
      dispatch(setLabel(data));
    },
    [setLabel]
  );
  const urlSetting = useCallback(
    (data: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setURL(data.target.value));
    },
    [setURL]
  );
  const test = useCallback(() => {
    store.label[0].map((ele : string, index:number) => {
      arr.push(<S.th key={index}>{ele}</S.th>);
    });
    arr.push(<S.th>class</S.th>);
    arr.push(<S.th>confidence</S.th>);
    console.log(arr);
    console.log(typeof arr);
    return arr;
  },[store, arr])
  const findKeyName = useCallback((obj: Obj): string[] => {
    let arr = [];//타입지정
    arr = Object.keys(obj);
    return arr;
  },[])
  useEffect(() => {
    (async () => {
      for (let i = 0; i < store.data.length - 1; i++) {
        for (let j = 0; j < store.data[0].length; j++) {
          obj[store.label[0][j] as string] = parseInt(store.data[i][j]);
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
                obj: obj,
                class: res.data.data.prediction.class,
                confidence: res.data.data.prediction.confidence,
              })
            );
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
  }, [store.label, store.data]);
  return (
    <Main
      store={store}
      dataSetting={dataSetting}
      labelSetting={labelSetting}
      urlSetting={urlSetting}
      test={test}
      findKeyName={findKeyName}
    />
  );
};
export default MainContainer;
