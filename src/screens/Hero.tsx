import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box position="relative">
      <Box
        maxW={{ md: "730px", lg: "970px", xl: "1300px", "2xl": "1200px" }}
        // minW={"1200px"}
        marginX={"auto"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Box color={"blue.400"}></Box>
        <Box
          display={{ base: "none", md: "block" }}
          maxW={{ base: "350px" }}
          bg="rgba(0, 0, 0, 0.9)"
          marginRight={{ xl: "150px", "2xl": "25px" }}
          p={4}
          paddingY={"40px"}
          px={{ "2xl": "25px" }}
        >
          <Heading
            as={"h3"}
            fontSize={{ base: "20px" }}
            fontWeight={400}
            textTransform={"uppercase"}
            textAlign={"center"}
            color={"#FFF"}
            lineHeight={{ base: "24px" }}
          >
            PRESENTING A ONE-OF-A-KIND LIFETIME EXPERIENCE
          </Heading>
          <Text
            fontSize={{ base: "12px" }}
            color={"#FFF"}
            fontWeight={400}
            lineHeight={{ base: "15px" }}
            textAlign={"center"}
            marginTop={"20px"}
          >
            Set sail with Tidal Treks for unforgettable boat cruises. Explore
            breathtaking views, hidden gems, and thrilling adventures. Perfect
            for peaceful escapes, exciting journeys, or private events.
            Accessible, comfortable, and ready to create unforgettable memories
            on the water.
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "12px" }}
            color={"#FFF"}
            fontWeight={700}
            marginTop={"10px"}
          >
            We are happy to accommodate wheelchair accessibility for those who
            need it!
          </Text>
        </Box>
      </Box>
      <Box
        position="absolute"
        right={{ xl: "0px" }}
        top={{ base: "-30px", md: "27px" }}
        // display={{ base: "none", md: "block" }}
      >
        <Image
          src="/silver-armed-forces-covenant.jpg"
          display={{ base: "none", md: "block" }}
        />
      </Box>
      <Box
        position="fixed"
        right={{ base: "15%", md: "25px" }}
        left={{ base: "15%", md: "auto" }}
        zIndex={1}
        bottom={"20px"}
        as={"button"}
        border={"none"}
        padding={{ base: "10px 25px" }}
        cursor={"pointer"}
        bgColor={"#A49252"}
        boxShadow={"0 0 4px 1px rgba(0, 0, 0, 0.3)"}
        _hover={{ bgColor: "#867441" }}
        transition="0.3s ease-in-out"
        color={"#FFF"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        {/* <FontAwesomeIcon icon={faMarkdown} /> */}
        <Box w={"24px"} h={"24px"}>
          <Image src="/icons8-checked-checkbox-48 (1).png" />
        </Box>
        <Text
          fontSize={{ base: "20px", "2xl": "25px" }}
          fontWeight={400}
          className="helvetica"
        >
          Book Now!
        </Text>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        pb={{ base: "0px", md: "40px" }}
      >
        {/* <Box>
          <Image src="/coach-tourism-award.png" fit="cover" />
        </Box>
        <Box>
          <Image src="/mmia-award-1.png" fit="cover" width={"100%"} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Hero;
