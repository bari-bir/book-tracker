import { View, Text, Image } from "react-native";

import styles from "./pagecards.style";
import { COLORS, FONT, icons } from "../../../constants";

import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { getDayText, getMonthText } from "../../../utils/assets.utls";

const PageCards = () => {
  const router = useRouter();

  return (
    <View
      style={{
        marginTop: 27,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 2 }}>
        <TouchableOpacity>
          <View style={styles.bigHeight(COLORS.lightGreen)}>
            <View style={styles.content}>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontFamily: FONT.bold,
                  marginTop: 13,
                }}
              >
                Statistics
              </Text>

              <Text
                style={{
                  color: COLORS.lightWhite,
                  marginTop: 22,
                  fontSize: 16,
                  paddingBottom: 0,
                }}
              >
                80                  
            </Text>

              <Text style={{ color: COLORS.lightWhite }}>Avarage</Text>
            </View>

            <View style={styles.imagePosition(130, 0)}>
              <Image source={icons.statics} resizeMode="cover" />
            </View>

            <View style={styles.imagePosition(85, -15, 0.7)}>
              <Image source={icons.statics} resizeMode="cover" />
            </View>

            <View style={styles.imagePosition(40, -30, 0.4)}>
              <Image source={icons.statics} resizeMode="cover" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/book")}>
          <View style={styles.smallHeight(COLORS.lightRed, 20)}>
            <View style={styles.contentSmall}>
              <Text style={{ color: COLORS.lightWhite }}>Finished</Text>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontSize: 16,
                  paddingBottom: 0,
                }}
              >
                60
              </Text>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontFamily: FONT.bold,
                  marginTop: 2,
                }}
              >
                Book
              </Text>
            </View>

            <View style={styles.imageSmallPosition(55, 25)}>
              <Image source={icons.rec} resizeMode="cover" />
            </View>

            <View style={styles.imageSmallPosition(35, 10, 0.7)}>
              <Image source={icons.rec} resizeMode="cover" />
            </View>

            <View style={styles.imageSmallPosition(15, -20, 0.4, 0)}>
              <Image source={icons.rec} resizeMode="cover" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => router.push("/calendar/1")}>
          <View style={styles.smallHeight(COLORS.lightBlue, 0, 20)}>
            <View style={styles.contentSmall}>
              <Text style={{ color: COLORS.lightWhite }}>
                {getDayText(new Date().getDay())}
              </Text>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontSize: 16,
                  paddingBottom: 0,
                }}
              >
                {new Date().getDate()} {getMonthText(new Date().getMonth())}
              </Text>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontFamily: FONT.bold,
                  marginTop: 2,
                }}
              >
                Calendar
              </Text>
            </View>

            <View style={styles.imageSmallPosition(-20, -20)}>
              <Image source={icons.circle1} resizeMode="cover" />
            </View>

            <View style={styles.imageSmallPosition(4, 5, 0.9)}>
              <Image source={icons.circle2} resizeMode="cover" />
            </View>

            <View style={styles.imageSmallPosition(25, 27, 1, 0)}>
              <Image source={icons.circle3} resizeMode="cover" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/notes")}>
          <View style={styles.bigHeight(COLORS.lightOrange)}>
            <View style={styles.content}>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontFamily: FONT.bold,
                  marginTop: 13,
                }}
              >
                Notes
              </Text>

              <Text
                style={{
                  color: COLORS.lightWhite,
                  marginTop: 22,
                  fontSize: 16,
                  paddingBottom: 0,
                }}
              >
                500
              </Text>

              <Text style={{ color: COLORS.lightWhite }}>Tags</Text>
            </View>

            <View style={styles.imagePosition(85, 67)}>
              <Image source={icons.notes} resizeMode="cover" />
            </View>

            <View style={styles.imagePosition(55, 18, 0.7)}>
              <Image source={icons.notes} resizeMode="cover" />
            </View>

            <View style={styles.imagePosition(10, -30, 0.4)}>
              <Image source={icons.notes} resizeMode="cover" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageCards;
