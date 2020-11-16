import React from "react";
import styled from "styled-components";
import BackgroundImg from "/Users/limseongkyu/memories/src/Image/background2.jpeg";

class App extends React.Component {
  render() {
    return <Container></Container>;
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

export default App;
