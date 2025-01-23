
import FontSize from '@/constants/FontSize';
import Layout from '@/constants/Layout';
import Spacing from '@/constants/Spacing';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const containerStyles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: Spacing.spacingXlarge,
    },
    main: {
        flex: 1,
        backgroundColor: Colors.light,
        height: Layout.height,
        width: Layout.width,
    },
    ProgressBar: {
        marginVertical: Spacing.xPadding,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray,
        height: Spacing.xPadding
    },
    AppBar: {
        marginBottom: Spacing.spacingShort,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: Colors.light,
        height: Spacing.xPadding * 2,
        paddingHorizontal: wp(5),
    },
    sessionTitle: {
        marginBottom: Spacing.padding
    },
    commission: {
        height: 'auto',
        backgroundColor: Colors.primary,
        borderRadius: Spacing.radius * 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(5)
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'

    },
    icon: {
        fontSize: FontSize.big,
        color: Colors.darkText,
        // marginHorizontal : 10
    },
    solde: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 18,
        width: '100%',

    },
    retrait: {
        padding: 10,
        height: 45,
        backgroundColor: '#FFE9C8',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: Spacing.radius * 2
    },
    scrollViewContent: {
        // paddingTop: Spacing.padding,
        flexGrow: 1,
        marginBottom: Spacing.spacingMedium,
        backgroundColor: Colors.background,
        // paddingHorizontal: wp(5),
        
    },
    scrollViewContentNotification: {
        paddingTop: Spacing.padding,
        flexGrow: 1,
        marginBottom: Spacing.spacingMedium,
        backgroundColor: Colors.background,
        paddingHorizontal: wp(0),
    },
    scrollViewContentProfil: {
        paddingTop: Spacing.spacingShort,
        flexGrow: 1,
        marginBottom: Spacing.spacingMedium,
        backgroundColor: Colors.background,
        paddingHorizontal: wp(5),
    },
    containerProfilOption: {
        height: 'auto',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Spacing.xPadding,
    },
    profilCard: {
        width : '100%',
        backgroundColor: Colors.background,
        paddingTop: Spacing.padding
    },
    Title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Form: {
        alignItems: 'flex-start',
        width: '100%',
    },
    Button: {
        justifyContent: 'flex-end',
        width: '100%',
        paddingHorizontal: wp(5),
    },
    NavBar: {
        justifyContent: 'flex-end',
        width: '100%',
        paddingHorizontal: wp(5),
    },
    horizontalScrollView: {
        height: 122, 
    },
})

export default containerStyles;