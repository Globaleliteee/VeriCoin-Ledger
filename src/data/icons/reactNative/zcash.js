//@flow
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number,
  color: string
};

export default function Zcash({ size, color }: Props) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size}>
      <Path
        fill={color}
        d="M10.947 3.647h-7.96V1.979h11.601L5.641 12.353h7.96v1.668H2l8.947-10.374zm-1.819 0H7.46V0h1.668v3.647zm0 12.353H7.46v-3.647h1.668V16z"
      />
    </Svg>
  );
}