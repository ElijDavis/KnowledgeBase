import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, { Rect, Defs, Mask } from "react-native-svg";
import GlobalShare from "../components/globalShare";
import SnapShot from "@/components/shapShot";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Background galaxy image */}
      <Image
        source={require("../assets/images/starrynight.png")}
        style={[StyleSheet.absoluteFill, {opacity: 0.75}]}
        resizeMode="cover"
      />

      {/* Noise overlay */}
      <ImageBackground
        source={require("../assets/noise.png")}
        style={[StyleSheet.absoluteFill, {opacity: 0.25}]}
        imageStyle={{ resizeMode: 'repeat' }}
      />

      {/* White overlay with rectangular cutouts */}
      <MaskedView
        style={StyleSheet.absoluteFill}
        maskElement={
          <Svg width="100%" height="100%">
            <Defs>
              <Mask id="mask">
                {/* White = visible | Black = transparent (cut-out) */}
                <Rect x="0" y="0" width="100%" height="100%" fill="white" />

                {/* Boxes (cutouts) */}
                <Rect x="5%" y="20%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
                <Rect x="5%" y="55%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
                <Rect x="37%" y="55%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
                <Rect x="70%" y="55%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
                <Rect x="5%" y="71%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
                <Rect x="37%" y="71%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
                <Rect x="70%" y="71%" width="25%" height="12.5%" rx={10} ry={10} fill="black" />
              </Mask>
            </Defs>

            {/* Apply the mask */}
            <Rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              mask="url(#mask)"
            />
          </Svg>
        }
      >
        <View style={{ flex: 1, backgroundColor: "rgba(255,255,255,1)" }} />
      </MaskedView>
      <SnapShot />
      <GlobalShare />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});

