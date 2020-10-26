import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Row, Col, Container } from "react-bootstrap";


const Asteroids = () => {

    const [asteroids, fetchAsteroids] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=vXM34VOEDdV1OJom1S9c7TTqfo0MzVFDQPybpEpA`,
          }).then((res) => {
            fetchAsteroids(res.data.near_earth_objects);
            console.log(res.data.near_earth_objects)
          });
         
    }, [])
  return (
    <section>
        <br/>
        <br/>
        <br/>
        <br/>
      <Container>
        <Row >
         <Col md={2}> Asteroid ID </Col> 
          <Col md={2}> Name </Col> 
          <Col md={2}> Absolute Magnitude </Col> 
          <Col md={2}> Estimated Diameter </Col>
          <Col md={2}>  Potentially Hazardous? </Col>
        </Row>
       { asteroids.map((asteroid, i) => (
        <Row >
         <Col md={2}> {asteroid.id} </Col> 
          <Col md={2}> {asteroid.name} </Col> 
          <Col md={2}> {asteroid.absolute_magnitude_h} </Col> 
          <Col md={2}> {asteroid.estimated_diameter.meters.estimated_diameter_min} - {asteroid.estimated_diameter.meters.estimated_diameter_max} </Col>
          <Col md={2}>  {asteroid.is_potentially_hazardous_asteroid} </Col>
        </Row>
       ))}
      </Container>
    </section>
  );
};

export default Asteroids;
