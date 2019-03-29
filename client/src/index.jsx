import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css"
// import MovieSearch from "./MovieSearch.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieList: []
    }
  }

  // getMovie () {
  //   axios.get("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
  //     .then((res) => {
  //       console.log(res)
  //     )}
  // }


  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className= "App-title">Ghubli Films</h1>
          </header>
        </div>

      </div>
    )
  }
}








ReactDOM.render(<App />, document.getElementById('app'));
