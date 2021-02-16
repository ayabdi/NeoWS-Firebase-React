import React, { Fragment } from "react";
import { Container} from "react-bootstrap";
import SideBar from "../SideBar";
import SearchBox from "./SearchBox";
import Tabs from "./Tabs";
import Favourites from "./Favourites";
import DisplayList from "./DislpayList";
import DisplayByDate from "./DisplayByDate";
import Paginate from "./Paginate";
import "../css/Main.scss";

import useNeoWS from "../controllers/useNeoWS";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
const Main = () => {
  const [user] = useAuthState(auth);
  const {
    count,
    setCount,
    handleChange,
    searchID,
    onSubmit,
    asteroidByID,
    asteroids,
    page,
    setPage,
    size,
    setSize,
  } = useNeoWS();


  //tab titles
  const tabTitles = ["View All", "View By ID", "View By Date"];
  if (user) {
    tabTitles.push("Favourites");
  }
  return (
    <Fragment>
      <SideBar count={count} setCount={setCount} />
      <header>
          <h1>Near Earth Objects</h1>
          </header>
      <section className="home">
        <div className="breaker"></div>
        <Container>
        
          <SearchBox
            handleChange={handleChange}
            value={searchID}
            onSubmit={onSubmit}
          />
        </Container>
        <Tabs count={count} setCount={setCount} titles={tabTitles} />

        <Container className="asteroid-list">
          {count === 4 && user ? (
            <Favourites />
          ) : count === 3 ? (
            <DisplayByDate />
          ) : count === 2 ? (
            <DisplayList asteroids={asteroidByID} />
          ) : (
            <section>
              <DisplayList asteroids={asteroids} />
              <Paginate
                setPage={setPage}
                page={page}
                setSize={setSize}
                size={size}
              />
            </section>
          )}
        </Container>
      </section>
    </Fragment>
  );
};

export default Main;
