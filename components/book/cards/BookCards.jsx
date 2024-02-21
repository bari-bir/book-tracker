import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./bookcards.style";
import { SIZES, icons } from "../../../constants";

const BookCards = () => {
  return (
    <View
      style={{ marginTop: 26, flexDirection: "column", alignItems: "center" }}
    >
      <View style={styles.bookcard}>
        <Text style={{ fontSize: SIZES.xxSmall }}>
          Как устроиться на работу своей мечты
        </Text>
        <Text style={{ fontSize: SIZES.xSmall, marginTop: 6 }}>
          Владимир Якуба
        </Text>

        <TouchableOpacity>
          <View style={styles.bookImage}>
            <Image source={icons.book} resizeMode="cover" />

            <Image source={icons.book} resizeMode="cover" />

            <Image source={icons.book} resizeMode="cover" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bookcard}>
        <Text style={{ fontSize: SIZES.xxSmall }}>
          Как устроиться на работу своей мечты
        </Text>
        <Text style={{ fontSize: SIZES.xSmall, marginTop: 6 }}>
          Владимир Якуба
        </Text>

        <TouchableOpacity>
          <View style={styles.bookImage}>
            <Image source={icons.book} resizeMode="cover" />

            <Image source={icons.book} resizeMode="cover" />

            <Image source={icons.book} resizeMode="cover" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bookcard}>
        <Text style={{ fontSize: SIZES.xxSmall }}>
          Как устроиться на работу своей мечты
        </Text>
        <Text style={{ fontSize: SIZES.xSmall, marginTop: 6 }}>
          Владимир Якуба
        </Text>

        <TouchableOpacity>
          <View style={styles.bookImage}>
            <Image source={icons.book} resizeMode="cover" />

            <Image source={icons.book} resizeMode="cover" />

            <Image source={icons.book} resizeMode="cover" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookCards;
