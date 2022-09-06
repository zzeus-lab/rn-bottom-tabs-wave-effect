import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface SvgIconProps extends SvgProps {
  fill?: string;
  stroke?: string;
  xmlns?: string;
}

function IndicatorSvg(props: SvgIconProps) {
  return (
    <Svg
      style={{
        flex: 1,
      }}
      viewBox="0 0 92 114"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.19 30c5.372 0 9.796-3.987 12.019-8.878C18.87 8.663 31.424 0 46 0c14.576 0 27.13 8.663 32.791 21.122C81.014 26.012 85.438 30 90.811 30H91a1 1 0 011 1v82a1 1 0 01-1 1H1a1 1 0 01-1-1V31a1 1 0 011-1h.19z"
      />
    </Svg>
  );
}

export default IndicatorSvg;
