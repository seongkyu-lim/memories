import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fishbowl, Ricecooker, Book1 } from "./Pages";

import BackgroundImg from "/Users/limseongkyu/memories/src/Image/background4.jpeg";
import Book1Img from "/Users/limseongkyu/memories/src/Image/Book.jpeg";
import FishbowlImg from "/Users/limseongkyu/memories/src/Image/fishbowl.jpeg";
import RicecookerImg from "/Users/limseongkyu/memories/src/Image/ricecooker.jpeg";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <NavLink exact to="/Book1" activeStyle={activeStyle}>
            <Book1Image src={Book1Img} />
          </NavLink>
          <Fishbowl1 src={FishbowlImg} />
          <Ricecooker1 src={RicecookerImg} />
          <Route path="/Book1" component={Book1} />
        </Container>
      </Router>
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
