import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../firebase";
import { auth } from "../../firebase";

const useFirestore = () => {
  const asteroidRef = firestore.collection("asteroids");
  const [user] = useAuthState(auth);


//POST Asteroid
const [isExists, setIsExists] = useState(false)
const [loading, setLoading] = useState(false)
  function postAsteroid(asteroid) {
    setLoading(false)
    const { uid } = auth.currentUser;
    const data = asteroid.asteroid;
    asteroidRef
    .where("uid", "==", uid)
    .where("data.id", "==", data.id).limit(1)
    .get()
    .then((item) => {
      if (item.docs.length === 0){
        asteroidRef.add({ data, uid })
        setIsExists(false)
        setLoading(true)
      } else {setIsExists(true) ;setLoading(true)}
       ;})
  }

//GET All Asteroids
  var [getAsteroidData, setGetAsteroidData] = useState([]);

  function getAsteroids() {
    const { uid } = auth.currentUser;
    
    asteroidRef
      .where("uid", "==", uid)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setGetAsteroidData(items);
      });
  }

  //DELETE Asteroid

  function deleteAsteroid(asteroid) {
    const { uid } = auth.currentUser;
    asteroidRef
      .where("uid", "==", uid)
      .where("data.id", "==", asteroid.id).limit(1)
      .get()
      .then((item) => {
        item.docs.map((doc) => {
          asteroidRef
            .doc(doc.id)
            .delete()
            .catch((err) => {
              console.error(err);
            });
        });
        console.log("deleted");
      });
  }
  useEffect(() => {
    if (user) {
      getAsteroids();
    }
  }, []);

  return {
    postAsteroid,
    getAsteroids,
    getAsteroidData,
    deleteAsteroid,
    isExists, loading
  };
};

export default useFirestore;
