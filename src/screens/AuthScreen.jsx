import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AuthScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.loginButton} onPress={this.props.facebookLogin}>
                    <Text style={styles.loginButtonText}>LOGIN WITH FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#4267B2',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 100
    },
    loginButtonText: {
        color: 'white',
        fontSize: 22
    }
});

export default connect(null, actions)(AuthScreen);