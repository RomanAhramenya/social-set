import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Components/redux/state'

let Render = (state) => {
    ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
          dispatch={store.dispatch.bind(store)}
          />
    </React.StrictMode>,
    document.getElementById('root')
  );
  }
    Render(store.getState());
    store.subscribe(Render)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vit
