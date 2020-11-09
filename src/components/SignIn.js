import React from "react";
import {Button} from "react-bootstrap";

import 'firebase/firestore';
import 'firebase/auth';

import {signInWithGoogle} from '../firebase';



const SignIn = () => {
  return (
    
      <Button className="btn sky block" variant = 'primary' onClick={signInWithGoogle} style= {{marginLeft: '10px'}} >
        Sign In
      </Button>
      
  
  );
};

export default SignIn;
