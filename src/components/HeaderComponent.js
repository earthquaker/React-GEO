import React, { Component } from 'react';
import { AppBar, List, Divider } from 'material-ui';

export default class HeaderComponent extends Component {

    render() {
        return (
            <AppBar
                style={{backgroundColor:'#FFF'}}
                titleStyle={{color:'#36AFC3'}}
                title="flowerapp"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }

}