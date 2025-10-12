import React from "react";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Image,
  G,
} from "react-native-svg";

// Import your SVG as a React component (requires react-native-svg-transformer)
import WorldShareIcon from "../assets/shareMundo.svg";

const GlobalShare: React.FC = () => {
  // Circle geometry
  const cx = 67;
  const cy = 390;
  const r = 48;

  return (
    <Svg height={500} width={300} style={{ zIndex: 2 }}>
      <Defs>
        {/* Gradient definition */}
        <RadialGradient id="grad" cx={0.3} cy={0.4} r={0.7} fx={0} fy={0}>
          <Stop offset="0" stopColor="#25C8C0" stopOpacity={1} />
          <Stop offset="0.5" stopColor="#6A726E" stopOpacity={1} />
          <Stop offset="1" stopColor="#AF1D1D" stopOpacity={1} />
        </RadialGradient>

        {/* ClipPath to restrict noise image to the circle */}
        <ClipPath id="circleClip">
          <Circle cx={cx} cy={cy} r={r} />
        </ClipPath>
      </Defs>

      {/* Base gradient circle */}
      <Circle cx={cx} cy={cy} r={r} fill="url(#grad)" />

      {/* Noise texture clipped to the circle */}
      <Image
        href={require("../assets/noise.png")}
        width={r * 2}
        height={r * 2}
        x={cx - r}
        y={cy - r}
        opacity={0.25}
        clipPath="url(#circleClip)"
        preserveAspectRatio="xMidYMid slice"
      />

      {/* Imported SVG icon centered at the focal point */}
      <G transform={`translate(${cx - 42}, ${cy - 35})`}>
        <WorldShareIcon width={58} height={58} vectorEffect="non-scaling-stroke" />
      </G>
    </Svg>
  );
};

export default GlobalShare;

