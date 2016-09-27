/* global google */
import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './App.css'
import './geosuggest.css'


class App extends Component {

  onSuggestSelect(suggest) {
   console.log(suggest)
  }

  render() {
    return (
      <div className="App">
       <Geosuggest
         placeholder="Start typing!"
         onSuggestSelect={this.onSuggestSelect.bind(this)}
         location={new google.maps.LatLng(53.558572, 9.9278215)}
         radius="20" />
      </div>
    );
  }
}

export default App;
