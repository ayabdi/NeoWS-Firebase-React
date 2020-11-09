import React from 'react'
import { Row, Col, Container, Card} from "react-bootstrap";
import FieldTitles from './FieldTitles'
import DeleteModal from '../modals/DeleteModal'
import useFirestore from '../controllers/useFirestore'

const Favourites = () => {
    const { getAsteroidData} = useFirestore();
    
    
  
    const titles = [ "Asteroid ID",
    "Name",
    "Absolute Magnitude",
    "Estimated Diameter(km)",
    "Potentially Hazardous?",
    " ",
  ];
    return (
        <Card className="card-list">
            <FieldTitles titles={titles} />
        <Container>
           {getAsteroidData!=null  && getAsteroidData.map((asteroid, i) => (
          <div>
            <hr />
            {asteroid.data!=null&&
            <Row className="asteroid-rows">
              <Col> {asteroid.data!=null &&asteroid.data.id} </Col>
              <Col> {asteroid.data.name} </Col>
              <Col> {asteroid.data.absolute_magnitude_h} </Col>
              <Col>
               
                {
                  parseInt(asteroid.data.estimated_diameter.meters.estimated_diameter_min).toFixed(1)
                } - {parseInt(asteroid.data.estimated_diameter.meters.estimated_diameter_max).toFixed(1)}{" "}
              </Col>
              <Col>
              
                {asteroid.data.is_potentially_hazardous_asteroid
                  ? "Yes"
                  : "No"}
              </Col>
              <Col>
              <DeleteModal props = {asteroid.data}/>
              <p class="info">Added to favourites!</p>
              </Col>
            </Row>}
          </div> 
           ))}
        </Container>
        </Card>
    )
}

export default Favourites
