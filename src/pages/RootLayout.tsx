import { Outlet } from "react-router-dom";
import MainNavigation from "../screens/MainNavigation";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Hero from "../screens/Hero";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <TopHeader />
      <Box
        bgImage={{
          base: 'url("/image1-380x280.jpg")',
          md: 'url("/FG-Saloon-new-chairs-cropped.jpg")',
        }}
        bgSize="cover"
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
        h={{ base: "47vh", md: "100%" }}
      >
        <MainNavigation />
        <Box
          paddingTop={{ base: "80px", "2xl": "111px" }}
          // paddingBottom={"10px"}
        >
          <Hero />
        </Box>
      </Box>
      <Box width={"100%"} height={"3px"} bgColor={"#E0E0E0"}></Box>
      <Box
        display={{ base: "block", md: "none" }}
        bg={"rgba(0, 0, 0, 0.9)"}
        py={"20px"}
        mt={"-119px"}
      >
        <Heading
          as={"h3"}
          fontSize={{ base: "17px" }}
          fontWeight={400}
          textTransform={"uppercase"}
          textAlign={"center"}
          color={"#FFF"}
          lineHeight={{ base: "24px" }}
          letterSpacing={"0.9px"}
        >
          INTRODUCING A NEW AND UNIQUE
          <br /> DINING EXPERIENCE
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ base: "12px" }}
          color={"#FFF"}
          fontWeight={700}
          marginTop={"10px"}
        >
          Please note we are wheelchair friendly!
        </Text>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        flexDir={"column"}
        alignItems={"center"}
        gapX={"20px"}
        mt={"10px"}
      >
        <Box>
          <Image src="/coach-tourism-award.png" fit="cover" />
        </Box>
        <Box>
          <Image src="/mmia-award-1.png" fit="cover" />
        </Box>
      </Box>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
        <Box
          bgColor={"#A89252"}
          px={{ base: "1.2rem", md: "0rem" }}
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
              | © The Floating Grace of Liverpool Boat Charters 2025
            </Text>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default RootLayout;
