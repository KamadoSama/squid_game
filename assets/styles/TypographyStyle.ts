
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
export const Typo = StyleSheet.create( {

    date: {
        fontSize: 10,
        color: Colors.darkText,
        fontWeight: "300"
    },
    error: {
        // fontFamily: 'regular',
        fontSize: FontSize.small,
        color: Colors.error,
        textAlign: "left",
        marginTop: Spacing.spacing,

        // marginVertical: Spacing.spacing,
    },
    statut: {
        fontSize: 10,
        color: Colors.white,
        fontWeight: "500",
    },
    description: {
        fontSize: FontSize.small,
        color: Colors.darkText,
        fontWeight: "500",
    },
    message: {
        fontSize: FontSize.medium,
        color: Colors.darkText,
        fontWeight: 'regular',
        textAlign: 'justify'
    },
    statTitle: {
        fontSize: FontSize.small,
        color: Colors.blackText,
        fontWeight: "400",
    },
    statLevel: {
        fontSize: FontSize.medium,
        color: Colors.darkText,
        fontWeight: "500",
    },
    profilOption: {
        fontSize: FontSize.large,
        color: Colors.darkText,
        fontWeight: "500",
        paddingLeft: wp(5)
    },
    attenteMessage: {
        fontSize: FontSize.medium,
        color: Colors.darkText,
        fontWeight: "400",
        marginTop: Spacing.spacing,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify'
    },
    sessionTitle: {
        fontSize: FontSize.xLarge,
        color: Colors.blackText,
        fontWeight: "900",
    },
    bodySmall: {
        fontSize: FontSize.small,
        color: Colors.darkText,
        fontWeight: "800"
    },
    bodyMedium: {
        fontSize: FontSize.medium,
        color: Colors.blackText,
        fontWeight: "500"

    },
    bodyLarge: {
        fontSize: FontSize.large,
        color: Colors.darkText,
    },
    labelSmall: {
        fontSize: FontSize.small,
        color: Colors.darkText,
        fontWeight: "600",
    },
    labelMedium: {
        fontSize: FontSize.medium,
        color: Colors.darkText,
        fontWeight: 400,
    },
    labelLarge: {
        fontSize: FontSize.large,
        color: Colors.primary,
        fontWeight: "600",
    },
    titleSmall: {
        fontSize: FontSize.large,
        color: Colors.darkText,
    },
    titleMedium: {
        fontSize: FontSize.xLarge,
        color: Colors.primary,
        fontWeight: "600",
    },
    titleLarge: {
        fontSize: FontSize.xxLarge,
        color: Colors.blackText,
        fontWeight: 'bold',
    },
    headlineSmall: {
        fontSize: FontSize.xxxLarge,
        color: Colors.primary,
        fontWeight: 900,
    },
    headlineMedium: {
        fontSize: FontSize.big,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    headlineLarge: {
        fontSize: FontSize.xBig,
        color: Colors.primary,
        fontWeight: "800",
    },
});