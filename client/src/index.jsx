import React from "react";
import ReactDOM from "react-dom";
import MovieSearch from "./MovieSearch.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return(
      <div>
      <h1>Ghubli Films</h1>
      <MovieSearch />
      </div>
    )
  }
}








ReactDOM.render(<App />, document.getElementById('app'));
