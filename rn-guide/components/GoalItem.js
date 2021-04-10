import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return(
      <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.listItem}>
          <BodyBodyText> {props.title}</BodyText>
        </View>
      </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        color: 'red'
      }
})