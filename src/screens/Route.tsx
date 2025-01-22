import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import GoogleMapPlaces from "./GoogleMap";
import { EVENTACTIVITYLINK } from "../utils/formatDate";
import EventActivity from "../components/EventActivity";

const Route = () => {
  const FILTEREDACTIVITY = EVENTACTIVITYLINK.filter(
    (event) =>
      event.name !== "Evening dinner cruise" &&
      event.name !== "Sunday lunch cruises" &&
      event.name !== "Afternoon tea cruises"
  );

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
          {FILTEREDACTIVITY.map((item, index) => {
            return (
              <EventActivity
                link={item.link}
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
