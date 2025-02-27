import { Box, Heading, Text } from "@chakra-ui/react";
import GoogleMapPlaces from "../screens/GoogleMap";
import Advert from "../screens/Advert";

const Valentine = () => {
  return (
    <>
      <Box
        mt={{ base: "20px", md: "70px" }}
        mb={"20px"}
        marginX={{ md: "auto" }}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          px={{ base: "1rem", md: "0px" }}
          gap={"20px"}
        >
          <Heading
            textTransform={"uppercase"}
            textAlign={"center"}
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={600}
            color={"#4a494a"}
            lineHeight={{ base: "30px" }}
            marginTop={{ xl: "19px" }}
          >
            Valentines Cruise
          </Heading>
          <Text
            fontSize={{ base: "16px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal" }}
            color={"rgb(74, 73, 74)"}
          >
            Be sure you make this Valentine’s Day extra special by reserving
            your table on The Floating Grace for a romantic meal for two as you
            hold hands across the table and she says “I do” (probably to the
            waiter asking if she wants more Prosecco).
          </Text>
          <Text
            fontSize={{ base: "16px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal" }}
            color={"rgb(74, 73, 74)"}
          >
            You can also call us on 07368 536127 or email Email:
            tidaltreks@gmail.co.uk
          </Text>
        </Box>
      </Box>
      <Box>
        <Box bg={"#000"} py={"40px"}>
          <Heading
            textAlign={"center"}
            fontSize={"28px"}
            color={"#FFF"}
            className="montserrat"
            fontWeight={500}
          >
            ROUTE MAP
          </Heading>
        </Box>
        <GoogleMapPlaces />
      </Box>
      <Advert />
    </>
  );
};

export default Valentine;
