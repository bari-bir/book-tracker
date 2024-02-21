import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  bigHeight: (color) => ({
    width: "100%",
    maxWidth: 155,
    height: 322,
    backgroundColor: color,
    borderRadius: 20,
    color: "white",
    fontSize: 13.13,
    overflow: "hidden",
    position: "relative",
  }),

  smallHeight: (color, top, bottom) => ({
    width: "100%",
    maxWidth: 155,
    height: 202,
    backgroundColor: color,
    borderRadius: 20,
    color: "white",
    fontSize: 13.13,
    overflow: "hidden",
    position: "relative",
    marginTop: top,
    marginBottom: bottom
  }),

  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),

  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: COLORS.lightWhite,
  },

  contentSmall: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: COLORS.lightWhite,
    position: "absolute",
    bottom: 10,
    left: 10,
  },

  imagePosition: (bottom, left, opacity, right) => ({
    position: "absolute",
    bottom: bottom,
    left: left,
    opacity: opacity,
    right: right,
  }),

  imageSmallPosition: (top, right, opacity) => ({
    position: "absolute",
    top: top,
    opacity: opacity,
    right: right,
  }),
});

export default styles;
