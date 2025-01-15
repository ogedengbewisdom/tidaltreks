import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../screens/MainNavigation";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Hero from "../screens/Hero";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Box position={"relative"}>
      <TopHeader />
      <Box
        bgImage={{
          base:
            path === "/"
              ? 'url("/image1-380x280.jpg")'
              : path === "/book-a-cruise"
              ? 'url("/IMG_1601.JPG")'
              : "",
          md:
            path === "/"
              ? 'url("/FG-Saloon-new-chairs-cropped.jpg")'
              : path === "/book-a-cruise"
              ? 'url("/IMG_1601.JPG")'
              : "",
        }}
        bgSize="cover"
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
        h={{ base: "60vh", md: "100%" }}
      >
        <MainNavigation />
        <Box
          paddingTop={{ base: "80px", xl: "111px" }}
          display={path === "/" ? "block" : "none"}
        >
          <Hero />
        </Box>
        <Box pb={"300px"} display={path === "/" ? "none" : "block"}></Box>
      </Box>
      <Box width={"100%"} height={"3px"} bgColor={"#E0E0E0"}></Box>
      <Box
        display={{ base: path === "/" ? "block" : "none", md: "none" }}
        bg={"rgba(0, 0, 0, 0.9)"}
        py={"20px"}
        px={"10px"}
        mt={"-135px"}
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
          PRESENTING A ONE-OF-A-KIND LIFETIME EXPERIENCE
        </Heading>
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
      <main>
        <Outlet />
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
          px={{ base: "0.8rem", sm: "1rem", lg: "0rem" }}
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
              | © Tidal Treks 2025
            </Text>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default RootLayout;
