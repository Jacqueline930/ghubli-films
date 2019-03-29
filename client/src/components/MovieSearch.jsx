import React from "react";

class MovieSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
  }

  

  render(){
    return (
      <div>
        <input value={this.state.title}></input>
      </div>
    )
  }
}


export default MovieSearch;
