import { SafeAreaView, ScrollView, Text } from "react-native";
import { COLORS } from "../constants";
import { Stack } from "expo-router";
import ScreenHeaderBook from "../components/common/header/ScreenHeaderBook";
import BookCards from "../components/book/cards/BookCards";

const Book = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightpink }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenHeaderBook />

        <BookCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Book;
