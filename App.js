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
import AppButton from './components/AppButton';
import Cup from './components/Cup';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Animated,
    View,
    Easing,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { style } from '@mui/system';

let rotateValueHolder = new Animated.Value(0);

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

var activeColor ="#3f1551";
var boolColor = 'darkgrey';
var runOnce = 0;
const App: () => Node = () => {

const question = "Ready to Bool?"
const boolLabel = "BOOL!";
const [isShown, setIsShown] = useState(false);
const toggleBool = () => {
rotateValueHolder.setValue(isShown);
 setIsShown((previousState) => !previousState);
    Animated.timing(rotateValueHolder, {
      toValue: !isShown,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

};

return (
    <SafeAreaView style = { isShown ? styles.backgroundActive : styles.mainPage  } >
 <View style = { isShown ? styles.backgroundActiveContainer : styles.container  } >
    {isShown ? <Text style={isShown ? styles.labelActive : styles.labelInactive}>{boolLabel}</Text> : <Text style={styles.blandLetters}>{question}</Text>}

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
        <View style={ isShown ? styles.backgroundActiveContainerCup : styles.cupContainer  }>
            {isShown ? <Cup startPos={1} styleCup={styles.rotate} /> : <Cup startPos={0} styleCup={styles.rotate} />  }
            <View style={styles.spaceAround}>
            { isShown ?  <AppButton buttonBackground={styles.buttonBackground} buttonText={styles.buttonActive} title="View Map" size="lg" backgroundColor="#e8ac74" />: null  }
            </View>
        </View>
        </SafeAreaView>
    );

};
const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

const RotateReverse = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
})
const styles = StyleSheet.create({
    rotate: {
        justifyContent: 'center',
        width: 100,
        height: 100,
        transform: [{rotate: RotateReverse}],
    },
    basicCup: {
        transform: [{rotate: RotateData}],
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    blandLetters:{
        fontFamily: 'Courier',
        position: 'absolute',

        marginTop: '10%',
        textAlign: 'center',
        color: "black",
        fontSize: 70,
    },
    spaceAround: {
        margin: 20,
    },
    buttonBackground: {
        elevation: 8,
        backgroundColor: "#fc7b03",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    buttonActive: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
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
    backgroundActiveContainerCup: {
        color: "white",
        backgroundColor: activeColor,
        marginTop: '25%',
        alignItems: 'center',
        justifyContent: 'center',

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
    cupContainer: {
        backgroundColor: boolColor,
        marginTop: '25%',
        alignItems: 'center',
        justifyContent: 'center',
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