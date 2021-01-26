import React, {useState} from 'react';
import * as S from './style';
import CSVReader from 'react-csv-reader'
import { GlobalStyle } from '../login/LoginStyle';
const Main = ()=>{
    const [data, setData] = useState<Array<string>>([]);

    return(
        <S.Container>
        <GlobalStyle/>
        <CSVReader onFileLoaded={(data, fileInfo) => {setData(data); console.log(data)}} />
        {data.map((data)=><div>{data}</div>)}
        </S.Container>
    )
}
export default Main;