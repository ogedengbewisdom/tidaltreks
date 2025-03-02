import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import MainNavigation from "../screens/MainNavigation";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Hero from "../screens/Hero";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import ScrollToTop from "../screens/ScrollTop";
import { useContext } from "react";
import { TidalTreksContextAPI } from "../../store/context";

const RootLayout = () => {
  const [searchParams] = useSearchParams();

  const requestTitle = searchParams.get("TYPE");
  const location = useLocation();
  const path = location.pathname;

  const { openModalFunction } = useContext(TidalTreksContextAPI);

  return (
    <Box position={"relative"}>
      <ScrollToTop />
      <TopHeader />
      {/* start */}
      <Box
        bgImage={{
          base:
            path === "/"
              ? 'url("/image1-380x280.jpg")'
              : path === "/book-a-cruise"
              ? 'url("/IMG_1601.JPG")'
              : path === "/menus"
              ? 'url("/best-sunday-lunch1-1-wpcf_1800x300.jpg")'
              : path === "/private-events"
              ? 'url("/5-cropped-01.jpg")'
              : path === "/business-events"
              ? 'url("/personal-events-splash-image.jpg")'
              : path === "/route"
              ? 'url("/Albert-Dock-49031-wpcf_1920x520.jpg")'
              : path === "/gallery"
              ? 'url("/IMG_2052-wpcf_1920x450.jpg")'
              : path === "/blog"
              ? 'url("/Business-Events-01.jpg")'
              : path === "/valentines-cruise"
              ? 'url("/IMG_5071-wpcf_1432x565.jpeg")'
              : path.startsWith("/request-a-quote")
              ? 'url("/IMG_1601.JPG")'
              : "",

          md:
            path === "/"
              ? 'url("/FG-Saloon-new-chairs-cropped.jpg")'
              : path === "/book-a-cruise"
              ? 'url("/IMG_1601.JPG")'
              : path === "/menus"
              ? 'url("/best-sunday-lunch1-1-wpcf_1800x300.jpg")'
              : path === "/private-events"
              ? 'url("/5-cropped-01.jpg")'
              : path === "/business-events"
              ? 'url("/personal-events-splash-image.jpg")'
              : path === "/route"
              ? 'url("/Albert-Dock-49031-wpcf_1920x520.jpg")'
              : path === "/gallery"
              ? 'url("/IMG_2052-wpcf_1920x450.jpg")'
              : path === "/blog"
              ? 'url("/Business-Events-01.jpg")'
              : path === "/valentines-cruise"
              ? 'url("/IMG_5071-wpcf_1432x565.jpeg")'
              : path.startsWith("/request-a-quote")
              ? 'url("/IMG_1601.JPG")'
              : "",
        }}
        bgSize={"cover"}
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
        h={{ base: path === "/business-events" ? "35vh" : "53vh", md: "100%" }}
      >
        <Box bgColor={path === "/route" ? "rgba(0,0,0,0.4)" : ""}>
          <MainNavigation />
          <Box
            paddingTop={{ base: "80px", xl: "111px" }}
            display={path === "/" || path === "/menus" ? "block" : "none"}
          >
            {/* <Hero /> */}
            {path === "/" ? (
              <Hero />
            ) : path === "/menus" ? (
              <Box
                display={{ base: "none", md: "flex" }}
                alignItems={"center"}
                justifyContent={"center"}
                bg={"rgba(0,0,0,0.74)"}
                py={"2rem"}
              >
                {" "}
                <Heading
                  as={"h1"}
                  color={"#FFF"}
                  fontSize={"32px"}
                  fontWeight={600}
                  className="montserrat"
                  textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
                >
                  Menus
                </Heading>
              </Box>
            ) : (
              ""
            )}
          </Box>
          <Box
            pb={"300px"}
            display={path === "/" || path === "/menus" ? "none" : "block"}
          ></Box>
          {/* <Box> Menus</Box> */}
        </Box>
      </Box>
      {/* stop */}
      <Box width={"100%"} height={"3px"} bgColor={"#E0E0E0"}></Box>
      <Box
        display={{ base: path === "/" ? "block" : "none", md: "none" }}
        bg={"rgba(0, 0, 0, 0.9)"}
        py={"20px"}
        px={"10px"}
        mt={"-138px"}
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
      <Box
        display={{ base: path === "/menus" ? "flex" : "none", md: "none" }}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"rgba(0,0,0,0.74)"}
        mt={"-77px"}
        py={"1rem"}
      >
        {" "}
        <Heading
          as={"h1"}
          color={"#FFF"}
          fontSize={"32px"}
          fontWeight={600}
          className="montserrat"
          textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
        >
          Menus
        </Heading>
      </Box>

      <Box
        display={{ base: path === "/route" ? "flex" : "none" }}
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
          fontSize={"32px"}
          fontWeight={600}
          className="montserrat"
          textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
          textTransform={"uppercase"}
        >
          Route map
        </Heading>
        <Text
          color={"#FFF"}
          fontSize={{ base: "20px", md: "24px" }}
          textAlign={"center"}
          className="montserrat"
        >
          Tidal Treks glides past serene parks and sandy beaches, offering
          breathtaking views of these tranquil, picturesque landscapes
        </Text>
      </Box>

      <Box
        display={{
          base: path.startsWith("/request-a-quote") ? "flex" : "none",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"20px"}
        mt={{ base: "-150px", sm: "-210px", md: "-150px" }}
        py={"1rem"}
      >
        {requestTitle && (
          <Text
            as={"h2"}
            color={"#FFF"}
            fontSize={{ base: "20px", md: "24px" }}
            textAlign={"center"}
            className="montserrat"
            textTransform={"uppercase"}
            fontWeight={500}
          >
            {requestTitle}
          </Text>
        )}
        <Heading
          as={"h1"}
          color={"#FFF"}
          fontSize={"32px"}
          fontWeight={600}
          className="montserrat"
          textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
          textTransform={"uppercase"}
        >
          Request A Quote
        </Heading>
      </Box>
      <Box
        display={{ base: path === "/blog" ? "flex" : "none" }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"20px"}
        mt={{ base: "-175px", sm: "-177px", md: "-130px" }}
        py={"1rem"}
        px={{ base: "1rem" }}
        bgColor={"rgba(0,0,0,0.74)"}
      >
        <Heading
          as={"h1"}
          color={"#FFF"}
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight={600}
          className="montserrat"
          textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
          textTransform={"uppercase"}
        >
          Latest news
        </Heading>
        <Text
          color={"#FFF"}
          fontSize={{ base: "20px", md: "24px" }}
          textAlign={"center"}
          className="montserrat"
        >
          Our customers are top priority, please let us know how we can improver
          our services
        </Text>
      </Box>
      <Box
        display={{ base: path === "/gallery" ? "flex" : "none" }}
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
          fontSize={"32px"}
          fontWeight={600}
          className="montserrat"
          textShadow={"rgb(0, 0, 0) 2px 2px 0px"}
          textTransform={"uppercase"}
        >
          Gallery
        </Heading>
        <Text
          color={"#FFF"}
          fontSize={{ base: "20px", md: "24px" }}
          textAlign={"center"}
          className="montserrat"
          px={{ sm: "1rem" }}
        >
          This are some images of the events hosted by Tidal Treks for our
          wonderful client, with 5 star recomendation
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
          onClick={openModalFunction}
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

export default RootLayout;
