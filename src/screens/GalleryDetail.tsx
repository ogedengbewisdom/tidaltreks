import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { EVENTACTIVITYLINK } from "../utils/formatDate";
import EventActivity from "../components/EventActivity";
import { useNavigate } from "react-router-dom";

// interface GalleryProps {
//   data: { src: string[]; title: string; date: Date }[];
// }

const GalleryDetail: React.FC<any> = (props) => {
  // const { src } = props.data;
  // console.log(src[0]);
  const FILTEREDACTIVITY = EVENTACTIVITYLINK.filter(
    (event) =>
      event.name !== "Evening dinner cruise" &&
      event.name !== "Sunday lunch cruises" &&
      event.name !== "Afternoon tea cruises"
  );

  const navigate = useNavigate();

  const navigateHandler = (link: string) => {
    navigate(link);
  };
  return (
    <>
      <Box bgColor={"#E0E0E0"} mt={{ base: "60px", md: "120px" }}>
        <Box
          maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
          marginX={{ md: "auto" }}
          display={{ base: "flex" }}
          gap={{ base: "20px", md: "60px" }}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={{ base: "27px", md: "90px" }}
          px={{ base: "0.7rem" }}
        >
          {props.data.src.map((src: string, index: number) => {
            return (
              <Box
                key={index}
                border={"5px solid #FFF"}
                width={{
                  base: "100%",
                  md: "738px",
                  lg: "542px",
                  xl: "900px",
                }}
                h={{ base: "413px", md: "730px", lg: "500px", xl: "600px" }}
              >
                <Image src={src} w={"100%"} h={"100%"} />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box bgColor={"#FFF"}>
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
                  onClick={() => navigateHandler(item.link)}
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

export default GalleryDetail;
