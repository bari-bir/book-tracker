import { TouchableOpacity, Image } from "react-native";

import styles from "./sreenheader.style";
import { useRouter } from "expo-router";

const ScreenHeaderBtn = ({ iconUrl }) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => router.back()}>
      <Image source={iconUrl} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
