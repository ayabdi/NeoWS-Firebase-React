import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import useNeoWS from "../controllers/useNeoWS";
import FieldTitles from "./FieldTitles";
import SearchByDate from "./SearchByDate";

const DisplayByDate = () => {

    const {
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        searchData,
      } = useNeoWS();
  //set field titles
  const titles = ["Asteroid ID", "Name", "Miss Distance (km)"];

  var searchDataArray = Object.values(searchData);


  const rows = [...Array(Math.ceil(searchDataArray.length / 2))];
  // chunk the products into the array of rows
  const asteroidRows = rows.map((row, idx) =>
    searchDataArray.slice(idx * 2, idx * 2 + 2)
  );
  // map the rows as div.row
  const content = asteroidRows.map((row, idx) => (
    <Row key={idx}>
      {searchData != null &&
        row.map((column, idy) => (
          <Col>
            <Row>{column[0].close_approach_data[0].close_approach_date}</Row>

            <Card className="display-card">
              <FieldTitles titles={titles} />

              <hr style={{ marginTop: "0" }} />
              <Container>
                {column.map(
                  (asteroid, idz) =>
                    idz < 10 && (
                      <Row className="card-row">
                        <Col className="field-title-column">{asteroid.id}</Col>
                        <Col className="field-title-column">
                          {asteroid.name}
                        </Col>
                        <Col className="field-title-column">
                          {parseInt(
                            asteroid.close_approach_data[0].miss_distance
                              .kilometers
                          ).toFixed(0)}
                        </Col>
                      </Row>
                    )
                )}
              </Container>
            </Card>
          </Col>
        ))}
    </Row>
  ));

  return (
    <Container>
      <SearchByDate
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {content}
    </Container>
  );
};

export default DisplayByDate;
