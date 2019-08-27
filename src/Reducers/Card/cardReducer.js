export const cardReducer = (state={newValue:''},action)=>{
    switch(action.type){
        case 'LIST_CARD':return{
            ...state, newValue:action.newValue
        }
        default:
            return state;
    }
}