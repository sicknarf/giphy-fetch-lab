import React from "react";
import { useState } from "react";
import GifListItem from "./GifListItem";

function GifList({results}){
    // try{
    // const gifListItem = results.map((g, idx)=>
    //     idx < 8 && 
    //     <GifListItem
    //         key={idx}
    //         url={g.url} />)}
    // catch {

    // }
    // console.log(results)
    return(
        <div>
           <h2>this is giflist</h2>
           {/* {gifListItem} */}
        </div>
    )
}

export default GifList