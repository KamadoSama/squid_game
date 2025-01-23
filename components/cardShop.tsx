import { StyleSheet, Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { CardShopProps } from '@/service/model/model'
import { Image } from 'expo-image'
import Colors from '@/constants/Colors'


const CardShop: React.FC<CardShopProps & TouchableOpacityProps> = ({ image, title, star, favorite, ...other }) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} contentFit='contain' />

                <View>
                    <Text style={styles.title}>{title}</Text>

                    <TouchableOpacity
                        onPress={other.onPress}
                        style={
                            styles.button
                        }>
                        <Text style={styles.buttonText}>
                            View details
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CardShop

const styles = StyleSheet.create({
    card: {
        height: 410,
        width: 196,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: 16,
        marginHorizontal: 8,
    },
    container: {
        height: 359,
        width: "100%",
        justifyContent: "flex-end",
        padding: 16,
        borderRadius: 11,
        // alignItems: "center",
        position: "relative",
        backgroundColor: Colors.white,

    },
    button: {
        backgroundColor: "#E84381",
        padding: 16,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        marginTop: 16,

    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    image: {
        height: 288,
        width: "100%",
        top: -43,
        position: "absolute",
        alignSelf: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.blackText,
    },
})