import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import image from '@/constants/image'
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

const index = () => {
    const handlePress = () => {
        router.replace("/(tabs)")
    }

    return (
        <ImageBackground
            source={image.background}
            style={styles.container}
        >
            <Image source={image.Logo}
                style={{
                    width: 78,
                    height: 29,
                    marginTop: 35
                }}
            />
            <BlurView intensity={100} style={styles.blurContainer}>
                <Image
                    source={image.everything}
                    style={{
                        width: 118,
                        height: 21,
                        position: "absolute",
                        top: 23,
                        left: 58,
                    }}
                />
                <Image source={image.squid_game_text}
                    style={{
                        width: "100%",
                        height: 154,
                    }}
                />

                <Text style={styles.description}>
                    Shop your favourite toys and outfits of the Squid Game on the go!
                </Text>

                <TouchableOpacity
                    style={
                        styles.button
                    }
                    onPress={handlePress}
                >
                    <Text style={styles.buttonText}>
                        Shop Now
                    </Text>
                </TouchableOpacity>

            </BlurView>
        </ImageBackground>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
    },
    blurContainer: {
        padding: 20,
        margin: 16,
        justifyContent: "space-between",
        overflow: "hidden",
        width: "100%",
        height: 309,
        borderRadius: 20,

    },
    description: {
        color: "white",
        fontWeight: "regular",
        fontSize: 14,
        textAlign: "center",

    },
    button: {
        backgroundColor: "#E84381",
        padding: 16,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 16,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    }
})