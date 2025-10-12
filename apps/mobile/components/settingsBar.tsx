import { Text, View, Image, StyleSheet } from "react-native";
import SettingsIcon from "../assets/Settings.svg";

export default function SettingsBar() {
  return (
    <View style={styles.Container}>
      <View style={styles.SettingsBar}>
        <View style={styles.RedCircle}>
          <SettingsIcon width={32} height={32} style={{justifyContent: 'center'}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
    paddingTop: '10%',
  },
  SettingsBar: {
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  RedCircle: {
    width: '14%',
    height: '80%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5%',
    borderRadius: 9999,
    backgroundColor: '#AF1D1D',
  }
});
