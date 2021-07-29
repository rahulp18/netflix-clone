import React from 'react'
// import * as ROUTES from '../../constant/routes'
import Header from '../header/header'
import './Profile.css'
export const ProfileContainer = ({user,setProfile}) => {
      
    return (
        <>
            <Header bg={false} dis={false} />
            <div className='p-box'>
                <h1 className='p-box-h1'>Who's Watching ?</h1>
                <section className='profile-box colo' onClick={()=>setProfile({displayName:user.displayName,
                                                                        photoURL:user.photoURL
                                                                       })} >
                   <img src={user.photoURL?`/images/users/${user.photoURL}.png`:'/images/misc/loading.gif'} alt='' className='colo'/>
                   <h2 className='p-box-h2 colo'>{user.displayName}</h2>
                   </section>
            </div>
        </>
    )
}

 