import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function End() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bye!!!</Text>
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
    color: "white",
  },
});
