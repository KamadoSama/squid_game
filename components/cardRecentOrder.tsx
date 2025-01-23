import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Image } from 'expo-image'
import Colors from '@/constants/Colors'
import { RecentOderProps } from '@/service/model/model'
import { Iconify } from 'react-native-iconify'


const CardRecentOrder: React.FC<RecentOderProps> = ({ image, title, number }) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />

                <View style={styles.containInfo}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.detail}>{number} items ordered</Text>
                    <TouchableOpacity
                        style={
                            styles.button
                        }>
                        <Text style={styles.buttonText}>
                            View details
                        </Text>
                        <Iconify icon='ep:right' size={12} color={Colors.gray} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default CardRecentOrder

const styles = StyleSheet.create({
    card: {
        height: 129,
        width: 196,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: 16,
        marginHorizontal: 8,
       
    },
    button: {
        borderRadius: 8,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",

        marginVertical: 10,

    },
    buttonText: {
        color: Colors.gray,
        fontWeight: "400",
        fontSize: 12,
        textAlign: "center",
        marginRight: 5
        
    },
    container: {
        height: 85,
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: "row",
        padding: 10,
        borderRadius: 11,
        // alignItems: "center",
        position: "relative",
        backgroundColor: Colors.white,

    },

    image: {
        height: 121,
        width: 57,
        top: -34,
        left: 0,
        position: "absolute",
        // alignSelf: "center",
    },
    title: {
        fontSize: 14,
        fontWeight: "800",
        color: Colors.blackText,
        textAlign: "left"
    },
    detail: {
        fontSize: 12,
        fontWeight: "800",
        color: Colors.blackText,
        textAlign: "left"
    },
    containInfo: {
        flex: 0.7
    }
})