import React from 'react';
import  { RootState } from '../modules/index'
import {setLabel, setData} from '../modules/main/main'
import Main from '../components/main/Main'
import {useDispatch, useSelector} from 'react-redux';
const MainContainer = () => {
    const dispatch = useDispatch();
    const store = useSelector((state : RootState)=> state. mainReducer);
    const dataSetting = (data : object)=>{
        dispatch(setData(data));
    }
    const labelSetting = (data : object)=>{
        dispatch(setLabel(data));
    }
    
    return(
        <Main store={store} dataSetting={dataSetting} labelSetting={labelSetting}/>
    )
}
export default MainContainer;
