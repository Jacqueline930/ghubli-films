import React from "react";

const MovieSearch = (props) => {
    return (
        <form onSubmit={props.getTitleMovie}>
          <div class="autocomplete" style="width:300px;">
            <input style={{margin:"20px auto", display:"block"}}
               type="text" name="movieTitle" placeholder="Search for Movie..."/>
               <button> Search </button>
          </div>
        </form>
    )
}


export default MovieSearch;
