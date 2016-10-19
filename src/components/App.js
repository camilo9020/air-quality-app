/* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest';
// import '../css/App.css'
// import '../css/geosuggest.css'
import { search, closeError } from '../actions/searchActions'
import DataTable from './DataTable'
import Errors from 'react-errors'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      items: [],
      errors: [],
    };
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
    this.props.search(place);
    this.setState({
      place: '',
    })
  }

  handleErrorClose(index) {
   this.props.dispatch(closeError())
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
        <DataTable items={this.props.items} />
        <Errors
          errors={this.props.errors}
          onErrorClose={this.handleErrorClose.bind(this)}
        />
      </div>

    )
  }
}

const mapStateToProps = (store) => {
  return {
    items: store.search.items,
    errors: store.handleError.errors
  }
}

const mapDispatchToProps = dispatch => ({
    search: (place) => dispatch(search(place))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
