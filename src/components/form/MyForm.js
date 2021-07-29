import React,{useState,useContext} from 'react'
import './form.css'
import {Checkbox, FormControlLabel,  TextField} from '@material-ui/core'
import { makeStyles, ThemeProvider,createTheme } from '@material-ui/core/styles';
import {AiFillFacebook} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {FirebaseContext} from '../../context/firebase'
import * as ROUTES from '../../constant/routes'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
       
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  input:{
    color:'white',
    width:'100%',
  
  },
  
}));


const MyForm = () => {
  const [checked, setChecked] = React.useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const {firebase}=useContext(FirebaseContext);
    
  const history=useHistory();
  
  const handelSignIn=(e)=>{
    e.preventDefault();
    console.log('submitrd')
    // Firebase work here
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      // Push to the browse page
      history.push(ROUTES.BROWSE);

    }).catch((error)=>{
      setPassword('');
      setEmail('');
      // console.log(error)
      setError(error.message);
    })
   
    


   
  }

// Check Valid or not
const isInValid =email===''||password==='';




  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const dakrTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#8c8c8c;',
        },
        
         
    },

})
    const classes = useStyles();
    return (
        <div className='i-container'>
          <h1 className='i-h1'>Sign in</h1>
          {
            error?<div className='error-box'>
            <p className='item-3'>{error?'Message: '+error:null}</p>
            </div>:null
          }
           
          <ThemeProvider theme={dakrTheme}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handelSignIn} method='POST'>
             <TextField id="email" className={classes.input}   value={email} label="Email or phone number" variant="filled" onChange={(e)=>setEmail(e.target.value)} />
             <TextField id="password" className={classes.input}   value={password} label="password" variant="filled" type='password' onChange={(e)=>setPassword(e.target.value)} />
             <button className='i-signin' disabled={isInValid}>Sign in</button >
             </form>
             </ThemeProvider>
            
             <div className='small-box'>
             <FormControlLabel control={<Checkbox  checked={checked} style={{fontSize:'13px'}}
                              onChange={handleChange}
                              color='primary'
                            
                             inputProps={{ 'aria-label': 'primary checkbox' }} />} 
                                label="Remember me" color='#8c8c8c' />
                                <p>need help?</p>

               
             </div>
             <div className='last-box'>
               <p className='item-1' > <span className='facebook'><AiFillFacebook/></span>Login With facebook</p>
               <p className='item-2' >New to Netflix ?  <Link to='/signup'> <span>Sign up Now</span>  </Link></p>
               <p className='item-3' >This page is protected by Google reCAPTCHA to ensure you're not a bot.<span> Learn more.</span></p>
               
             </div>
        </div>
    )
}

export default MyForm
