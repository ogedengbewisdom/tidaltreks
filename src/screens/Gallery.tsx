import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import {
  EVENTACTIVITYLINK,
  formatSpecificDate,
  GALLERY,
} from "../utils/formatDate";
import EventActivity from "../components/EventActivity";
import { Link } from "react-router-dom";

const Gallery = () => {
  const FILTEREDACTIVITY = EVENTACTIVITYLINK.filter(
    (event) =>
      event.name !== "Evening dinner cruise" &&
      event.name !== "Sunday lunch cruises" &&
      event.name !== "Afternoon tea cruises"
  );

  return (
    <>
      <Box
        mt={{ base: "70px" }}
        marginX={{ md: "auto" }}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
        py={{ base: "20px", sm: "50px", md: "90px" }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
          }}
          gap={{ base: "40px" }}
          px={{ base: "2rem" }}
        >
          {/* Gallery Item 1 */}
          {GALLERY.map((item, index) => {
            const formattedDate = formatSpecificDate(item.date, "long");
            return (
              <Link
                key={index}
                to={`/gallery/${item.title.replace(/\s+/g, "-")}`}
              >
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  padding={"15px"}
                  gap={"20px"}
                >
                  <Box
                    width={{
                      base: "100%",
                      md: "164px",
                      lg: "232px",
                      xl: "300px",
                    }}
                    h={{ md: "123px", lg: "174px", xl: "225px" }}
                    px={"4px"}
                    bgColor={" rgb(0, 0, 0)"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src={item.src[0]} alt={item.title} />
                  </Box>
                  <Heading
                    fontSize={{ base: "20px", md: "24px" }}
                    textTransform={"uppercase"}
                    className="montserrat"
                    fontWeight={500}
                    color={"rgb(74, 73, 74)"}
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "13px", md: "15px" }}
                    color={"rgb(74, 73, 74)"}
                    fontWeight={400}
                  >
                    {formattedDate.day} {formattedDate.month}{" "}
                    {formattedDate.year}
                  </Text>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box bgColor={"#E0E0E0"}>
        <Box
          marginX={{ md: "auto" }}
          mt={"50px"}
          maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
          py={{ base: "60px", md: "60px" }}
        >
          <Heading
            textAlign={"center"}
            fontWeight={500}
            fontSize={{ base: "20px", md: "28px" }}
            className="montserrat"
            color={"rgb(74, 73, 74)"}
            textTransform={"uppercase"}
          >
            Book a cruise with tidal treks
          </Heading>
          <SimpleGrid
            display={{ base: "grid", md: "grid" }}
            columns={{ base: 1, md: 3 }}
            gap={{ base: "15px", md: "18px", lg: "20px", xl: "30px" }}
            paddingX={{ base: "1rem", "2xl": "1rem" }}
            mt={"30px"}
          >
            {FILTEREDACTIVITY.map((item, index) => {
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
      </Box>
    </>
  );
};

export default Gallery;
