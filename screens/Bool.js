/* eslint-disable prettier/prettier */
import type { Node } from 'react';
import { Switch, Button } from 'react-native';
import { Dimensions } from 'react-native'
import AppButton from '../components/AppButton';
import Cup from '../components/Cup';
import React, { useState } from 'react';
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

var activeColor ="#3f1551";
var boolColor = 'darkgrey';
var runOnce = 0;
let rotateValueHolder = new Animated.Value(0);
class Bool extends React.Component {
    constructor(props){
        super(props);
    this.state = {
      isShown: 0,
    };
}
render(){
    const { navigate } = this.props.navigation;
    const question = "Ready to Bool?"
    const boolLabel = "BOOL!";
    // const [isShown, setIsShown] = useState(false);
    const toggleBool = () => {
    rotateValueHolder.setValue(this.state.isShown);
    this.setState({isShown: !this.state.isShown});
        Animated.timing(rotateValueHolder, {
        toValue: !this.state.isShown,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
        }).start();

    };

    return (
        this.state.isShown  ?
        <SafeAreaView style = { this.state.isShown ? styles.backgroundActive : styles.mainPage  } >
    <View style = { this.state.isShown ? styles.backgroundActiveContainer : styles.container  } >
        {this.state.isShown ? <Text style={this.state.isShown ? styles.labelActive : styles.labelInactive}>{boolLabel}</Text> : <Text style={styles.blandLetters}>{question}</Text>}

    </View>
            <View style = { this.state.isShown ? styles.backgroundActiveContainer : styles.container  } >
            <Switch style= {styles.boolSwitch} trackColor = {
                { false: "#767577", true: "#fc7b03" }
            }
            thumbColor = { this.state.isShown ? "#e8ac74" : "#ddd" }
            ios_backgroundColor = "#3e3e3e"
            onValueChange={toggleBool}
            value = { this.state.isShown }/>


            </View>
            <View style={ this.state.isShown ? styles.backgroundActiveContainerCup : styles.cupContainer  }>
                <Cup styleCup={styles.rotate}></Cup>
                {/* {this.state.isShown ? <Cup startPos={1} styleCup={styles.rotate} /> : <Cup startPos={0} styleCup={styles.rotate} />  } */}
                <View style={styles.spaceAround}>
                    <AppButton onPress={()=> this.props.navigation.navigate("Map")} buttonBackground={styles.buttonBackground} buttonText={styles.buttonActive} title="View Map" backgroundColor="#e8ac74" />

                </View>
            </View>
            </SafeAreaView>
            :
    <SafeAreaView style = { this.state.isShown ? styles.backgroundActive : styles.mainPage  } >
    <View style = { this.state.isShown ? styles.backgroundActiveContainer : styles.container  } >
        {this.state.isShown ? <Text style={this.state.isShown ? styles.labelActive : styles.labelInactive}>{boolLabel}</Text> : <Text style={styles.blandLetters}>{question}</Text>}

    </View>
            <View style = { this.state.isShown ? styles.backgroundActiveContainer : styles.container  } >
            <Switch style= {styles.boolSwitch} trackColor = {
                { false: "#767577", true: "#fc7b03" }
            }
            thumbColor = { this.state.isShown ? "#e8ac74" : "#ddd" }
            ios_backgroundColor = "#3e3e3e"
            onValueChange={toggleBool}
            value = { this.state.isShown }/>


            </View>
            <View style={ this.state.isShown ? styles.backgroundActiveContainerCup : styles.cupContainer  }>
                <Cup styleCup={styles.rotate}></Cup>
                <View style={styles.spaceAround}>

                </View>
            </View>
            </SafeAreaView>

        )
    }
}
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

export default Bool;