/* global google */
import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './App.css'
import './geosuggest.css'
import { getAirQuality } from './Client'
import DataTable from './DataTable'
import Errors from 'react-errors'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem('items')) || [],
      errors: [],
    };
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  onSuggestSelect(suggest) {
    let place = suggest.label;
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
      this.handleError(data)
    } else {
      this.handleSuccess(items, data)
    }
  }

  handleError(data) {
    const newError = new Error('Api error: ' + data.error.message );
    const newErrors = this.state.errors.slice();
    newErrors.push(newError);
    this.setState({ errors: newErrors });
  }

  handleSuccess(items, data) {
    items.unshift(data)
    localStorage.setItem("items", JSON.stringify(items.slice(0,5)));
    this.setState({
      items: items,
    })
  }

  handleErrorClose(index) {
    const newErrors = this.state.errors.slice();
    newErrors.splice(index, 1);
    this.setState({ errors: newErrors });
  }

  render() {
    return (
      <div className="App">
       <Geosuggest
        placeholder="Type a location and press ENTER!"
        onSuggestSelect={this.onSuggestSelect.bind(this)}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20" />
        <DataTable items={this.state.items} />
        <Errors
          errors={this.state.errors}
          onErrorClose={this.handleErrorClose}
        />
      </div>
    )
  }
}

export default App;
