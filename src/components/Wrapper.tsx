import { useLocation } from "react-router-dom";
import ScrollToTop from "../screens/ScrollTop";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import TopHeader from "./TopHeader";
import MainNavigation from "../screens/MainNavigation";

import React, { ReactNode } from "react";
import Footer from "./Footer";

interface WrapperProps {
  children: ReactNode;
  title: string;
  bgSrc: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Box position={"relative"}>
      <ScrollToTop />
      <TopHeader />
      {/* start */}
      <Box
        bgImage={`url("${props.bgSrc}")`}
        bgSize={"cover"}
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
        h={{
          base: "53vh",
          md: "100%",
        }}
      >
        <Box>
          <MainNavigation />

          <Box
            pb={"300px"}
            display={path === "/" || path === "/menus" ? "none" : "block"}
          ></Box>
        </Box>
      </Box>
      {/* stop */}
      <Box width={"100%"} height={"3px"} bgColor={"#E0E0E0"}></Box>

      <Box
        display={{ base: "flex" }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"20px"}
        mt={{ base: "-250px", sm: "-250px", md: "-200px" }}
        py={"1rem"}
      >
        <Heading
          as={"h1"}
          color={"#FFF"}
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight={600}
          className="montserrat"
          textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          {props.title}
        </Heading>
      </Box>
      <main>
        {props.children}
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
      </main>
      <footer>
        <Footer />
        <Box
          bgColor={"#A89252"}
          px={{ base: "1rem", lg: "0rem" }}
          py={{ base: "2px", md: "20px" }}
        >
          <Box>
            <Text
              textAlign={"center"}
              color={"#FFF"}
              fontSize={"15px"}
              lineHeight={"22px"}
              mb={"20px"}
            >
              <strong>
                Please note that on occasions couples may have to share a table.
                Please note you are responsible for your own safety whilst on
                the pontoon prior to boarding the boat and after disembarking
                the boat.
              </strong>
            </Text>
            <Text
              fontSize={"15px"}
              lineHeight={"22px"}
              color={"#FFF"}
              textAlign={"center"}
            >
              Developed by{" "}
              <strong>
                <a href="https://x.com/OnimisiWisdom">Ogedengbe Wisdom</a>
              </strong>{" "}
              | © Tidal Treks {new Date().getFullYear()}
            </Text>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default Wrapper;
