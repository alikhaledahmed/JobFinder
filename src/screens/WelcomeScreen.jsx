import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Slides from '../components/Slides';

const SLIDES_DATA = [
    { _id: 0, text: 'Welcome to Job Finder!', bgColor: '#1A535C'},
    { _id: 1, text: 'You can easily find jobs!', bgColor: '#FF6B6B'},
    { _id: 2, text: 'Set your location, then swipe away!', bgColor: '#69306D'}
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Slides data={SLIDES_DATA} onSlidesComplete={this.onSlidesComplete} />
        );
    }
}

const styles = StyleSheet.create({

});

export default WelcomeScreen;