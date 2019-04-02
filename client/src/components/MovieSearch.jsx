import React from "react";
import axios from "axios";

class MovieSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
  }

  handleTitle() {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit() {
    axios.get("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49").then(function (response) {
      return response.json();
    }).then(function (responseData) {
      _this.setState({
        data: responseData
      });
    });
  };


  render(){
    return (
      <div className="Search">
        <input type="text" placeholder="Search for Movie..."></input>
        <button onClick={this.handleSubmit}> Search </button>
      </div>
    )
  }
}


export default MovieSearch;
