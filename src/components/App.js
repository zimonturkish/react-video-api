import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term // this is how the youtube documentation say to call the param for the string
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar callMeWhenSubmitted={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
