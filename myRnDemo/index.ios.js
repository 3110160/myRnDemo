'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
} from 'react-native';

import Main from './js/main';

class myRnDemo extends Component {
	render() {
		return <Main/>
	}
}

AppRegistry.registerComponent('myRnDemo', () => myRnDemo);

