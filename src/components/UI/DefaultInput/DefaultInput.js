import React from 'react';
import {TextInput , StyleSheet} from 'react-native';
const defaultInput = props=>(
    <TextInput
        underlineColorAndroid = "transparent"
        {...props}
        style={[styles.inputs , props.style ,!props.valid && props.touched ?  styles.invalid : null ]}
    />

);

const styles = StyleSheet.create({

    inputs:{
       width:"100%",
        height : 40,
        borderWidth:1,
        borderColor:"#eee",
        padding : 5,
        marginTop:8,
        marginBottom:8,
        backgroundColor: 'transparent'

    },
    invalid:{
        backgroundColor:"#f9c0c0",
        borderColor:"red",
    },
});

export default defaultInput;