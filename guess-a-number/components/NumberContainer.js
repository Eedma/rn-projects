import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Color from '../constants/Color';
import BodyText from './BodyText'

const NumberContainer = props =>(
    <View style={styles.container}>
        <BodyText style={styles.number}>{props.children}</BodyText>
    </View>
)

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Color.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Color.primary,
        fontSize: 22,
        
    }
})