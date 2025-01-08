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
              fontSize={"24px"}
              color={"#4A494A"}
              display={{ base: "none", md: "block" }}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Stunning views of the
              <br /> Albert Dock
            </Heading>
            <Heading
              as={"h3"}
              textTransform={"uppercase"}
              display={{ base: "block", md: "none" }}
              fontSize={"20px"}
              color={"#4A494A"}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Stunning views of the Albert <br />
              Dock
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              lineHeight={"22px"}
              textAlign={"center"}
              mt={"25px"}
            >
              Opened in 1846, the Albert Dock and surrounding area has played a
              key part in Liverpool’s maritime history. The stunning
              architecture is a must see and, on one of our cruises, you get to
              view the waterfront from a new and unique perspective.
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
        paddingX={{ base: "1rem", md: "0rem" }}
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
              fontSize={"24px"}
              color={"#4A494A"}
              display={{ base: "none", md: "block" }}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Seating for up to <br />
              50 guests
            </Heading>
            <Heading
              as={"h3"}
              textTransform={"uppercase"}
              display={{ base: "block", md: "none" }}
              fontSize={"20px"}
              color={"#4A494A"}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Seating for up to 50 guests
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              lineHeight={"22px"}
              textAlign={"center"}
              mt={"25px"}
            >
              If you are looking to host a memorable private or business event
              The Floating Grace is a fantastic option. With audio & visual
              facilities, full-service catering and an on-board bar you have
              everything you need for an unforgettable time.
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
              fontSize={"24px"}
              color={"#4A494A"}
              display={{ base: "none", md: "block" }}
              fontWeight={400}
              lineHeight={"27px"}
              textAlign={"center"}
            >
              Excellent set-menu and <br /> drinks packages
            </Heading>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              lineHeight={"22px"}
              textAlign={"center"}
              mt={"25px"}
            >
              Our stunning set menu caters to all tastes and preferences. Step
              on board and our talented staff will then serve your chosen meal
              whilst you experience the tour. Enjoy your food, drink and
              tranquility of the cruise.
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
