import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface CircleButtonProps {
    label: string;
    textColor: string;
    backgroundColor: string;
    onPress: () => void;
}

const CircleButton:React.FC<CircleButtonProps> =({ label, backgroundColor, onPress, textColor }) =>{
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.label,{color:textColor}]}>{label}</Text>
        </TouchableOpacity>
    );
}

export default CircleButton;

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 5,
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
       
    },
});
