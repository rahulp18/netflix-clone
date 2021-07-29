import React,{useState,useEffect} from 'react'
import NavBar from './Navbar/NavBar'
import './MainComponent.css'
import FirstSection from './FirstSection/FirstSection'
import Card from './Card'
import Player from '../player'
import SingleLineImageList from './ForPhone/SingleLineImageList'
import Footer from '../Footer/Footer'
const MainComponent = ({profile,category,setCategory,slideRows,setSearchTerm,searchTerm}) => {
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

   
    return (
        <>
        <div className='mc-container'>
            <NavBar profile={profile} category={category} setSearchTerm={setSearchTerm} searchTerm={searchTerm}
                setCategory={setCategory}  />
            <FirstSection/>
        </div>
        <Card.Group>
            { 
                slideRows.map((slideItems)=>(
                    <Card key={`${category}-${slideItems.title.toLowerCase()}`}>
                   <Card.Title>{slideItems.title}</Card.Title>
                   
                   {
                       windowDimensions.width<700?<SingleLineImageList slideItems={slideItems} category={category}/>:
                       <Card.Entities>
                       {
                           slideItems.data.map((item)=>(
                               <Card.Item key={item.title} item={item}>
                                  <Card.Image 
                                  src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                  />
                                  <Card.Meta>
                                      <Card.SubTitle>{item.title}</Card.SubTitle>
                                      <Card.Text>{item.description}</Card.Text>
                                  </Card.Meta>
                               </Card.Item>
                            
                           ))
                       }
                       </Card.Entities>

                   }
                 
                
               
                   <Card.Feature category={category} >
                   
                   <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
                </Player>
 
                   </Card.Feature>
                    </Card>
                ))
            }
        </Card.Group>
        <Footer/>
        </>
       
    )
}

export default MainComponent
