import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../css/Main.scss'

const Tabs =  ({setCount ,count, titles}) =>{
  return (
    <div>
     
      <Container className="tabs">
        <Row className="tabs-row">
        { titles.map( (title, i) => ( 
          <Col
            className={count === i+1 ? `tab-active` : 'tab'}
            onClick={() => setCount(i+1)}
            sm={2}
          >
           {title}
          </Col>
            ))}
        </Row>
        <hr
          style={{ borderTop: "2.8px solid rgba(0,0,0,.1)", marginTop: "-1.4px" }}
        ></hr>
      </Container>
    
    </div>
  );
};

export default Tabs;
