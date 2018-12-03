import './SeasonDisplay.css';
import React from 'react';




const seasonConfig = {
   summer: {
    text: "Let's hit the beach",
    iconName: "sun"
   },
   winter: {
     text: "Burr, it's chilly",
     iconName: "snowflake"
  
   }
}



const getSeason = (lat, month) => {
   if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
   return  lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = props => {
  const {lat} = props;
  const season = getSeason(lat, new Date().getMonth());
  const objSeason = seasonConfig[season];

  return (
  <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${objSeason.iconName} icon`} />
    <h1>{objSeason.text}</h1>
    <i className={`icon-right massive ${objSeason.iconName} icon`} />
  </div>
);
};

export default SeasonDisplay;
