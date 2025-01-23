// components/CustomTabBar.js
import React, { useReducer } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    LayoutChangeEvent,
} from "react-native";
import Svg, {
    Path, G,
    Ellipse,
    Defs,
    Filter,
    FeFlood,
    FeBlend,
    FeGaussianBlur,
    Stop,
    FeComposite,
} from "react-native-svg";
import Animated, {
    useAnimatedStyle,
    withTiming,
    useDerivedValue,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get("window");
const TAB_HEIGHT = 84;

// On crée le composant animé à partir de Svg
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

// On utilise un reducer qui stocke la position de chaque onglet dans un OBJET
function positionReducer(state, action) {
    // action: { index: number, x: number }
    return {
        ...state,
        [action.index]: action.x,
    };
}

export default function CustomTabBar({ state, descriptors, navigation }) {
    // Au lieu d’un tableau, on stocke dans un objet { [index]: x }
    // ex: { 0: 45, 1: 145, 2: 245, ... }
    const [positions, dispatch] = useReducer(positionReducer, {});

    // L’index actif
    const activeIndex = state.index;

    // On récupère la position X via onLayout
    const handleLayout = (event, index) => {
        const { x } = event.nativeEvent.layout;
        dispatch({ index, x });
    };

    // Calcul de l’offset : dès que la position de l’actif est dispo, on l’anime
    const xOffset = useDerivedValue(() => {
        // positions n’a pas forcément toutes les clés
        if (positions[activeIndex] == null) {
            return 0;
        }
        // Ajuste ici si tu veux centrer le “SVG d’arrière-plan”
        // Par exemple, - 20 pour centrer un peu sur l’icône
        return withTiming(positions[activeIndex], { duration: 300 });
    }, [activeIndex, positions]);

    // Style animé
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: xOffset.value - 1 }],
        };
    });

    const animatedStylesInverse = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: xOffset.value + 2.5 }],
        };
    });


    return (
        <View style={styles.container}>
            {/* Le SVG animé qui se déplace sous l'onglet actif */}
            {/* <AnimatedSvg
                width={110}
                height={60}
                viewBox="0 0 110 60"
                style={[styles.activeBackground, animatedStyles]}
            >
                <Path
                    fill={Colors.BackgroundPrimary}
                    transform="scale(1, 0.5)"
                    d="M1 1.01107C7.06686 1.29795 11 -8.10623e-06 15 3.99999C27.1962 19.6758 34.2805 26.9247 48.2717 26.9998C62.2629 27.0749 78.4451 5.34253 78.4451 5.34253C82 1.01108 85.1639 0.890758 88 1.01107"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth={3}
                />
            </AnimatedSvg> */}

            <AnimatedSvg
                width={138}
                height={98}
                viewBox="0 0 138 98"
                fill="none"
                style={[styles.activeBackgroundEffet, animatedStyles]}
            >
                <Path
                    fill="#E84381"
                    fillRule="evenodd"
                    d="M13.125 0a7.496 7.496 0 0 1 6.464 3.693l.099.057 6.562 9.375h-8.164A7.472 7.472 0 0 1 13.125 15a7.472 7.472 0 0 1-4.96-1.875H0L6.563 3.75l.098-.057A7.496 7.496 0 0 1 13.125 0Z"
                    clipRule="evenodd"
                />
            </AnimatedSvg>


            {/* Les icônes de la tab bar */}
            <View style={styles.tabItemsContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel ?? options.title ?? route.name;
                    const isFocused = activeIndex === index;

                    // Récupère l’icône défini dans _layout.js
                    const icon = options.tabBarIcon
                        ? options.tabBarIcon({
                            color: isFocused ? Colors.white : Colors.gray,
                            size: 26,
                        })
                        : null;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    return (
                        
                            // <LinearGradient
                            //     // Button Linear Gradient
                            //     colors={['#E84381', '#E84381']}
                            //     style={styles.tabButton}
                            // >
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={onPress}
                                    style={[styles.tabButton, isFocused && { backgroundColor: Colors.primary, ...styles.shadown }]}
                                    onLayout={(e) => handleLayout(e, index)}
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={label}
                                >
                                    {icon}
                                </TouchableOpacity>
                            // </LinearGradient>
                        
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        // bottom: 0,
        width: width,
        height: TAB_HEIGHT,
        // zIndex: 5,
        // backgroundColor: "red",
  
    },
    tabItemsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around", // espace égal entre onglets
        height: TAB_HEIGHT,
        zIndex: 4,
    },
    tabButton: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        width: 48,
        borderRadius: 24,
        padding: 10,

    },
    shadown: {
        shadowColor: "rgba(232, 67, 129,0.7)",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2.22,
        // elevation: 1,
    },
    inativeTabButton: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        height: TAB_HEIGHT,
    },
    activeBackground: {
        position: "absolute",
        top: 0,
        zIndex: 2,

    },
    activeBackgroundEffet: {
        position: "absolute",
        zIndex: 3,
        top: 73,
        left: 11,
        // bottom: 0,
    },
});
