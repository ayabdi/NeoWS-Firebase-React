import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const FieldTitles = ({ titles }) => {
  return (
    <Container>
      <Row className="asteroid-rows">
        {titles.map((title, i) => (
          <Col className="field-title-column"> {title} </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FieldTitles;
