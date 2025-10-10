import { Text, View, Image, StyleSheet } from "react-native";
import SettingsBar from "@/components/settingsBar";

export default function Index() {
  return (
    <View style={sytles.Container}>
      <SettingsBar />
    </View>
  );
}

const sytles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
  }
});
