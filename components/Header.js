import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>MY TASKS</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#1b6fcf',
      },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
});