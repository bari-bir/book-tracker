import { Image, Text, View, TouchableOpacity } from "react-native";
import { icons } from "../../../constants";
import { styles } from "./newlist.style";

const NewList = () => {
  return (
    <TouchableOpacity
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <View style={styles.btn}>
        <View>
          <Image source={icons.add} resizeMethod="cover" />
        </View>

        <View>
          <Text>New List</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewList;
