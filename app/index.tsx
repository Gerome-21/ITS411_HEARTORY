import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "../styles/index";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <Link href={"/profile"}>Go to Profile Page</Link>
    </View>
  );
}
