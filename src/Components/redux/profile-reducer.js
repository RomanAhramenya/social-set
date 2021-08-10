export const propfileReducer =(state,action)=>{
    switch(action.type){
        case 'ON-INPUT':
            state.startValueTextarea = action.textInput;
            break;
        
        
    case'ON-ADD-POST':
         let postArrey = {
            like:0,
            text:action.textPost
        }
        state.PostData.push(postArrey);
        state.startValueTextarea='';
        break
    
    default:
        return state;
       
    }
    return state
}