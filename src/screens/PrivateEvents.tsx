import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { ACTIVITY } from "../utils/formatDate";
import EventVenue from "./EventVenue";

interface PrivateEventsProps {
  events: [{ title: string; description: string; src: string; amount: string }];
}

const PrivateEvents: React.FC<PrivateEventsProps> = ({ events }) => {
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
            fontSize={{ base: "20px", md: "24px", xl: "29px" }}
            fontWeight={600}
            lineHeight={{ base: "30px" }}
            marginTop={{ xl: "19px" }}
            color={"rgb(74, 73, 74)"}
          >
            private events
          </Heading>
          <Text
            fontSize={{ base: "16px", lg: "21px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal", lg: "31px" }}
            color={"rgb(74, 73, 74)"}
          >
            Dreaming of hosting an extraordinary private event? Our stunning
            venue sets the stage for unforgettable moments, tailored perfectly
            to your vision, with no limit on the guest list!
          </Text>
          <Text
            fontSize={{ base: "12px", lg: "15px" }}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={{ base: "normal", lg: "31px" }}
            color={"rgb(74, 73, 74)"}
          >
            <strong>
              Please provide us with advanced notice if any member of your party
              have allergies or special dietary requirements.
            </strong>
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

      <Box bgColor={"#E0E0E0"} mt={{ base: "50px", md: "200px", lg: "150px" }}>
        <Box
          maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
          marginX={{ md: "auto" }}
          display={{ base: "flex" }}
          gap={{ base: "20px", md: "60px" }}
          flexDir={"column"}
          px={{ base: "0.3rem" }}
          paddingTop={{ base: "27px", md: "90px" }}
          paddingBottom={{ base: "70px", md: "90px" }}
        >
          {events.map((event, index) => {
            return (
              <EventVenue
                key={index}
                title={event.title}
                description={event.description}
                src={event.src}
                amount={event.amount}
                reverse={index % 2 !== 0}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default PrivateEvents;
