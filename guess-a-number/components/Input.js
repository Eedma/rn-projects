import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = props =>(
    <TextInput {...props} style={{...styles.input, ...props.style}} />
)

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        minWidth: 50,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})