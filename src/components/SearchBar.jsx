import React from "react";


export default function SearchBar(props) {
   return (
      <div>
      <input type='search' />
      <button onClick={props}>Agregar</button> 
      </div>
   );
}
