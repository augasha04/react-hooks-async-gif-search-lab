import React from "react";
import GifListContainer from './GifListContainer';
import NavBar from "./NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <GifListContainer />
      </div>
    );
  }
}

export default App;
