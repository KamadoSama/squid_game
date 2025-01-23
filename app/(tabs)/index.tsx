import { Typo } from '@/assets/styles/TypographyStyle';
import CardShop from '@/components/cardShop';
import Colors from '@/constants/Colors';
import image from '@/constants/image';
import Spacing from '@/constants/Spacing';
import { CardShopProps } from '@/service/model/model';
import { Image } from 'expo-image';
import { StyleSheet, Platform, SafeAreaView, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Iconify } from 'react-native-iconify';

const data: CardShopProps[] = [
  {
    image: image.Staff_toy,
    title: 'Supervisor toy',
    star: true,
    favorite: true
  },

  {
    image: image.Black_master,
    title: 'Front man toy',
    star: false,
    favorite: true
  },

]


export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Image source={image.Logo_dark} style={{ height: 31, width: 84 }} />

          <View style={styles.search}>
            <TextInput
              style={styles.input}
              placeholder='Seach'
              cursorColor={Colors.blackText}
            />
            <Iconify icon='fluent:search-24-filled' size={24} color={Colors.gray} />
          </View>

          <TouchableOpacity>
            <Iconify icon='material-symbols:menu-rounded' size={34} color={Colors.gray} />
          </TouchableOpacity>
        </View>
        <View style={styles.sessionTitle}>
          <Text style={Typo.sessionTitle}>Recommended for you</Text>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {
              data.map((item, index) => (
                <CardShop key={index} image={item.image} title={item.title} star={item.star} favorite={item.favorite} />
              ))
            }
          </ScrollView>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    paddingHorizontal: Spacing.padding,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
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
    zIndex: 4,
    fontWeight: 'bold',
    width: '85%',
    marginLeft: Spacing.spacing,
  },
});
