import React from "react";
import { useState } from "react";

function SearchBar({search, handleChange}){



    return(
        <div>
           <input 
                value={search.parameter}
                name="parameter"
                onChange={handleChange}
                placeholder="enter your search here"/>
        </div>
    )
}

export default SearchBar