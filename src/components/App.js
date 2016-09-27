/* global google */
import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './App.css'
import './geosuggest.css'
import { getAirQuality } from './Client'


class App extends Component {

  onSuggestSelect(suggest) {
    let place = suggest.label;
    console.log(suggest)
    getAirQuality(place).then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
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
