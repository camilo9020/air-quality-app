/* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest';
import './App.css'
import './geosuggest.css'
import { search } from '../actions/searchActions'
// import { getAirQuality } from './Client.js'
import DataTable from './DataTable'
import Errors from 'react-errors'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      google: google,
      items: JSON.parse(localStorage.getItem('items')) || [],
      errors: [],
    };
    // this.handleErrorClose = this.handleErrorClose.bind(this);
    // this.handleError = this.handleError.bind(this);
  }

  onSuggestSelect(suggest) {
    let place = suggest.label;
    this.setState({
      place: place,
    });
  }

  searchAirQuality(e) {
    e.preventDefault();
    let place = this.state.place;
    this.props.dispatch(search(place))
    // getAirQuality(place).then((response) => this.handleResponse(response, place))
    // .catch((err) => {
    //   console.log(err)
    // })
  }


  // handleResponse(response, place) {
  //   let items = this.state.items;
  //   let data = response.data;
  //   data["country_name"] = {place:place}
  //   if ("error" in data ) {
  //     this.handleError(data)
  //   } else {
  //     this.handleSuccess(items, data)
  //   }
  // }

  // handleError(data) {
  //   const newError = new Error('Api error: ' + data.error.message );
  //   const newErrors = this.state.errors.slice();
  //   newErrors.push(newError);
  //   this.setState({
  //     errors: newErrors,
  //     place: '',
  //     });
  // }

  // handleSuccess(items, data) {
  //   items.unshift(data)
  //   localStorage.setItem("items", JSON.stringify(items.slice(0,5)));
  //   this.setState({
  //     items: items,
  //     place: '',
  //   })
  // }

  handleErrorClose(index) {
    const newErrors = this.state.errors.slice();
    newErrors.splice(index, 1);
    this.setState({ errors: newErrors });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.searchAirQuality.bind(this)}>
          <Geosuggest
            placeholder="Type a location and press SEARCH button!"
            onSuggestSelect={this.onSuggestSelect.bind(this)}
            initialValue={this.state.place}
            location={new google.maps.LatLng(53.558572, 9.9278215)}
            radius="20"/>
          <button className="disabled" type="submit" disabled={!this.state.place}>Button</button>
        </form>
        <DataTable items={this.state.items} />
        <Errors
          errors={this.state.errors}
          onErrorClose={this.handleErrorClose}
        />
      </div>
    )
  }
}

function mapItems(store) {
  return {
    items: store.search.items,
  }
}


export default connect(mapItems)(App);
