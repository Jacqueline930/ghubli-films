import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css"
import MovieSearch from "./components/MovieSearch.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: []
    }
    this.getTitleMovie = this.getTitleMovie.bind(this)
  }

  componentDidMount(){
    axios.get(`https://ghibliapi.herokuapp.com/films/Castle-in-the-Sky`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => console.error(err))
  }

  getTitleMovie(e) {
    // e.preventDefault();
    // const movie = e.target.elements.movieTitle.value;
    axios.get(`https://ghibliapi.herokuapp.com/films/`)
      .then((res) => {
        console.log(res);
      })
  }

  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Ghubli Films</h1>
          </header>
        </div>
        <MovieSearch getTitleMovie={this.getTitleMovie} />
      </div>
    )
  }
}






ReactDOM.render(<App />, document.getElementById('app'));
