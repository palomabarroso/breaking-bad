export const InputSearchReducer = (state={newValue:''},action)=>{
    switch(action.type){
        case 'UPDATE_SEARCH':return{
            ...state, newValue:action.newValue
        }
        default:
            return state;
    }
}