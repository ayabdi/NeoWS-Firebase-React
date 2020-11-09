import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SearchByDate = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <label className="conrol-label">Select Start Date</label>
          <br />
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="search-box date"
          
          />
        </Col>

        <Col md={4}>
          <label className="conrol-label">Select End Date</label>
          <br/>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            maxDate={addDays(startDate, 7)}
            className="search-box date"
            
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByDate;
