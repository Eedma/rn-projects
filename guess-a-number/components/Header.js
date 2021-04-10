import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import BodyText from './BodyText'

const Header = props =>{
    return(
        <View style={styles.header}>
            <BodyText style={styles.headerTitle}>{props.title}</BodyText>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 18,
        color: Color.yellow,
        fontFamily: 'open-sans-bold'
    }
})