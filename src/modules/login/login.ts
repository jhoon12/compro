const LOGINCHANGE = 'login/LOGINCHANGE' as const;
const PASSWORDCHANGE = 'login/PASSWORDCHANGE' as const;

export const changeID = (payload : string) => ({
    type:LOGINCHANGE,
    payload
})
export const changePW = (payload : string) => ({
    type:PASSWORDCHANGE,
    payload
})
type LoginAction = 
    | ReturnType<typeof changeID>
    | ReturnType<typeof changePW>;
    
export interface initialState{
    id : string;
    pw : string;
}

const State : initialState = {
    id:'',
    pw:''
}

function loginReducer(state: initialState = State, action: LoginAction){
    switch(action.type){
        case LOGINCHANGE: {
            return({
                ...state,
                id: action.payload
            })
        }
        case PASSWORDCHANGE: {
            return({
                ...state,
                pw:action.payload
            })
        }
        default:{
            return state;
        }
    }
}
export default loginReducer;