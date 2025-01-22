import { Skeleton, Stack } from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";

// const libraries = ["places"];
const GoogleMapPlaces = () => {
  const location = useLocation();
  const path = location.pathname;
  const apiKey = process.env.GOOGLE_API_KEY as string;
  console.log(apiKey);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const position = { lat: 7.55085, lng: 6.23618 };
  const containerStyle = {
    width: "100%",
    height: path === "/route" ? "70vh" : "400px",
  };
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          center={position}
          zoom={9}
          mapContainerStyle={containerStyle}
        >
          {/* <div className=" text-[#666] h-[50vh] w-[100%]"></div> */}
        </GoogleMap>
      ) : (
        <Stack>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      )}
    </>
  );
};

export default GoogleMapPlaces;
