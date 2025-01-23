import Colors from '@/constants/Colors';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';
import Layout from '@/constants/Layout';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const inputContainer = {
    // padding: 10,
    padding: hp(1.5),
    marginVertical: Spacing.spacingMedium,
    borderRadius: Spacing.radius,
    borderWidth: 1,
    // borderColor: Colors.error,
    backgroundColor: Colors.white,
    width: '100%',
};

export const inputText = {
    fontSize: FontSize.bodyLarge,
    color: Colors.blackText,
    
};

export const primaryInput = {
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
};

export const focusedInput = {
    borderColor: Colors.primary,
 
};


