import { Box, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import EventRoute from "./EventRoute";
import Advert from "./Advert";
import Button from "../components/Button";
import GoogleMapPlaces from "./GoogleMap";
import { ACTIVITY, EVENTROUTE, EVENTSFOOD } from "../utils/formatDate";

const BookCruise = () => {
  return (
    <>
      <Box
        mt={{ base: "20px", md: "70px" }}
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
            Book a Cruise with tidal treks
          </Heading>
          <Text
            fontSize={{ base: "16px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal" }}
            color={"rgb(74, 73, 74)"}
          >
            Whether you're celebrating a special occasion or simply looking to
            unwind, Tidal Treks is here to make your experience truly special.
            We're open year-round to accommodate your cruise needs and ensure
            every moment is memorable.
          </Text>
        </Box>

        <Box
          px={{ base: "1rem", md: "0rem" }}
          mt={{ base: "3rem" }}
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          gap={{ md: "20px" }}
          justifyContent={"space-between"}
        >
          {ACTIVITY.map((activity, index) => {
            return (
              <Box
                key={index}
                w={{ md: "232px", lg: "300px", xl: "368px" }}
                h={{ md: "100.59px", lg: "130px", xl: "170px" }}
                pos={"relative"}
              >
                <Image
                  src={activity.src}
                  w={"100%"}
                  h={"100%"}
                  display={{ base: "none", md: "block" }}
                />
                <Box
                  border={"1px solid #E0E0E0"}
                  p={"18px 14px"}
                  w={{ lg: "90%" }}
                  mx={"auto"}
                  zIndex={1}
                  bgColor={"#FFF"}
                  pos={{ lg: "absolute" }}
                  bottom={{ lg: "-85px", xl: "-65px" }}
                  left={{ lg: "15px", xl: "17px" }}
                  //   top={"30px"}
                >
                  <Text
                    className="montserrat"
                    textAlign={"center"}
                    fontSize={"15px"}
                    fontWeight={400}
                  >
                    {activity.description}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        bgColor={"#E0E0E0"}
        mt={{ base: "60px", md: "120px" }}
        py={{ base: "60px", md: "50px" }}
        px={{ base: "1rem", lg: "0rem" }}
      >
        <Box display={"flex"} flexDir={"column"} gap={"40px"}>
          {EVENTSFOOD.map((event, index) => {
            return (
              <Box
                key={index}
                bg={"#FFF"}
                marginX={{ md: "auto" }}
                maxW={{
                  md: "730px",
                  lg: "940px",
                  xl: "1150px",
                  "2xl": "1200px",
                }}
                display={"flex"}
                flexDir={{ base: "column", md: "row" }}
                gap={{ md: "60px" }}
                pl={{ base: "1rem", lg: "0rem" }}
                pr={{ base: "1rem", lg: "1rem" }}
                pt={{ base: "1rem", md: "0px" }}
                pb={{ base: "6rem", md: "5rem" }}
                pos={"relative"}
              >
                <Box
                  w={{ base: "100%", md: "234.78px", lg: "367px" }}
                  h={{ md: "209.5px", lg: "327px" }}
                >
                  <Image src={event.src} w={"100%"} h={"100%"} />
                </Box>
                <Box>
                  <Box my={"20px"}>
                    <Heading
                      as={"h3"}
                      fontSize={{ base: "28px" }}
                      lineHeight={"32px"}
                      fontWeight={400}
                      color={"#4a494a"}
                      className="montserrat"
                    >
                      {event.title}
                    </Heading>
                    <Text
                      mt={"6px"}
                      className="montserrat"
                      fontSize={"16px"}
                      lineHeight={"23px"}
                      fontWeight={600}
                      color={"#4a494a"}
                    >
                      {event.date}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={{ base: "20px", md: "50px" }}
                    flexDir={{ base: "column", md: "row" }}
                  >
                    {/* 1 */}
                    <Box w={{ base: "100%", md: "222px" }}>
                      <Text
                        fontSize={"14px"}
                        lineHeight={"22px"}
                        fontWeight={400}
                        color={"#4a494a"}
                        className="montserrat"
                      >
                        {event.description}
                      </Text>
                      <Text
                        fontSize={"14px"}
                        lineHeight={"22px"}
                        fontWeight={400}
                        color={"#4a494a"}
                        className="montserrat"
                      >
                        <strong>{event.footer}</strong>
                      </Text>
                    </Box>
                    {/* 2 */}
                    <Box px={{ base: "1rem", lg: "0rem" }}>
                      <List listStyleType={"initial"} color={"rgb(74, 73, 74)"}>
                        {event.lists.map((list, index) => {
                          return (
                            <ListItem
                              key={index}
                              color={"rgb(74, 73, 74)"}
                              fontSize={"14px"}
                              fontWeight={600}
                              className="montserrat"
                              textAlign={"left"}
                            >
                              {list}
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                    {/* 3 */}
                    <Box>
                      <Text
                        color={"rgb(74, 73, 74)"}
                        fontSize={"23px"}
                        fontWeight={600}
                        className="montserrat"
                      >
                        £{event.amount} <br />
                        <span
                          style={{
                            fontSize: "21px",
                            color: "rgb(74, 73, 74)",
                            fontWeight: 400,
                          }}
                        >
                          Per Person
                        </span>
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={{ base: "5px", md: "20px}" }}
                    justifyContent={"end"}
                    pos={{ md: "absolute" }}
                    bottom={{ md: "0px" }}
                    right={{ md: "0px" }}
                  >
                    <Button title="Book Now" />
                    {event.show ? <Button title="View Menu" /> : ""}
                  </Box>
                </Box>
              </Box>
            );
          })}
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
      <Box bgColor={"#E0E0E0"}>
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
              />
            );
          })}
        </Box>
      </Box>
      <Advert />
    </>
  );
};

export default BookCruise;
