import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/homepage";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <Link href={"/(tabs)"}>Go to Profile Page</Link>
      <TouchableOpacity onPress={() => {alert("Hello")}}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
