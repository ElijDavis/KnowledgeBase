import { Text, View, Image, StyleSheet } from "react-native";

export default function SettingsBar() {
  return (
      <View style={styles.SettingsBar}>
        <View style={styles.RedCircle}>
          <Image source={require("../assets/Settings.svg")} style={{ width: 32, height: 32, borderRadius: 16 }} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  SettingsBar: {
    width: '90%',
    height: '25%',
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  RedCircle: {
    width: '12%',
    height: '80%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: '2%',
    borderRadius: 9999,
    backgroundColor: '#AF1D1D',
  }
});
