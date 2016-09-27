/* global google */
import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './App.css'
import './geosuggest.css'
import { getAirQuality } from './Client'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      errors: [],
    };
  }

  onSuggestSelect(suggest) {
    let place = suggest.label;
    console.log(suggest)
    getAirQuality(place).then((response) => this.handleResponse(response, place))
    .catch((err) => {
      console.log(err)
    })
  }

  handleResponse(response, place) {
    let items = this.state.items
    let data = response.data
    data["country_name"] = {place:place}
    if ("error" in data ) {
      console.log(data.error.message)
    } else {
      items.push(data)
      console.log(items)
    }
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
