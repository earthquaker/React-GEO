import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import { List } from 'material-ui';
import { Grid, Row, Col } from 'react-bootstrap';
import ResultComponent from './ResultComponent';

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.state = {
            results: []
        };
    }

    onSuggestSelect(suggest) {
        let list = this.state.results;
        list = list.concat(suggest.gmaps.address_components);
        this.setState({
            results: list
        });
    }

    render() {
        let fixtures = [
            {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
            {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
            {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
        ];

        return (
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
                                radius="20"
                            />
                        </List>
                    </Col>

                    <Col xs={2} md={2}>
                        <ResultComponent className="item" resultProps={this.state.results}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}