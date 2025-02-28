import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

interface EventRouteProps {
  title: string;
  description: string;
  src: string;
  reverse?: boolean;
}
const EventRoute: React.FC<EventRouteProps> = (props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={{ md: "space-between" }}
      flexDir={{ base: "column", md: props.reverse ? "row-reverse" : "row" }}
      paddingX={{ base: "1rem", md: "0rem" }}
      pos={"relative"}
    >
      <Box
        position={{ md: "absolute" }}
        left={props.reverse ? "auto" : "0px"}
        right={props.reverse ? "0px" : "auto"}
        top={"-10px"}
      >
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
            {props.title}
          </Heading>
          <Text
            fontSize={"15px"}
            fontWeight={400}
            lineHeight={"22px"}
            textAlign={"center"}
            mt={"25px"}
          >
            {props.description}
          </Text>
          <Box display={"flex"} justifyContent={"center"} mt={"25px"}>
            <Link to={"/route"}>
              <Button />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box></Box>
      </Box>
      <Box>
        <Image src={props.src} alt="Resturant" />
      </Box>
    </Box>
  );
};

export default EventRoute;
