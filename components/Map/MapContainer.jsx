import dynamic from "next/dynamic";
import React from "react";

const DynamicMap = dynamic(() => import("./dynamicMap"), {
  ssr: false,
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;
// eslint-disable-next-line react/display-name

// eslint-disable-next-line react/display-name
const MapContainer = React.forwardRef((props, ref) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  return (
    <div>
      <DynamicMap {...props} ref={ref} />
    </div>
  );
});

export default MapContainer;
