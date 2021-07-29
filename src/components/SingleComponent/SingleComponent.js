import React,{useEffect,useState} from 'react'
import './SingleComponent.css'
const SingleComponent = ({title,subTitle,image,alt,direction}) => {
    


    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
    
    
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
    //  console.log(windowDimensions.width)
    

    return (
        <div className='item'>
        <div className='card' style={{ flexDirection:`${windowDimensions.width>600?direction:'column'}` }}>

            <div className='info'>
            <h1 className='title'>{title}</h1>
            <h2 className='subTitle'>{subTitle}</h2>
            </div>
            <div className='img-container'>
                <img src={image} alt={alt}/>
            </div>
           
        </div>
        </div>
    )
}

export default SingleComponent

