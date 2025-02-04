import containerStyles from '@/assets/styles/ContainerStyle';
import { Typo } from '@/assets/styles/TypographyStyle';
import CardRecentOrder from '@/components/cardRecentOrder';
import CardShop from '@/components/cardShop';
import Colors from '@/constants/Colors';
import image from '@/constants/image';
import Spacing from '@/constants/Spacing';
import { CardShopProps, RecentOderProps } from '@/service/model/model';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Animated,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Easing,
} from 'react-native';
import { Iconify } from 'react-native-iconify';

const DELAY = 200;

const data: CardShopProps[] = [
  {
    image: image.Staff_toy,
    title: 'Supervisor toy',
    star: true,
    favorite: true,
    price: 100,
  },
  {
    image: image.Black_master,
    title: 'Front man toy',
    star: false,
    favorite: true,
    price: 200,
  },
];

const recentdOrder: RecentOderProps[] = [
  {
    image: image.Staff,
    title: 'Collector outfit',
    number: 3,
  },
  {
    image: image.doll,
    title: 'Doll',
    number: 1,
  },
];

type AnimatedCardShopProps = {
 children?: React.ReactNode;
  index: number; 
  onPress?: () => void;
};

const AnimatedCardShop: React.FC<AnimatedCardShopProps> = ({
  children,
  index,
  onPress,
}) => {
  // Position horizontale initiale de la carte (on part de la gauche, -200)
  const translateX = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    // Animation d’entrée
    Animated.timing(translateX, {
      toValue: 0,
      duration: 500,
      delay: index * DELAY, 
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [index, translateX]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX }],
        // Pour donner un peu de marge à la carte
        marginRight: 15,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default function HomeScreen() {
  const handleDetails = (item: CardShopProps) => {
    router.navigate({
      pathname: '/(screen)',
      params: { details: JSON.stringify(item) },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={containerStyles.scrollViewContent}>
        <View style={styles.container}>

          <View style={styles.header}>
            <Image source={image.Logo_dark} style={{ height: 31, width: 84 }} />

            <View style={styles.search}>
              <TextInput
                style={styles.input}
                placeholder="Seach"
                cursorColor={Colors.blackText}
              />
              <Iconify
                icon="fluent:search-24-filled"
                size={24}
                color={Colors.gray}
              />
            </View>

            <TouchableOpacity onPress={() => router.navigate("/(onboarding)")}>
              <Iconify
                icon="material-symbols:menu-rounded"
                size={34}
                color={Colors.gray}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.sessionTitle}>
            <Text style={Typo.sessionTitle}>Recommended for you</Text>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: Spacing.padding / 2 }}
            >
              {data.map((item, index) => (
                <AnimatedCardShop
                  key={index}
                  index={index}
                  onPress={() => handleDetails(item)}
                >
                  <CardShop {...item} onPress={() => handleDetails(item)} />
                </AnimatedCardShop>
              ))}
            </ScrollView>
          </View>

          <View style={styles.sessionTitle}>
            <Text style={Typo.sessionTitle}>Recent orders</Text>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {recentdOrder.map((item, index) => (
               <AnimatedCardShop
                  key={index}
                  index={index}
                >
                   <CardRecentOrder key={index} {...item} />
                </AnimatedCardShop>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.padding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.padding,
    width: '100%',
  },
  scrollContainer: {
    marginBottom: Spacing.spacingMedium,
  },
  sessionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: Spacing.spacingMedium,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    height: 50,
    padding: Spacing.padding,
    borderRadius: 50,
    width: '60%',
  },
  input: {
    backgroundColor: Colors.lightGray,
    color: Colors.blackText,
    fontSize: 16,
    fontWeight: 'bold',
    width: '85%',
    marginLeft: Spacing.spacing,
  },
});
