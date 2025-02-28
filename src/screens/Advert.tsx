import { Box, Heading, Text } from "@chakra-ui/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Advert = () => {
  return (
    <Box
      bgImage={"url(/book-row-background.jpg)"}
      bgSize="cover"
      bgRepeat="no-repeat"
      backgroundPosition={"center"}
    >
      <Box
        maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
        marginX={{ md: "auto" }}
        pt={{ base: "70px", md: "110px" }}
        pb={{ base: "50px", md: "70px" }}
        px={{ base: "5px", md: "16px", lg: "0" }}
      >
        <Heading
          fontSize={"26px"}
          color={"#FFF"}
          fontWeight={600}
          lineHeight={"29px"}
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          You Want To Host A Special Event?
        </Heading>
        <Text
          fontSize={{ base: "24px", md: "26px" }}
          fontWeight={{ base: 400, md: 300 }}
          my={"32px"}
          color={"#FFF"}
          textAlign={"center"}
          lineHeight={"24px"}
        >
          Tidal Treks provides a complete event experience with catering,
          entertainment, a full bar, and breathtaking views, whether by land or
          sea.
        </Text>
        <Text
          fontSize={"26px"}
          fontWeight={300}
          color={"#FFF"}
          textAlign={"center"}
        >
          Packages from{" "}
          <span style={{ fontWeight: 600, color: "#a89252" }}>
            £25 per head
          </span>
        </Text>
        <Box display={"flex"} justifyContent={"center"} my={"32px"}>
          <Link to={"/request-a-quote"}>
            <Button
              title="BOOK AN EVENT"
              hbgColor={"#FFF"}
              bgColor={"#FFF"}
              color={"black"}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Advert;
