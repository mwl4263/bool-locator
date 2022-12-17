/* eslint-disable prettier/prettier */
import React from "react";
import {Easing, Image, StyleSheet, Animated} from 'react-native';


const Cup = ({startPos, styleCup}) => (
    <Animated.Image style={styleCup} source={require('./img/cup.png')} />

);

const styles = StyleSheet.create({
    base: {
        justifyContent: 'center',
        width: 100,
        height: 100,
        transform: [{rotate: '0deg'}]
    }
})
export default Cup;
