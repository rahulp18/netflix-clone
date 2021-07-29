import React,{useState,useContext} from 'react'
import './form.css'
import {Checkbox, FormControlLabel,  TextField} from '@material-ui/core'
import { makeStyles, ThemeProvider,createTheme } from '@material-ui/core/styles';
import {AiFillFacebook} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {FirebaseContext} from '../../context/firebase'
import * as ROUTES from '../../constant/routes'
import {useHistory} from 'react-router-dom'
import './form.css'



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

const Form = () => {
    const [checked, setChecked] = React.useState(true);
    const classes = useStyles();
    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
const history=useHistory();
const {firebase}=useContext(FirebaseContext);

// Check Invalid
const isInValid =userName===''|| email===''||password==='';






    const handleChange = (event) => {
        setChecked(event.target.checked);

  

      };
    

const handelSignUp=(e)=>{
    e.preventDefault();
    // console.log(email,userName,password)

    // firebase Work
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result)=>{
        result.user.updateProfile({
          displayName: userName,
          photoURL:Math.floor(Math.random()*5)+1,

        }).then(()=>{
          history.push(ROUTES.BROWSE)
        })
    })
    .catch((error)=>{
      setEmail('');
      setUserName('');
      setPassword('');
      setError(error.message);
    })
}

    const dakrTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#8c8c8c;',
            },
            
             
        },
    
    })
    return (
        <div className='i-container'>
        <h1 className='i-h1'>Sign Up</h1>
        {
            error?<div className='error-box'>
            <p className='item-3'>{error?'Message: '+error:null}</p>
            </div>:null
          }
         
        <ThemeProvider theme={dakrTheme}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handelSignUp} method='POST'>
          <TextField id="email" className={classes.input}   value={userName} label="Enter user name" variant="filled" onChange={(e)=>setUserName(e.target.value)} /> 
           <TextField id="email" className={classes.input}   value={email} label="Email or phone number" variant="filled" onChange={(e)=>setEmail(e.target.value)} />
           <TextField id="password" className={classes.input}   value={password} label="password" variant="filled" type='password' onChange={(e)=>setPassword(e.target.value)} />
           <button className='i-signin' disabled={isInValid} >Sign up</button >
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
             <p className='item-2' >Already Register ? <Link to='/signin'> <span>Sign In Now</span>  </Link></p>
             <p className='item-3' >This page is protected by Google reCAPTCHA to ensure you're not a bot.<span> Learn more.</span></p>
             
           </div>
      </div>
    )
}

export default Form
