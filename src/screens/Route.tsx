import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import GoogleMapPlaces from "./GoogleMap";
import EventActivity from "../components/EventActivity";
import { useNavigate } from "react-router-dom";
import { EVENTACTIVITYLINK } from "../utils/formatDate";

const Route = () => {
  const navigate = useNavigate();
  const navigateHandler = (link: string) => {
    navigate(link);
  };
  return (
    <>
      <Box mt={{ base: "35px", sm: "35px", md: "40px", "2xl": "75px" }}>
        <GoogleMapPlaces />
      </Box>
      <Box
        marginX={{ md: "auto" }}
        mt={"50px"}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
        pb={{ base: "60px", md: "60px" }}
      >
        <Heading
          textAlign={"center"}
          fontWeight={500}
          fontSize={{ base: "20px", md: "28px" }}
          className="montserrat"
          color={"rgb(74, 73, 74)"}
          textTransform={"uppercase"}
        >
          Book a cruise with tidal treks
        </Heading>
        <SimpleGrid
          display={{ base: "grid", md: "grid" }}
          columns={{ base: 1, md: 3 }}
          gap={{ base: "15px", md: "18px", lg: "20px", xl: "30px" }}
          paddingX={{ base: "1rem", "2xl": "1rem" }}
          mt={"30px"}
        >
          {EVENTACTIVITYLINK.map((item, index) => {
            return (
              <EventActivity
                onClick={() => navigateHandler(item.link)}
                name={item.name}
                src={item.src}
                key={index}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Route;
