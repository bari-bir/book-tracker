import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import { Stack, useLocalSearchParams } from "expo-router";

import { Calendar } from "react-native-calendars";
import { useEffect, useState } from "react";
import { EditCard, ScreenHeaderBtn } from "../../components";
import NewList from "../../components/calendar/list/NewList";

import TimeLine from "../../components/common/timeline/TimeLine";

const { width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    title: "Create a services site",
    description: "Description 1",
  },

  {
    id: 2,
    title: "Create a services site",
    description: "Description 2",
  },

  {
    id: 3,
    title: "Create a services site",
    description: "Description 3",
  },
];

const CalendarPage = () => {
  const [selected, setSelected] = useState("");
  const [foucs, setFoucs] = useState("1");

  const params = useLocalSearchParams();

  const getMarked = () => {
    let marked = {};
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const startYear = 1900;

    for (let year = startYear; year <= currentYear; year++) {
      const maxMonth = year === currentYear ? currentMonth : 12;

      for (let month = 1; month <= maxMonth; month++) {
        const daysInMonth =
          year === currentYear && month === currentMonth
            ? currentDay
            : new Date(year, month, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
          const dateString = `${year}-${month.toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`;
          marked[dateString] = {
            marked: true,
            textColor: "#aaa",
            disabled: true,
            dotColor: "#AADF87",
            ...(day === currentDay &&
              month === currentMonth && {
                selected: true,
                disabled: false,
                selectedColor: "#AADF87",
                dotColor: "white",
              }),
          };
        }
      }
    }

    return marked;
  };

  const indicatorPosition = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(indicatorPosition, {
      toValue: foucs === "1" ? 0 : width / 2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [foucs]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Calendar",
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.arrowLeft} dimension="60%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {params.id === "1" ? (
          <View>
            <View>
              <Calendar
                onDayPress={(day) => {
                  setSelected(day.dateString);
                }}
                disableAllTouchEventsForDisabledDays={true}
                minDate={new Date()}
                maxDate="2323-12-31"
                markedDates={getMarked()}
              />
            </View>

            <View>
              <View
                style={{
                  marginTop: 32,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity onPress={() => setFoucs("1")}>
                  <View>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontWeight: 700,
                        color: foucs === "1" ? "black" : "#808080",
                      }}
                    >
                      List of to Read
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFoucs("2")}>
                  <View>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontWeight: 700,
                        color: foucs === "2" ? "black" : "#808080",
                      }}
                    >
                      List of the Read
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.container}>
                <Animated.View
                  style={[
                    styles.beforeTabs(foucs),
                    {
                      transform: [
                        {
                          translateX: indicatorPosition,
                        },
                      ],
                    },
                  ]}
                />
              </View>

              <EditCard />

              <NewList />
            </View>
          </View>
        ) : (
          <TimeLine data={data} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 3,
    backgroundColor: "#999797",
    marginTop: 16,
    position: "relative",
  },

  beforeTabs: () => ({
    position: "absolute",
    content: "",
    width: "50%",
    height: 3,
    backgroundColor: "black",
    top: 0,
  }),
});

export default CalendarPage;
