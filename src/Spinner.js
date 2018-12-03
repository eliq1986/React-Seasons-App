import './Spinner.css';
import React from 'react';

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
