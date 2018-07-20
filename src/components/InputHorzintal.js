import React from 'react';
import {TextInput, Text, View, Platform} from 'react-native';


//props !
const InputHorzintal = ({label, value, onChangeText, placeholder }) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}

            />
        </View>
    );

};

const styles = {
    inputStyle: {
        borderWidth: 1,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 0.5,
        height: Platform.OS == 'android' ? 40 : 20
    },
    labelStyle: {
        fontSize: 18,
        flex: 0.5,
    },
    containerStyle: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        paddingLeft: 5
    }
}

export {InputHorzintal};