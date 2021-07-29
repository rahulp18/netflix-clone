import React, { useContext, useState, useEffect } from 'react'
import { ProfileContainer } from '../Profile/Profile'
import { FirebaseContext } from '../../context/firebase'
import Loading from '../Loading/Loading'
import MainComponent from '../MainComponent/MainComponent'
import Fuse from 'fuse.js'
const BrowseContainer = ({ slides }) => {
     
    const [profile, setProfile] = useState({});
    const { firebase } = useContext(FirebaseContext);
    const [loading, setLoading] = useState(true);
    const [slideRows,setSlideRows]=useState([]);
    const [category,setCategory]=useState('series');
    const [searchTerm,setSearchTerm]=useState('')
// console.log(searchTerm)
    const user = firebase.auth().currentUser ? firebase.auth().currentUser : {};
       
    useEffect(() => {
       const fuse=new Fuse(slideRows,{keys:['data.description','data.title','data.genre']});
       const results=fuse.search(searchTerm).map(({item})=>item);
if(slideRows.length>0 && searchTerm.length>3 && results.length>0){
    setSlideRows(results);
}
else{
    setSlideRows(slides[category]);
}

    }, [searchTerm])
  
    useEffect(() => {
         
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, [profile.displayName])


    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides,category])

    return profile.displayName ? (
        <>
            {
                loading ? <Loading src={user.photoURL} /> : <MainComponent profile={profile} slides={slides} category={category} 
                setCategory={setCategory} slideRows={slideRows} setSearchTerm={setSearchTerm} searchTerm={searchTerm}
                />
            }
        </>
    )
        : (
            <div>
                <ProfileContainer user={user} setProfile={setProfile} />
            </div>
        )
}

export default BrowseContainer
