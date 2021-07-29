import React from 'react'
import {IsUserRedirect,ProtectedRoute} from './helpers/routes'
import {BrowserRouter as Router,Switch  } from 'react-router-dom'
import Home from '../src/pages/home'
import SignIn from './pages/signin'
import * as ROUTES from './constant/routes'
import SignUp from './pages/signup'
import Browse from './pages/browser'
import useAuthListener from './hooks/use-suth-listener'
function App() {
  const {user}=useAuthListener();
  // console.log(user)
  return (
    
   <Router>
     <Switch>
         <IsUserRedirect user={user}
           loggedInPath={ROUTES.BROWSE}
           path={ROUTES.SIGN_IN}
           exact
           >
         <SignIn/>
         </IsUserRedirect>
         <IsUserRedirect user={user}
           loggedInPath={ROUTES.BROWSE}
           path={ROUTES.SIGN_UP}
           exact
           >
         <SignUp/>
         </IsUserRedirect>
        <ProtectedRoute  user={user} path={ROUTES.BROWSE} exact>
          <Browse/>
        </ProtectedRoute>
        <IsUserRedirect user={user} path={ROUTES.HOME} exact loggedInPath={ROUTES.BROWSE}>
          <Home/>
        </IsUserRedirect>

       
        
        </Switch> 
   </Router>
    
    
   
  );
}

export default App;
