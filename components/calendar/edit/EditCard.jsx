import { Image, Text, TouchableOpacity, View } from "react-native";
import { CONTAINER, icons } from "../../../constants";
import { styles } from "./editcard.style";
import { useRouter } from "expo-router";

const EditCard = () => {

    const router = useRouter()

  return (
    <View style={CONTAINER.calendarEdit}>
      <TouchableOpacity onPress={() => router.push('/calendar/2')}>
        <View style={styles.editCard}>
          <Text style={styles.editTitle}>Әдет күші</Text>

          <Text style={styles.editSubtitle}>Мирас Кесебаев | 30page</Text>

          <View style={styles.editDateFlex}>
            <View>
              <Text style={styles.editDate}>30/01/2024</Text>
            </View>

            <View>
              <Text style={styles.editDate}>22:50 PM Tuesday</Text>
            </View>
          </View>

          <Image
            source={icons.edit}
            resizeMode="cover"
            style={styles.editImage}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.editCard}>
        <Text style={styles.editTitle}>Әдет күші</Text>

        <Text style={styles.editSubtitle}>Мирас Кесебаев | 30page</Text>

        <View style={styles.editDateFlex}>
          <View>
            <Text style={styles.editDate}>30/01/2024</Text>
          </View>

          <View>
            <Text style={styles.editDate}>22:50 PM Tuesday</Text>
          </View>
        </View>

        <Image
          source={icons.edit}
          resizeMode="cover"
          style={styles.editImage}
        />
      </View>

      <View style={styles.editCard}>
        <Text style={styles.editTitle}>Әдет күші</Text>

        <Text style={styles.editSubtitle}>Мирас Кесебаев | 30page</Text>

        <View style={styles.editDateFlex}>
          <View>
            <Text style={styles.editDate}>30/01/2024</Text>
          </View>

          <View>
            <Text style={styles.editDate}>22:50 PM Tuesday</Text>
          </View>
        </View>

        <Image
          source={icons.edit}
          resizeMode="cover"
          style={styles.editImage}
        />
      </View>

      <View style={styles.editCard}>
        <Text style={styles.editTitle}>Әдет күші</Text>

        <Text style={styles.editSubtitle}>Мирас Кесебаев | 30page</Text>

        <View style={styles.editDateFlex}>
          <View>
            <Text style={styles.editDate}>30/01/2024</Text>
          </View>

          <View>
            <Text style={styles.editDate}>22:50 PM Tuesday</Text>
          </View>
        </View>

        <Image
          source={icons.edit}
          resizeMode="cover"
          style={styles.editImage}
        />
      </View>

      <View style={styles.editCard}>
        <Text style={styles.editTitle}>Әдет күші</Text>

        <Text style={styles.editSubtitle}>Мирас Кесебаев | 30page</Text>

        <View style={styles.editDateFlex}>
          <View>
            <Text style={styles.editDate}>30/01/2024</Text>
          </View>

          <View>
            <Text style={styles.editDate}>22:50 PM Tuesday</Text>
          </View>
        </View>

        <Image
          source={icons.edit}
          resizeMode="cover"
          style={styles.editImage}
        />
      </View>

      <View style={styles.editCard}>
        <Text style={styles.editTitle}>Әдет күші</Text>

        <Text style={styles.editSubtitle}>Мирас Кесебаев | 30page</Text>

        <View style={styles.editDateFlex}>
          <View>
            <Text style={styles.editDate}>30/01/2024</Text>
          </View>

          <View>
            <Text style={styles.editDate}>22:50 PM Tuesday</Text>
          </View>
        </View>

        <Image
          source={icons.edit}
          resizeMode="cover"
          style={styles.editImage}
        />
      </View>
    </View>
  );
};

export default EditCard;
