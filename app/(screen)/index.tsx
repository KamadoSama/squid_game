import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Image } from 'expo-image'
import { Iconify } from 'react-native-iconify'
import { router, useLocalSearchParams } from 'expo-router'
import { CardShopProps } from '@/service/model/model'
import CircleButton from '@/components/CircleButton'
import { AirbnbRating } from 'react-native-ratings';

const index = () => {
    const params = useLocalSearchParams();
    const details = JSON.parse(params.details) as CardShopProps;
    const [count, setCount] = React.useState(1);

    const scaleAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.spring (scaleAnim, {
            toValue: 1,
            friction: 5,
            tension: 100,
            delay: 300,
            useNativeDriver: true,
        }).start();
    }, [scaleAnim]);


    const handleDecrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.overlay}></View>
                <View style={styles.containerImageNav}>
                    <View style={styles.navigate}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Iconify icon='solar:arrow-left-linear' size={24} color={Colors.blackText} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Iconify icon='mdi-light:heart' size={24} color={Colors.blackText} />
                        </TouchableOpacity>
                    </View>

                    <Animated.View
                        style={[
                            styles.containImage,
                            {
                                transform: [
                                    {
                                        scale: scaleAnim,
                                    },
                                ],
                            },
                        ]}
                    >
                        <Image
                            source={details.image}
                            style={{ height: 398, width: 200 }}
                            contentFit="contain"
                        />
                    </Animated.View>
                </View>
            </View>

            <View style={styles.bottom}>
                <Text style={styles.title}>{details.title}</Text>
                <Text style={styles.price}>$ {details.price}</Text>
                <View style={styles.buttonContainer}>
                    <CircleButton
                        label="-"
                        backgroundColor="#FFD4DD"
                        onPress={handleDecrement}
                        textColor={Colors.primary}

                    />
                    <Text style={styles.countText}>{count}</Text>
                    <CircleButton
                        label="+"
                        backgroundColor="#F84B9D"
                        onPress={handleIncrement}
                        textColor={Colors.white}
                    />
                </View>

                <View
                    style={[
                        styles.buttonContainer,
                        {
                            alignItems: 'center',
                            width: 130,
                        }

                    ]}
                >

                    <AirbnbRating
                        defaultRating={5.5}
                        isDisabled
                        showRating={false}
                        size={17}
                        selectedColor={"#F59C4C"}
                        unSelectedColor={Colors.secondaryText}
                    />
                    <Text style={{ color: Colors.gray, fontSize: 18 }}>5</Text>
                </View>

                <View style={styles.containCartButton}>
                    <TouchableOpacity style={[styles.buttonCart]}>
                        <Text style={styles.textButton}>Add to cart</Text>
                        <Iconify icon='mdi-light:cart' size={24} color={Colors.blackText} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonCart, { backgroundColor: Colors.primary }]}>
                        <Text style={[styles.textButton, { color: Colors.white }]}>Buy now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

        // flexDirection: 'column',
    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 180
    },
    header: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // height: "50%",
        // width: "100%",
        flex: 0.6,
    },
    bottom: {
        justifyContent: 'space-evenly',
        flex: 0.4,
        paddingHorizontal: 20,
    },
    overlay: {
        backgroundColor: Colors.pinkRgba,
        borderBottomRightRadius: 35,
        height: "100%",
        flex: 0.5,
    },
    containerImageNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 0,
        paddingTop: 50,
        paddingHorizontal: 20,
        // backgroundColor:Colors.white,
    },
    navigate: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginBottom: 20
    },
    containImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.blackText
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.gray
    },
    textButton: {
        color: Colors.blackText,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    buttonCart: {
        backgroundColor: Colors.pinkRgba,
        padding: 16,
        borderRadius: 8,
        width: "49%",
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        marginTop: 16,
    },
    containCartButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})