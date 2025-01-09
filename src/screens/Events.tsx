import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

import EventActivity from "../components/EventActivity";
import EventRoute from "./EventRoute";
import SocialEvents from "./SocialEvents";
import Button from "../components/Button";

const EVENTACTIVITYLINK = [
  {
    name: "Evening dinner cruise",
    src: "/book-lunch-dinner-wpcf_368x212-1.jpg",
    link: "/",
  },
  {
    name: "Sunday lunch cruises",
    src: "/IMG_1987-wpcf_368x212.jpg",
    link: "/",
  },
  {
    name: "Afternoon tea cruises",
    src: "/2018-11-06-at-17.30.366-1-wpcf_368x212.jpeg",
    link: "/",
  },
  {
    name: "valentines cruises",
    src: "/IMG_5071-wpcf_368x212.jpeg",
    link: "/",
  },
  {
    name: "private events",
    src: "/8-wpcf_368x212.jpeg",
    link: "/",
  },
  {
    name: "business events",
    src: "/book-business.jpg",
    link: "/",
  },
];
const Events = () => {
  return (
    <>
      <Box
        as={"section"}
        marginX={{ md: "auto" }}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
        // paddingX={{ xl: "50px", "2xl": "0px" }}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading
            textTransform={"uppercase"}
            textAlign={"center"}
            fontSize={{ base: "24px" }}
            fontWeight={400}
            lineHeight={{ base: "30px" }}
            // letterSpacing={{ base: "wider", "2xl": "widest" }}
            // color={"#614967"}
            color={"rgb(74, 73, 74)"}
            marginTop={{ xl: "19px" }}
          >
            Welcome to tidal treks first <br /> floating restaurant
          </Heading>
          <Box marginTop={"30px"} marginBottom={"23px"}>
            <Box
              as={"button"}
              border={"none"}
              padding={{ base: "10px 15px" }}
              cursor={"pointer"}
              bgColor={"#A89252"}
              _hover={{ bgColor: "rgb(134, 116, 65)" }}
              transition="0.3s ease-in-out"
              color={"#FFF"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              {/* <FontAwesomeIcon icon={faMarkdown} /> */}
              <Box w={"24px"} h={"24px"}>
                <Image src="/icons8-checked-checkbox-48 (1).png" />
              </Box>
              <Text
                fontSize={{ base: "20px" }}
                fontWeight={500}
                className="helvetica"
              >
                Book Online!
              </Text>
            </Box>
          </Box>
          <Text
            display={{ base: "none", md: "block" }}
            fontSize={{ base: "16px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal" }}
            color={"rgb(74, 73, 74)"}
          >
            See the best views of Liverpool’s historic docklands, enjoy
            <br /> excellent food, make use of our on-board bar and relax in{" "}
            <br /> style on The Floating Grace.
          </Text>
          <Text
            display={{ base: "block", md: "none" }}
            fontSize={{ base: "16px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal" }}
            color={"rgb(74, 73, 74)"}
          >
            See the best views of Liverpool’s historic docklands, enjoy
            excellent food, make use of our on-board bar and relax in style on
            The Floating Grace.
          </Text>
        </Box>

        <SimpleGrid
          display={{ base: "grid", md: "grid" }}
          columns={{ base: 1, md: 3 }}
          gap={{ base: "15px", md: "18px", lg: "20px", xl: "30px" }}
          paddingX={{ base: "1rem", "2xl": "1rem" }}
          mt={"58px"}
        >
          {EVENTACTIVITYLINK.map((item, index) => {
            return (
              <EventActivity
                link={item.link}
                name={item.name}
                src={item.src}
                key={index}
              />
            );
          })}
        </SimpleGrid>
      </Box>

      <Box bgColor={"#E0E0E0"} mt={{ base: "60px", md: "120px" }}>
        <EventRoute />
      </Box>

      <Box
        bgImage={'url("/0-1-2.jpg")'}
        bgSize="cover"
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
      >
        <Box bgColor={"rgba(0,0,0, 0.74)"}>
          <Box
            maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
            marginX={"auto"}
          >
            <Box
              py={{ base: "50px", md: "90px" }}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"27px"}
              px={{ base: "50px", md: "10px", lg: "0px" }}
            >
              <Heading
                fontWeight={600}
                color={"#FFF"}
                textAlign={"center"}
                fontSize={"26px"}
              >
                NEW 10% Off for Armed Forces
              </Heading>
              <Box maxW={"80px"}>
                <Image src="/armed_forces_covenant_small.png" />
              </Box>
              <Text
                fontSize={{ base: "20px", md: "26px" }}
                fontWeight={400}
                color={"#FFF"}
                lineHeight={"30px"}
                textAlign={"center"}
              >
                We're delighted to offer members of our serving armed forces and
                veterans a 10% discount off all cruises and private events. To
                redeem this offer please tell our team that you're part of the
                Armed Forces at the point of booking.
              </Text>
              <Text
                fontSize={{ base: "15px", lg: "14px", xl: "15px" }}
                lineHeight={"21px"}
                fontWeight={700}
                color={"#FFF"}
                textAlign={"center"}
              >
                The Floating Grace is officially awarded the{" "}
                <span style={{ fontWeight: 600, color: "#a89252" }}>
                  Employer Recognition Scheme Bronze Award from the UK Ministry
                  of Defence
                </span>
              </Text>
              <Box
                as={"button"}
                border={"none"}
                padding={{ base: "10px 15px" }}
                cursor={"pointer"}
                bgColor={"#a89252"}
                _hover={{ bgColor: "rgb(134, 116, 65)" }}
                transition="0.3s ease-in-out"
                color={"#FFF"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Box w={"24px"} h={"24px"}>
                  <Image src="/icons8-checked-checkbox-48 (1).png" />
                </Box>
                {/* <FontAwesomeIcon icon={faMarkdown} /> */}
                <Text
                  fontSize={{ base: "20px" }}
                  fontWeight={500}
                  className="helvetica"
                >
                  Book Online!
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
        my={"70px"}
        marginX={{ md: "auto" }}
      >
        <SocialEvents />
      </Box>

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
        >
          <Heading
            fontSize={"26px"}
            color={"#FFF"}
            fontWeight={600}
            lineHeight={"29px"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            Looking to book a special event?
          </Heading>
          <Text
            fontSize={{ base: "24px", md: "26px" }}
            fontWeight={{ base: 400, md: 300 }}
            my={"32px"}
            color={"#FFF"}
            textAlign={"center"}
            lineHeight={"24px"}
            px={{ base: "5px", md: "0px" }}
          >
            We offer a complete events package including catering,
            entertainment, a full bar and scenic views of the Albert Dock
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
            <Button
              title="BOOK AN EVENT"
              hbgColor={"#FFF"}
              bgColor={"#FFF"}
              color={"black"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Events;
