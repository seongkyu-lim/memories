import React from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BackgroundImg from "/Users/limseongkyu/memories/src/Image/background4.jpeg";
import Book1Img from "/Users/limseongkyu/memories/src/Image/Book.jpeg";
import FishbowlImg from "/Users/limseongkyu/memories/src/Image/fishbowl.jpeg";
import RicecookerImg from "/Users/limseongkyu/memories/src/Image/ricecooker.jpeg";

class Main extends React.Component {
  render() {
    const activeStyle = {
      background: "gray",
      fontSize: "2rem",
    };
    return (
      <Container>
        <NavLink to="/Book1" activeStyle={activeStyle}>
          <Book1Image src={Book1Img} />
        </NavLink>
        <NavLink to="/Fishbowl" activeStyle={activeStyle}>
          <Fishbowl1 src={FishbowlImg} />
        </NavLink>
        <NavLink to="/Ricecooker" activeStyle={activeStyle}>
          <Ricecooker1 src={RicecookerImg} />
        </NavLink>
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
  position: relative;
  top: 230px;
  left: 600px;
  margin: auto;
  display: block;
  width: 120px;
  height: 120px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const Fishbowl1 = styled.img`
  position: relative;
  top: 250px;
  left: 400px;
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const Book1Image = styled.img`
  position: fixed;
  top: 20px;
  left: 100px;
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Main;
