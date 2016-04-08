import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';
import Geosuggest from 'react-geosuggest';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import { AppBar, List, Divider } from 'material-ui';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {

  render() {
    return (
        <div>
          <HeaderComponent />
          <SearchComponent />
        </div>
    );
  }

}
