/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import { Switch, Button } from 'react-native';
import { Dimensions } from 'react-native'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { width } from '@mui/system';
import { grey } from '@mui/material/colors';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
    <View style = { styles.sectionContainer } >
        <Text style = {
            [
                styles.sectionTitle,
                {
                    color: isDarkMode ? Colors.white : Colors.black,
                },
            ]
        } > { title } </Text> <Text style = {
            [
                styles.sectionDescription,
                {
                    color: isDarkMode ? Colors.light : Colors.dark,
                },
            ]
        } > { children } </Text> </View>
    );
};
var activeColor ="#3f1551";
var boolColor = 'darkgrey';
const App: () => Node = () => {


const boolLabel = "BOOL!";
    const [isShown, setIsShown] = useState(false);
const toggleBool = () => {
    boolColor = 'red';
    setIsShown((previousState) => !previousState);
}
    return (
    <SafeAreaView style = { isShown ? styles.backgroundActive : styles.mainPage  } >
 <View style = { isShown ? styles.backgroundActiveContainer : styles.container  } >
 <Text style={isShown ? styles.labelActive : styles.labelInactive}>{boolLabel}</Text>
 </View>
        <View style = { isShown ? styles.backgroundActiveContainer : styles.container  } >
        <Switch style= {styles.boolSwitch} trackColor = {
            { false: "#767577", true: "#fc7b03" }
        }
        thumbColor = { isShown ? "#e8ac74" : "#ddd" }
        ios_backgroundColor = "#3e3e3e"
        onValueChange={toggleBool}
        value = { isShown }/>


        </View>
        <View style = { isShown ? styles.backgroundActiveContainer : styles.container  }>
            { isShown ?  <Button
            title="Begin"
            backgroundColor="#e8ac74"
            color='#fc7b03'
            accessibilityLabel="Learn more about this purple button"
            /> : null  }

        </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    buttonActive: {
        backgroundColor:"#e8ac74",
        color: '#fc7b03',
        padding:  20,
    },
    labelInactive: {

        display: "none",
    },
    labelActive: {
        fontFamily: 'Courier',
        position: 'absolute',

        marginTop: '10%',
        textAlign: 'center',
        color: "#fc7b03",
        fontSize: 100,
    },
    backgroundActive: {
        backgroundColor: activeColor,
         width: '100%',
        height: '100%',
    },
    backgroundActiveContainer: {
        color: "white",
        backgroundColor: activeColor,
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boolSwitch: {
        transform: [{scale: 2.75}],
    },
    mainPage: {
        backgroundColor: boolColor,
        width: '100%',
        height: '100%',
    },
    container: {

        color: "white",
        backgroundColor: boolColor,
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    sectionContainer: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;