import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';



class App extends Component {

   state = {
     lat: null,
     error: ""
   }

//request users location 
componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    (position)=> this.setState({lat: position.coords.latitude}),
    (err) => this.setState({ error: err.message})
  );
}


 render () {
   if(this.state.error) {
     return <h2>There was an error:{this.state.error}</h2>
   } else if (this.state.lat) {
     return <SeasonDisplay  lat={this.state.lat}/>
   } else {
     return <Spinner />
   }

 }

}

ReactDOM.render(<App/>, document.getElementById("root"));
