import React from "react";
import styled from "styled-components";

import BackgroundImg from "/Users/limseongkyu/memories/src/Image/background4.jpeg";
import Book1Img from "/Users/limseongkyu/memories/src/Image/Book.jpeg";
import Fishbowl from "/Users/limseongkyu/memories/src/Image/fishbowl.jpeg";
import Ricecooker from "/Users/limseongkyu/memories/src/Image/ricecooker.jpeg";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Book1Image src={Book1Img} />
        <Fishbowl1 src={Fishbowl} />
        <Ricecooker1 src={Ricecooker} />
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
