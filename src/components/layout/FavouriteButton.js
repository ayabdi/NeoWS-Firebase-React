import React , {useState} from "react";
import useFirestore from '../controllers/useFirestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../firebase";
import PromptSignIn from "../modals/PromptSignInModal";
const FavouriteButton = (asteroid) => {
    const [user] = useAuthState(auth);
    
   const {postAsteroid, isExists, loading} = useFirestore();


    const [isActive, setIsActive] = useState(false)
    const activityHandler = () => {
            setIsActive(true)
            setTimeout(() => {
              setIsActive(false)
            }, 2000);
    } 
    
   

  return (
    <>
    {user ?
    <div>
         <button className = 'btn custom sky block circular' onClick ={() =>{ activityHandler(); postAsteroid(asteroid)}}> Add </button> 
        <p className={loading && isActive? "info-tog" : loading ? 'info' : 'info'}>{ loading && !isExists ?  'Added to favourites!' : loading ? 'Asteroid already added!' : ' asd'}</p>
    </div>
    : <PromptSignIn>Add</PromptSignIn> }
    </>
  );
};

export default FavouriteButton;
