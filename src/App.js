import React from "react";
import styled from "styled-components";

import BackgroundImg from "/Users/limseongkyu/memories/src/Image/background3.jpeg";
import Book1Img from "/Users/limseongkyu/memories/src/Image/Book.jpeg";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Book1Image src={Book1Img} />
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

const Book1Image = styled.img`
  width: 300px;
  height: 150px;
`;

export default App;
