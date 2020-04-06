import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';


class GateScreen extends Component {

    async componentDidMount() {
        //await AsyncStorage.removeItem('fb_token');
        const token = await AsyncStorage.getItem('fb_token');
        if (token !== null) {
            this.props.navigation.navigate('Main');
        } else {
            this.props.navigation.navigate('Welcome');
        }
    }

    render() {
        return null;
    }
}

export default connect(null, actions)(GateScreen);