import { Text, View } from "react-native";
import { styles } from "./timeline.style";

const TimeLine = (props) => {
  const { data } = props;

  const reversedData = [...data].reverse();

  return (
    <View style={styles.timelineContainer}>
      {reversedData.map((item, index) => (
        <View key={index} style={styles.timelineItem}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{item.id}</Text>
            </View>
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}

      {data.length !== 1 && <View style={styles.line} />}
    </View>
  );
};

export default TimeLine;
