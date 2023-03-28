import * as ReactLeaflet from "react-leaflet";

import "leaflet/dist/leaflet.css";
import React from "react";
const { MapContainer } = ReactLeaflet;

// eslint-disable-next-line react/display-name
const Map = React.forwardRef(
  ({ children, className, width, height, ...rest }, ref) => {
    return (
      <MapContainer
        className={`w-[100%] h-[80vh] min-h-[500px] z-0 ${className}`}
        {...rest}
        ref={ref}
      >
        {children}
      </MapContainer>
    );
  }
);

export default Map;
