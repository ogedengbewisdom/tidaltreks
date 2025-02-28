import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { TidalTreksContextAPI } from "../../store/context";
import EventActivity from "../components/EventActivity";
import EventRoute from "./EventRoute";
import SocialEvents from "./SocialEvents";
import Advert from "./Advert";
import { BOOKINGS, EVENTACTIVITYLINK, EVENTROUTE } from "../utils/formatDate";
import { useNavigate } from "react-router-dom";
import BookingModal from "./BookingModal";

const Events = () => {
  const { openModalFunction, bookingHandler } =
    useContext(TidalTreksContextAPI);
  const navigate = useNavigate();

  const navigateHandler = (link: string) => {
    navigate(link);
  };

  return (
    <>
      <BookingModal />
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
          px={{ base: "1rem", md: "0px" }}
        >
          <Heading
            textTransform={"uppercase"}
            textAlign={"center"}
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={400}
            lineHeight={{ base: "30px" }}
            color={"rgb(74, 73, 74)"}
            marginTop={{ xl: "19px" }}
          >
            Welcome to tidal treks first floating restaurant
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
              onClick={openModalFunction}
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
            fontSize={{ base: "16px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal" }}
            color={"rgb(74, 73, 74)"}
          >
            Experience the beauty of coastal wonders, savor delicious cuisine,
            and unwind in style with <strong>Tidal Treks</strong>. Embark on an
            unforgettable adventure as we take you on a journey through stunning
            seascapes, complete with exceptional service, a vibrant on-board
            bar, and a touch of oceanic magic. Whether you're seeking thrilling
            exploration or serene relaxation, Tidal Treks is where memories are
            made, tides are embraced, and every moment is an adventure waiting
            to happen.
          </Text>
        </Box>

        <SimpleGrid
          display={{ base: "grid" }}
          columns={{ base: 1, md: 3 }}
          gap={{ base: "15px", md: "18px", lg: "20px", xl: "30px" }}
          paddingX={{ base: "1rem", "2xl": "1rem" }}
          mt={"58px"}
        >
          {BOOKINGS.slice(0, 3).map((booking, index) => {
            return (
              <EventActivity
                key={index}
                name={booking.title}
                onClick={() => bookingHandler(booking.id)}
                src={booking.src}
              />
            );
          })}
          {EVENTACTIVITYLINK.map((item, index) => {
            return (
              <EventActivity
                onClick={() => navigateHandler(item.link)}
                name={item.name}
                src={item.src}
                key={index}
              />
            );
          })}
        </SimpleGrid>
      </Box>

      <Box bgColor={"#E0E0E0"} mt={{ base: "60px", md: "120px" }}>
        <Box
          maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
          marginX={{ md: "auto" }}
          display={{ base: "flex" }}
          gap={{ base: "20px", md: "60px" }}
          flexDir={"column"}
          paddingY={{ base: "27px", md: "90px" }}
        >
          {EVENTROUTE.map((event, index) => {
            return (
              <EventRoute
                key={index}
                title={event.title}
                description={event.description}
                src={event.src}
                reverse={index % 2 !== 0}
              />
            );
          })}
        </Box>
      </Box>
      <Box
        maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
        my={"70px"}
        marginX={{ md: "auto" }}
      >
        <SocialEvents />
      </Box>

      <Advert />
    </>
  );
};

export default Events;
