/* eslint-disable prettier/prettier */
import React from "react";
import {Image, StyleSheet} from 'react-native';


const Cup = ({flippedState}) => (


    flippedState ? <Image style={styles.rotate} source={require('./img/cup.png')} /> : <Image style={styles.basicCup} source={require('./img/cup.png')} />

);


const styles = StyleSheet.create({
    rotate: {
        justifyContent: 'center',
        width: 100,
        height: 100,
        transform: [{rotate: '180deg'}],
        transition: 'transform 150ms ease', // smooth transition
    },
    basicCup: {
        transform: [{rotate: '0deg'}],
        transition: 'transform 150ms ease',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
});

export default Cup;
