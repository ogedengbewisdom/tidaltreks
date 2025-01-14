import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Button from "../components/Button";

const EventRoute = () => {
  return (
    <Box
      maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
      marginX={{ md: "auto" }}
      display={{ base: "flex" }}
      gap={{ base: "20px", md: "60px" }}
      flexDir={"column"}
      paddingY={{ base: "27px", md: "90px" }}
    >
      <Box
        display={"flex"}
        justifyContent={{ md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        paddingX={{ base: "1rem", md: "0rem" }}
        pos={"relative"}
      >
        <Box position={{ md: "absolute" }} left={"0px"} top={"-10px"}>
          <Box
            w={{ base: "100%", md: "530px" }}
            bgColor={"#FFF"}
            mt={"30px"}
            px={"35px"}
            pt={"50px"}
            pb={"50px"}
          >
            <Heading
              as={"h3"}
              textTransform={"uppercase"}
              fontSize={{ base: "20px", md: "24px" }}
              color={"#4A494A"}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Discover Coastal Beauty with Tidal Treks
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              lineHeight={"22px"}
              textAlign={"center"}
              mt={"25px"}
            >
              Immerse yourself in breathtaking waterfront views, where history
              meets the beauty of nature. Whether you're seeking adventure or
              tranquility, our cruises promise a unique perspective of the world
              around you—an experience you’ll treasure forever.
            </Text>
            <Box display={"flex"} justifyContent={"center"} mt={"25px"}>
              <Button />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box></Box>
        </Box>
        <Box>
          <Image src="/usp-albert-dock.jpg" alt="Resturant" />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={{ md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        paddingX={{ base: "0.3rem", sm: "1rem", md: "0rem" }}
        pos={"relative"}
      >
        <Box position={{ md: "absolute" }} right={"0px"} top={"-0px"}>
          <Box
            w={{ base: "100%", md: "530px" }}
            bgColor={"#FFF"}
            mt={"30px"}
            px={{ base: "10px", md: "35px" }}
            pt={"50px"}
            pb={"50px"}
          >
            <Heading
              as={"h3"}
              textTransform={"uppercase"}
              fontSize={{ base: "20px", md: "24px" }}
              color={"#4A494A"}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Host Your Perfect Event with Tidal Treks
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              lineHeight={"22px"}
              textAlign={"center"}
              mt={"25px"}
            >
              With flexible seating, audio-visual facilities, exceptional
              catering, and an on-board bar, Tidal Treks provides the perfect
              setting for unforgettable private or corporate events, ensuring a
              unique and memorable experience on the water.
            </Text>
            <Box display={"flex"} justifyContent={"center"} mt={"25px"}>
              <Button />
            </Box>
          </Box>
        </Box>
        <Box>
          <Image src="/usp-seating-760x398.jpg" alt="Resturant" />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={{ md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        paddingX={{ base: "1rem", md: "0rem" }}
        pos={"relative"}
      >
        <Box position={{ md: "absolute" }} left={"0px"} top={"-10px"}>
          <Box
            w={{ base: "100%", md: "530px" }}
            bgColor={"#FFF"}
            mt={"30px"}
            px={"35px"}
            pt={"50px"}
            pb={"50px"}
          >
            <Heading
              as={"h3"}
              textTransform={"uppercase"}
              fontSize={{ base: "20px", md: "24px" }}
              color={"#4A494A"}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Savor Delicious Meals with Tidal Treks
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              lineHeight={"22px"}
              textAlign={"center"}
              mt={"25px"}
            >
              Indulge in our expertly crafted set menu, designed to suit every
              taste. As you cruise in tranquility, our dedicated staff will
              serve your meal, perfectly paired with drinks, for an
              unforgettable dining experience on the water.
            </Text>
            <Box display={"flex"} justifyContent={"center"} mt={"25px"}>
              <Button />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box></Box>
        </Box>
        <Box>
          <Image src="/AdobeStock_78931456-760x398.jpeg" alt="Resturant" />
        </Box>
      </Box>
    </Box>
  );
};

export default EventRoute;
