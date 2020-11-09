import React from 'react'
import FavouriteButton from './FavouriteButton'
import FieldTitles from "./FieldTitles";
import { Row, Col, Container, Card } from "react-bootstrap";


import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const DislpayList =  ({asteroids}) => {
  
 

  // field titles
  const titles = [
    "Asteroid ID",
    "Name",
    "Absolute Magnitude",
    "Estimated Diameter(km)",
    "Potentially Hazardous?",
    "Add to Favourites",
  ];
    return (

      <Card className="card-list">
        <FieldTitles titles={titles} />{" "}
        <Container>
                
           {asteroids!=null && asteroids.map((asteroid, i) => (
          <div key={i}>
            <hr />
            <Row className="asteroid-rows">
              <Col> {asteroid.id} </Col>
              <Col> {asteroid.name} </Col>
              <Col> {asteroid.absolute_magnitude_h} </Col>
              <Col>
               
                {
                  parseInt(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(1)
                } - {parseInt(asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(1)}{" "}
              </Col>
              <Col>
              
                {asteroid.is_potentially_hazardous_asteroid
                  ? "Yes"
                  : "No"}
              </Col>
              <Col>
                <FavouriteButton asteroid = {asteroid}/> 
              </Col>
            </Row>
          </div>
        ))}
        </Container>
        </Card>
        
    )
}

export default DislpayList
