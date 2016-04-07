import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import { AppBar, List, Divider } from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import { Grid, Row, Col } from 'react-bootstrap';

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
        <div>

          <AppBar style={{backgroundColor:'#FFF'}} titleStyle={{color:'#36AFC3'}} title="bloomdo" iconClassNameRight="muidocs-icon-navigation-expand-more" />

          <Grid>
          <Row className="show-grid">
            <Col xs={2} md={2} />
            <Col xs={12} md={6}>
              <List>
                <Geosuggest
                className=""
                inputClassName=""
                placeholder="Start typing!"
                initialValue="Narlundavagen 17"
                fixtures={fixtures}
                onSuggestSelect={this.onSuggestSelect}
                location={new google.maps.LatLng(53.558572, 9.9278215)}
                radius="20" />
              </List>
             </Col>
             <Col xs={2} md={2} />
            </Row>
          </Grid>

        </div>
    );
  }

}
