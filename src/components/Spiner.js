import React, { Component } from 'react';
import loading from './Hourglass.gif';
const Spiner=()=> {
    return (
      <div className="text-center">
         <img src={loading} alt="loading"/>
      </div>
    );
    }

export default Spiner;
