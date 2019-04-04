import React from "react";

const MovieSearch = (props) => {
    return (
      <form onSubmit={props.getTitleMovie}>
        <input style={{margin:"20px auto", display:"block"}}
               type="text" name="movieTitle" placeholder="Search for Movie..."/>
             <button> Search </button>
      </form>
    )
}


export default MovieSearch;
