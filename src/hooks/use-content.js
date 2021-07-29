import {useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../context/firebase';


export default function Content(target){
    const [content,setContent]=useState([]);
    const {firebase}=useContext(FirebaseContext);


    useEffect(() => {
      
        firebase.firestore().collection(target).get().then((snapshot)=>{
      const allContent=snapshot.docs.map((contentObj)=>({
          ...contentObj.data(),
          docsId:contentObj.id,

      }));

      setContent(allContent);
        })
        .catch((error)=>{
console.log(error.message);
        });
    
    }, [])


    return {[target]:content};
}