const SETDATA = "main/SETDATA" as const;
const SETLABEL = "main/SETLABEL" as const;
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
}

const State: initialState = {
  data: [],
  label: [],
};

type mainAction = ReturnType<typeof setData> | ReturnType<typeof setLabel>;

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
        default:
            return state;
    }
}
export default mainReducer
