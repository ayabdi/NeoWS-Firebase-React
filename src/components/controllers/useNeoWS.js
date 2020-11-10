import { useState, useEffect } from "react";
import { format} from "date-fns";
import axios from "axios";

const useNeoWS = () => {

  // tab switch counter
  const [count, setCount] = useState(1);

  //fetching Asteroids
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [asteroids, fetchAsteroids] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=${size}&api_key=vXM34VOEDdV1OJom1S9c7TTqfo0MzVFDQPybpEpA`,
    }).then((res) => {
      fetchAsteroids(res.data.near_earth_objects);
     
    });
  }, [page, size]);

  //---------------------------------------------
  //fetch by ID on Submit

  const [searchID, setSearchID] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchID(value);
  };

  const [asteroidByID, fetchAsteroidByID] = useState([]);
  const fetchByID = (id) =>{
    axios({
      method: "GET",
      url: `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=vXM34VOEDdV1OJom1S9c7TTqfo0MzVFDQPybpEpA`,
    }).then((res) => {
      fetchAsteroidByID([res.data]);
      
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    fetchByID(searchID)
    setCount(2);
  };

  //--------------------------------------------------
  //Search By Date -- Date Picker

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchData, setSearchData] = useState({});


  useEffect(() => {
    var start = format(new Date(startDate), "yyyy-MM-dd");
    var end = format(new Date(endDate), "yyy-MM-dd");
    if (startDate != null) {
      axios({
        method: "GET",
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&detailed=true&api_key=vXM34VOEDdV1OJom1S9c7TTqfo0MzVFDQPybpEpA`,
      }).then((res) => {
        setSearchData(res.data.near_earth_objects);
        
      });
    }
  }, [endDate]);

  return { count, setCount, handleChange, searchID, fetchByID, onSubmit, asteroidByID, asteroids, page, setPage, size, setSize,
     startDate, setStartDate, endDate, setEndDate, searchData  };
};

export default useNeoWS;
