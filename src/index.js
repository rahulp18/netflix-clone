import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context'
import {firebase} from './lib/firebase.prod'
import {FirebaseContext} from './context/firebase'
 

ReactDOM.render(

    <><AppProvider>
    <FirebaseContext.Provider value={{firebase}}>
     <App/>
     </FirebaseContext.Provider></AppProvider>
     </>
     
     ,document.getElementById('root'));

 
