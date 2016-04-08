import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';

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
