import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Hello({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO WORLD!!!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("End")}
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
