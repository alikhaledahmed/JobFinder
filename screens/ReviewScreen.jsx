import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

class ReviewScreen extends Component {    
    render() {
    console.log();
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Review Screen</Text>
                <Button title="Settings Screen" onPress={() => this.props.navigation.navigate('Settings')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
});

export default ReviewScreen;