import { router, Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';



export default function RootLayout() {

  // useEffect(() => {
  //   router.replace("/(tabs)")
  // }, [])

  return (
    <Stack initialRouteName='(tabs)'>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
    </Stack>
  );
}
