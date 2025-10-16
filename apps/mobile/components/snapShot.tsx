import { View, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, { Rect, Defs, Mask } from "react-native-svg";

const SnapShot = () => {

  return (
    <View > {/*style={{ position: "absolute", top: 122, left: 142, zIndex: 5, width: "58%", height: "38%", backgroundColor: "#403737", opacity: 0.63 }}*/}
      <MaskedView
        style={{flex: 1 }}
        maskElement={
          <Svg width="100%" height="100%">
            <Defs>
              <Mask id="mask">
                {/* White = visible | Black = transparent (cut-out) */}
                <Rect x="0" y="0" width="100%" height="100%" fill="#403737" />

                {/* Boxes (cutouts) */}
                <Rect x="0%" y="0%" width="100%" height="100%" rx={10} ry={10} fill="black" />
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
        <View style={{ flex: 1, backgroundColor: "rgba(64,55,55,0.63)" }} />
      </MaskedView>

    </View>
  )
}

export default SnapShot;

