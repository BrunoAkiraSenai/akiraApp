import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput>Open up App.js to start working on your app!</TextInput>

      <TextInput style={[styles.container, { backgroundColor: "#fff" }]} />
      <TextInput style={[styles.container, { backgroundColor: "#fff" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
