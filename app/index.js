import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { icons, FONT, SIZES, COLORS } from "../constants";

import { ScreenHeaderBtn } from "../components";
import PageCards from "../components/common/cards/PageCards";

const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },

          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.arrowLeft} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: SIZES.medium,
            width: 'auto'
          }}
        >
          <Text style={{ fontSize: SIZES.xLarge, fontFamily: FONT.medium, marginTop: 10, textAlign: 'center' }}>
            Book Tracker Planner
          </Text>

          <PageCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
