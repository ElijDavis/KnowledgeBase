import { Image } from "expo-image";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-black rounded-full">
        <View className="bg-[#AF1D1D] float-right rounded-full w-32 h-32">\
          <Image source={require("../assets/ellipse1.png")} className="w-32 h-32 rounded-full" />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
