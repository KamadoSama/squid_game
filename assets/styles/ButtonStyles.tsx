import Colors from '@/constants/Colors';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';

export const buttonContainer = {
    padding: Spacing.spacingMedium,
    borderRadius: Spacing.radius,
    marginVertical: Spacing.spacing,
    alignItems: 'center',
};

export const buttonText = {
    fontSize: FontSize.labelLarge,
    fontWeight: '600',
    color : Colors.white,
};

export const primaryButton = {
    backgroundColor: Colors.primary,
    marginTop: Spacing.spacingXlarge
};
export const refusButton = {
    backgroundColor: Colors.error,
    marginTop: Spacing.spacingXlarge
};

export const secondaryButton = {
    backgroundColor: Colors.gray,

};
export const secondaryButtonText = {
    color : Colors.blackText,

};

export const inactiveButton = {
    backgroundColor: Colors.inactive,
};
export const inactiveButtonText = {
    color : Colors.white,
};