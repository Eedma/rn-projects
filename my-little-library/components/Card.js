import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props =>(
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
)

export default Card;

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, // android material card shadow
        borderRadius: 10,
        backgroundColor: 'white',
        padding: '5%',
        marginVertical: 20,
    },
})