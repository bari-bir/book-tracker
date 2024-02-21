import { StyleSheet } from "react-native";

import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    paddingLeft: 0
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  bookHeader: {
    backgroundColor: '#1E60E0',
    color: '#FFFFFF',
    height: 130,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
});

export default styles;