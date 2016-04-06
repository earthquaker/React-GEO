import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
    let fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ];

    return (
      <Geosuggest
        placeholder="Start typing!"
        initialValue="Hamburg"
        fixtures={fixtures}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20" />
    );
  }

}
