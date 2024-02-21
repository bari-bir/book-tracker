import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { COLORS, icons } from "../constants";
import { Stack } from "expo-router";
import { ScreenHeaderBtn } from "../components";

const NotesPage = () => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Notes",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.arrowLeft} dimension="60%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.notes}>
          <TextInput
            style={styles.textArea}
            placeholder="Type your text here"
            multiline={true}
            onChangeText={(value) => setText(value)}
            value={text}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notes: {
    marginTop: 32,
    paddingHorizontal: 10,
    height: "100vh",
    minHeight: "100%",
  },
  textArea: {
    fontSize: 16,
    textAlignVertical: "top",
    height: "100%",
    minHeight: "100%",
    flex: 1,
  },
});
export default NotesPage;
