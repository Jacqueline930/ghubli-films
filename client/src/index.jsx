import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css"
import MovieSearch from "./components/MovieSearch.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieList: []
    }
  }


  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className= "App-title">Ghubli Films</h1>
          </header>
        </div>
        <MovieSearch />
      </div>
    )
  }
}






ReactDOM.render(<App />, document.getElementById('app'));
