import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    //tidy home page

    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Your current goal!" />
        <Button style={styles.button} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.textHeading}>List of Goals</Text>
        <Text>Goal 1</Text>
        <Text>Goal 2</Text>
        <Text>Goal 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 16,
    paddingTop: 50,
    flexDirection: "column",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  goalsContainer: {
    flex: 6,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  textHeading: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
  },
  TextInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: "40%",
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
});
