import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

    renderLastSlide(index) {
        return index === this.props.data.length - 1 ?
            <TouchableOpacity style={styles.skipButton} onPress={this.props.onSlidesComplete}>
                <Text style={styles.skipButtonText}>I'M READY</Text>
            </TouchableOpacity>
        : null;
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
                return (
                    <View key={slide._id} style={[styles.slider, { backgroundColor: slide.bgColor }]}>
                        <Text style={styles.sliderText}>{slide.text}</Text>
                        { this.renderLastSlide(index) }
                    </View>
                );
        });
    }

    render() {
        return (
            <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
                    {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    sliderText: {
        fontSize: 30,
        color: 'white',
        textAlign: "center"
    },
    slider: {
        width: SCREEN_WIDTH,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },
    skipButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold"
    },
    skipButton: {
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 40,
        paddingVertical: 10,
    }
});

export default Slides;