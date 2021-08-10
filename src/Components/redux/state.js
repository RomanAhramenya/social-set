import { propfileReducer } from "./profile-reducer";

let store = {
    _state:{
        ProfilePage :{
             PostData : [
                {like:0,text:'Hello Roman'},
                {like:4,text:'How are you?'},
                {like:5,text:'i am fine'},
                {like:8,text:'i am great programmist'},
            ],
            startValueTextarea:'',
        },
        DialogsPage : {
            frend:[
                {id:1,name:'Roman'},
                {id:2,name:'Eduard'},
                {id:3,name:'Maksim'},
                {id:4,name:'Egor'},
                {id:5,name:'Nadya'}
                ]
        },
        },
    
    getState(){
        return this._state
    },
    Render(){
            console.log('work');
            },
    
    subscribe(observer){
                this.Render = observer;
            },
    
    

    dispatch(action){
        this._state.ProfilePage=propfileReducer(this._state.ProfilePage,action);
        this.Render(this._state)

      
    },
}
export const addPostActionCreater = (text)=>{
    return ({type:'ON-ADD-POST',textPost:text})
}
export const resetInputActionCreater = (text)=>{
    return ({type:'ON-INPUT',textPost:text})
}
export default store;
