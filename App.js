import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    //tidy home page

    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "80%",
            borderRadius: 10,
            width: "60%",
          }}
          placeholder="Your current goal!"
        />
        <Button
          styles={{
            width: "40%",
            borderRadius: 10,
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          title="Add Goal"
        />
      </View>
      <View>
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
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeading: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
