import react from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Content/Dialogs/Dialogs';
import Profile from './Components/Content/Profile/Profile';
import Header from './Components/Header/Header';
import NavBar from './Components/nawBar/NavBar';
function App(props) {
 
  return (
    <BrowserRouter>  
      <div className="App">
        <Header/>
        <NavBar/>
        <div className="appWraper">
          <Route path='/profile' render={()=>
            <Profile 
              startValueTextarea={props.state.ProfilePage.startValueTextarea}
              PostData={props.state.ProfilePage.PostData}
              dispatch={props.dispatch}
            />}/>
          <Route path='/dialogs'  render={()=><Dialogs DialogsFrend={props.state}/>}/>
        </div>
      </div>
    </BrowserRouter>
  
    
    
  );
}

export default App;
