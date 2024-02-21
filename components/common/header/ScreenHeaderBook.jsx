import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./sreenheader.style";
import { COLORS, SIZES } from "../../../constants";

const ScreenHeaderBook = () => {
  const [onPress, setonPress] = useState("selected");
  return (
    <View style={styles.bookHeader}>
      <TouchableOpacity>
        <View style={{ marginTop: 28, marginBottom: 25 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.large,
              color: COLORS.white,
            }}
          >
            Book Tracker
          </Text>
          <Text style={{ textAlign: "center", color: COLORS.white }}>
            Notion
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={() => setonPress("selected")}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: onPress === "selected" ? COLORS.white : "black",
            }}
          >
            Selected
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setonPress("progress")}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: onPress === "progress" ? COLORS.white : "black",
            }}
          >
            In Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setonPress("finish")}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: onPress === "finish" ? COLORS.white : "black",
            }}
          >
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenHeaderBook;
