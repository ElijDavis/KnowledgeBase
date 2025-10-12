import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

export default function App() {
  return (
    <MaskedView
      style={{ flex: 1 }}
      maskElement={
        <View style={styles.mask}>
          <Text style={styles.maskText}>HELLO</Text>
        </View>
      }
    >
      {/* Children: what will show through the mask */}
      <View style={{ flex: 1, backgroundColor: "blue" }} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  maskText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "black", // black = opaque = visible
  },
});
