import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { Fishbowl, Ricecooker, Book1 } from "../Pages";

import BackgroundImg from "/Users/limseongkyu/memories/src/Image/background4.jpeg";
import Book1Img from "/Users/limseongkyu/memories/src/Image/Book.jpeg";
import FishbowlImg from "/Users/limseongkyu/memories/src/Image/fishbowl.jpeg";
import RicecookerImg from "/Users/limseongkyu/memories/src/Image/ricecooker.jpeg";

class App extends React.Component {
  render() {
    const activeStyle = {
      background: "gray",
      fontSize: "2rem",
    };
    return (
      <Container>
        <NavLink exact to="/Book1" activeStyle={activeStyle}>
          <Book1Image src={Book1Img} />
        </NavLink>
        <NavLink exact to="/Fishbowl" activeStyle={activeStyle}>
          <Fishbowl1 src={FishbowlImg} />
        </NavLink>
        <NavLink exact to="/Ricecooker" activeStyle={activeStyle}>
          <Ricecooker1 src={RicecookerImg} />
        </NavLink>
        <Route path="/Book1" component={Book1} />
        <Route path="/Fishbowl" component={Fishbowl} />
        <Route path="/Ricecooker" component={Ricecooker} />
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
`;
const Ricecooker1 = styled.img`
  width: 200px;
  height: 200px;
`;
const Fishbowl1 = styled.img`
  width: 200px;
  height: 200px;
`;
const Book1Image = styled.img`
  width: 200px;
  height: 200px;
`;

export default App;
