import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  timelineContainer: {
    paddingHorizontal: 10,
    overflow: "hidden",
    marginTop: 32
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    minHeight: 30,
  },
  circleContainer: {
    alignItems: "center",
    position: "relative",
    zIndex: 1000,
  },
  line: {
    height: "100%",
    width: 1,
    backgroundColor: "#000",
    position: "absolute",
    left: 10,
    top: -15,
    marginLeft: 14,
    zIndex: -1,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#005479",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginRight: 11
  },
  circleText: {
    color: "white",
  },
  timelineContent: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
    color: "#555",
  },
});
