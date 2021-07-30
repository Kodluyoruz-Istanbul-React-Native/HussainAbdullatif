import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';


export default function ToDoItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>

            <View style={styles.toDoItems}>
                <Ionicons 
                    name = 'ios-checkmark-done-circle'
                    size = {20}
                    color = '#333'
                />
                <Text style={styles.toDoItemsText}>{item.text}</Text>
            </View>

            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toDoItems: {
        padding: 14,
        marginTop: 14,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 5,
        flexDirection: 'row',
    },
    toDoItemsText: {
        paddingLeft: 14,
    }
});

