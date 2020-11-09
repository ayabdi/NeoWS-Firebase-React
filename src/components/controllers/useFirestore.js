import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../firebase";
import { auth } from "../../firebase";

const useFirestore = () => {
  const asteroidRef = firestore.collection("asteroids");
  const [user] = useAuthState(auth);


//POST Asteroid
  function postAsteroid(asteroid) {
    const { uid } = auth.currentUser;
    const data = asteroid.asteroid;
    asteroidRef.add({ data, uid });
    console.log(asteroid.asteroid);
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
  };
};

export default useFirestore;
