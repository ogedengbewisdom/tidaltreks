import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { HomeIcon } from "../assets/svg";
import Calendar from "react-calendar";
import { useContext, useState } from "react";
import { TidalTreksContextAPI } from "../../store/context";

const imageArray = [
  "/3.jpeg",
  "/4-768x576.jpeg",
  "/8-wpcf_368x212.jpeg",
  "/14-768x432.png",
];

const BookingEventDetail = () => {
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { selectedBookings, openModalFunction } =
    useContext(TidalTreksContextAPI);
  const {
    title2,
    description,
    details,
    infoTitle,
    info,
    rates,
    about,
    options,
  } = selectedBookings;

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };
  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Box
        ml={{ base: "23px", md: "25px" }}
        mt={"-10px"}
        paddingTop={"1.5rem"}
        pb={"15px"}
      >
        <Box cursor={"pointer"} onClick={openModalFunction} width={"100px"}>
          <HomeIcon />
        </Box>
      </Box>
      <Box
        borderTop={"1px solid #E0E0E0"}
        pt={"0px"}
        position={"relative"}
        overflowY={"auto"}
      >
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          gap={{ base: "20px", md: "" }}
        >
          <Box w={"100%"} borderRight={{ md: "1px solid #E0E0E0" }}>
            <Box>
              <Box
                mt={{ base: "20px", md: "40px" }}
                ml={{ base: "20px", md: "26px" }}
                mr={{ md: "30px" }}
              >
                <Text
                  fontSize={{ base: "20px", md: "24px", xl: "30px" }}
                  fontWeight={600}
                  color={"#1F2428"}
                  className="roboto"
                  lineHeight={1}
                  letterSpacing={"0.01em"}
                >
                  {title2}
                </Text>
                {description.length > 1 && (
                  <Text
                    className="roboto"
                    mt={"5px"}
                    color={"#697886"}
                    fontSize={"13px"}
                    letterSpacing={"0.01em"}
                    lineHeight={1.2}
                  >
                    {description}
                  </Text>
                )}
                <Text
                  className="roboto"
                  mt={"10px"}
                  fontSize={"14px"}
                  color={"#1f2428"}
                  lineHeight={1.2}
                >
                  {details}
                </Text>
                <Box mt={"20px"}>
                  <Box
                    display={"flex"}
                    rowGap={"8px"}
                    alignItems={"center"}
                    ml={"-5px"}
                  >
                    <Image src="/reviews.svg" />{" "}
                    <Text
                      color={"#697886"}
                      fontSize={"12px"}
                      className="roboto"
                      fontWeight={700}
                    >
                      2173 Reviewers
                    </Text>
                  </Box>
                  <Text
                    className="roboto"
                    fontSize={"12px"}
                    color={"#697886"}
                    mt={"6px"}
                  >
                    #50 of 2,394 Places to Eat in Liverpool
                  </Text>
                  <Text
                    className="roboto"
                    fontSize={"10px"}
                    color={"#697886"}
                    mt={"6px"}
                  >
                    TripAdvisor Traveler Rating
                  </Text>
                  <Text
                    className="roboto"
                    fontSize={"10px"}
                    color={"#697886"}
                    mt={"-2px"}
                  >
                    According to TripAdvisor travelers as of{" "}
                    {new Date().toLocaleString("en-US", { month: "long" })}{" "}
                    {new Date().getFullYear()}
                  </Text>
                </Box>

                <Box
                  display={{ base: "block", md: "none" }}
                  w={{ base: "100%", md: "310px" }}
                  ml={{ md: "20px" }}
                  mt={"30px"}
                >
                  <Calendar
                    onClickDay={handleDateClick}
                    tileDisabled={({ date }) =>
                      date.getTime() < new Date().setHours(0, 0, 0, 0)
                    }
                    tileClassName={({ date }) =>
                      date.getTime() < new Date().setHours(0, 0, 0, 0)
                        ? "disabled-date"
                        : ""
                    }
                  />
                  <Text
                    className="roboto"
                    color={"#1d875a"}
                    fontSize={"14px"}
                    fontWeight={700}
                    p={"3px 10px"}
                  >
                    Click a date to browse availability
                  </Text>
                </Box>
              </Box>
              {/*  */}

              <Box
                borderTop={{ base: "1px solid #E0E0E0", md: "none" }}
                mt={"35px"}
              >
                <Box px={{ base: "20px", md: "26px" }} my={"40px"}>
                  <Box display={"flex"} flexDir={"column"} columnGap={"5px"}>
                    <Box
                      // w={{ base: "100vw" }}
                      h={{
                        base: "170px",
                        sm: "179px",
                        md: "162.5px",
                        lg: "189px",
                        xl: "298px",
                      }}
                    >
                      <Image
                        src={selectedImage}
                        alt="title"
                        w={"100%"}
                        h={"100%"}
                        objectFit={"cover"}
                        borderRadius={"2px"}
                      />
                    </Box>
                    <Box
                      display="flex"
                      gap="10px"
                      mt="10px"
                      maxW={{
                        base: "100%",
                        md: "310px",
                        lg: "500px",
                        xl: "620px",
                      }}
                      overflow={"auto"}
                      whiteSpace="nowrap"
                      sx={{
                        "::-webkit-scrollbar": {
                          height: "6px", // Adjust scrollbar thickness
                        },
                        "::-webkit-scrollbar-thumb": {
                          background: "#888", // Scrollbar color
                          borderRadius: "10px",
                        },
                        "::-webkit-scrollbar-track": {
                          background: "#f1f1f1", // Track color
                        },
                      }}
                    >
                      {imageArray.map((image, index) => (
                        <Box
                          key={index}
                          w="133.7px"
                          h="70.38px"
                          flexShrink={0}
                          border={
                            selectedImage === image ? "2px solid blue" : "none"
                          }
                          borderRadius={"5px"}
                          cursor={"pointer"}
                          onClick={() => handleSelectImage(image)}
                        >
                          <Image
                            src={image}
                            alt="title"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            borderRadius="2px"
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/*  */}
              <Box px={{ base: "20px", md: "26px" }}>
                <Text
                  as={"h3"}
                  className="roboto"
                  fontSize={"27px"}
                  lineHeight={1.2}
                  color={"#1f2428"}
                >
                  <strong>{infoTitle}</strong>
                </Text>
                <Box borderTop={"1px solid #E0E0E0"} mt={"20px"}>
                  <Text
                    as={"h3"}
                    className="roboto"
                    fontSize={"27px"}
                    lineHeight={1.2}
                    color={"#1f2428"}
                    mt={"20px"}
                  >
                    <strong>Basic Info</strong>
                  </Text>
                  <UnorderedList mt={"10px"} ml={"40px"}>
                    {info.map((data, index) => {
                      return (
                        <ListItem
                          key={index}
                          fontFamily={"15px"}
                          lineHeight={1.5}
                          color={"#1f2428"}
                          className="roboto"
                        >
                          {data}
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </Box>
                <Box borderTop={"1px solid #E0E0E0"} mt={"20px"}>
                  <Text
                    as={"h3"}
                    className="roboto"
                    fontSize={"27px"}
                    lineHeight={1.2}
                    color={"#1f2428"}
                    mt={"20px"}
                  >
                    <strong>Rate</strong>
                  </Text>
                  <Box mt={"10px"}>
                    <Text
                      fontFamily={"15px"}
                      lineHeight={1.5}
                      color={"#1f2428"}
                      className="roboto"
                    >
                      <strong>Adult (12 years old and over):</strong> £{" "}
                      {rates.adult} <br />{" "}
                      <strong>Child (Under 12 years old):</strong> £{" "}
                      {rates.child}
                    </Text>
                    <Text
                      my={"20px"}
                      fontFamily={"15px"}
                      lineHeight={1.5}
                      color={"#1f2428"}
                      className="roboto"
                    >
                      <em>
                        If you have a group of ten or more people, please call
                        us to enquire about Wednesday cruises!
                      </em>
                    </Text>
                  </Box>
                </Box>
                <Box borderTop={"1px solid #E0E0E0"} mt={"20px"}>
                  <Text
                    as={"h3"}
                    className="roboto"
                    fontSize={"27px"}
                    lineHeight={1.2}
                    color={"#1f2428"}
                    mt={"20px"}
                  >
                    <strong>Details</strong>
                  </Text>
                  <Box mt={"10px"}>
                    <Text
                      fontFamily={"15px"}
                      lineHeight={1.5}
                      color={"#1f2428"}
                      className="roboto"
                    >
                      {about}
                    </Text>
                    <Text
                      my={"20px"}
                      fontFamily={"15px"}
                      lineHeight={1.5}
                      color={"#1f2428"}
                      className="roboto"
                    >
                      {options}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={{ base: "none", md: "block" }}
            w={{ base: "100%", md: "290px", lg: "310px" }}
            mr={"20px"}
            mt={"30px"}
            position="sticky"
            top="0"
            zIndex="10"
          >
            <Calendar
              onClickDay={handleDateClick}
              //   activeStartDate={selectedDate}
              tileDisabled={({ date }) =>
                date.getTime() < new Date().setHours(0, 0, 0, 0)
              }
              tileClassName={({ date }) =>
                date.getTime() < new Date().setHours(0, 0, 0, 0)
                  ? "disabled-date"
                  : ""
              }
            />
            <Text
              //   mt={"20px"}
              className="roboto"
              color={"#1d875a"}
              fontSize={"14px"}
              fontWeight={700}
              p={"3px 10px"}
            >
              Click a date to browse availability
            </Text>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} px={"30px"} pb={"30px"}>
        <Text color={"#697886"} className="roboto" fontSize={"13px"}>
          All prices are in British pounds sterling
        </Text>
      </Box>
    </>
  );
};

export default BookingEventDetail;
