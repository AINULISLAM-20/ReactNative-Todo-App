import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const Task = ({text,onRemove}) => {
    return (
        <>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{text}</Text>
                </View>
                <TouchableOpacity onPress={()=> onRemove()}>
                <View style={styles.circular}></View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#9F55A4',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color:'white',
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
    },

});


export default Task
