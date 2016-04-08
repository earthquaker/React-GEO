import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class ResultComponent extends Component {
    render() {
        console.log(this.props);
        let nr = 0;
        let res = this.props.resultProps.map( theProp =>
            <div key={nr++}> {theProp.long_name}</div>
        );
        return (
            <div>
                {res}
            </div>
        )
    }
}