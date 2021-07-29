import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.toDoItems}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toDoItems: {
        padding: 14,
        marginTop: 14,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 5,
    }
});

