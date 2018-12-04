import './Spinner.css';
import React from 'react';


//loading icon via semantic ui 
const Spinner = () => {
  return (
    <div class="ui segment loading-screen">
      <div class="ui active dimmer">
        <div class="ui loader">Loading....</div>
      </div>
    </div>

  );
}

export default Spinner;
