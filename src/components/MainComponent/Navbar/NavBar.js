import React,{useState,useEffect,useContext} from 'react'
import logo from '../../../logo.svg'
import './NavBar.css'
 
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'
import { FirebaseContext } from '../../../context/firebase'
import Search from '../Search/Search'
 

const NavBar = ({profile,setCategory,category,setSearchTerm,searchTerm}) => {
   
 
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // console.log(windowDimensions)
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

 
const {firebase}=useContext(FirebaseContext);
  const [show, setShow] = useState(false);
  // console.log(show)
    return (
       <>
        <div className='nav-container'  >
           <section className='logo-box'>
             <img src={logo} alt='netflix logo' className='logo'/>
             <div className='links'>
             <p className={category==='series'?'active':'non-active'} onClick={()=>setCategory('series')} >Series</p>
             <p className={category==='films'?'active':'non-active'}  onClick={()=>setCategory('films')} >Films</p>
            
           </div>
           </section>
         {
           windowDimensions.width<600?null:<Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
         }
           <div className='fs-user' onClick={()=>setShow(!show)} >
           
             <img src={`/images/users/${profile.photoURL}.png`} alt='png' className='user-image'/>
             {
               show?<FaAngleUp className='angle' />:<FaAngleDown className='angle'/>
             }
             
           </div>
        
         
        </div>
       
        <div className={show?'drop-down':'drop-down hide'}>
          <div className='nav-box'>
          <img src={`/images/users/${profile.photoURL}.png`} alt='png' className='user-image img-1' />
             <p className='user-name'>{profile.displayName}</p>
          </div>
             <button   className='signin' style={{fontSize:'12px',marginTop:'6px'}} onClick={()=>firebase.auth().signOut()} >Sign Out</button>
             </div>
             {
           windowDimensions.width>600?null:show?null:<div className='search-box'><Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/></div>
         }
        </>
    )
}

export default NavBar
