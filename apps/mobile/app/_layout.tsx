// app/_layout.tsx
import { Stack } from "expo-router";
import { ImageBackground, View, StyleSheet } from "react-native";
import SettingsBar from "@/components/settingsBar";

export default function RootLayout() {
  return (
    <ImageBackground
      source={require("../assets/images/starrynight.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Foreground content layer */}
      <View style={styles.content}>
        <SettingsBar />
        <Stack
          screenOptions={{
            headerShown: false,
            // This is the key: make every screen's background transparent
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    // keep it transparent so the background shows through everywhere
    backgroundColor: "transparent",
  },
});