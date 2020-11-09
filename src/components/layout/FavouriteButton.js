import React , {useState} from "react";
import useFirestore from '../controllers/useFirestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../firebase";
import PromptSignIn from "../modals/PromptSignInModal";
const FavouriteButton = (asteroid) => {
    const [user] = useAuthState(auth);
    
   const {postAsteroid} = useFirestore();


    const [isActive, setIsActive] = useState(false)
    const activityHandler = () => {
            setIsActive(true)
            setTimeout(() => {
              setIsActive(false)
            }, 1000);
    } 
    
   

  return (
    <>
    {user ?
    <div>
         <button className = 'btn sky block circular' onClick ={() =>{ activityHandler(); postAsteroid(asteroid)}}> Add </button> 
        <p className={isActive? "info-tog" : 'info'}>Added to favourites!</p>
    </div>
    : <PromptSignIn>Add</PromptSignIn> }
    </>
  );
};

export default FavouriteButton;
