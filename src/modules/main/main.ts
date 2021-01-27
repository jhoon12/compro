const SETDATA = "main/SETDATA" as const;
const SETLABEL = "main/SETLABEL" as const;
const SETURL = "main/SETURL" as const;
const SETRES = "main/SETRES" as const;

export const setURL = (payload: string) => ({
  type:SETURL,
  payload
})
export const setRes = (payload: object)=>({
  type:SETRES,
  payload,
})

export const setData = (payload: object) => ({
  payload,
  type: SETDATA,
});
export const setLabel = (payload: object) => ({
  payload,
  type: SETLABEL,
});
export interface initialState {
  data: string[][];
  label: string[][];
  url:string;
  dataSet: any[];
}

const State: initialState = {
  data: [],
  label: [],
  url:'',
  dataSet:[],
};

type mainAction = ReturnType<typeof setData> | ReturnType<typeof setLabel> | ReturnType<typeof setURL> |ReturnType<typeof setRes>;

function mainReducer(state:initialState = State, action:mainAction){
    switch(action.type){
        case SETDATA:{
            return({
                ...state,
                data : action.payload
            })
        }
        case SETLABEL:{
            return({
                ...state,
                label: action.payload
            })
        }
        case SETURL:{
          return({
            ...state,
            url : action.payload
          })
        }
        case SETRES:{
          return({
              ...state,
              dataSet: state.dataSet.concat(action.payload)
          })
        }
        default:
            return state;
    }
}
export default mainReducer
