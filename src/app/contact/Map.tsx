import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC4C_2Ux9XXdXYzo68r5wAweZ072wDlmkc",
  });
  if (!isLoaded)
    return (
      <div className="color-primary font-body font-medium text-[15px]">
        Loading map...
      </div>
    );
  return (
    <GoogleMap mapContainerClassName="w-100 h-[400px]" zoom={10}>
      {" "}
    </GoogleMap>
  );
};

export default Map;
