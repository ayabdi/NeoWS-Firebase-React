import React from 'react'
import {auth} from '../firebase';



const SignOut = () => {
    return auth.currentUser && (
        <button className="sign-out" style= {{marginLeft: '200px'}} onClick={() => auth.signOut()}>Sign Out</button>
      )
    
}

export default SignOut
