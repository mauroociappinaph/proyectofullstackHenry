import React, { useState, useParams } from 'react'; 
import styled from './Detail.Module.css';



class Details extends React.Component {
render() {
      return (
        <div className={styled.div}>
          <h1>About</h1>
          <p>This is the about page.</p>
        </div>
      );
    }
  }
  
  export default Details;