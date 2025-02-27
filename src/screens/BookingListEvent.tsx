import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CalendarIcon, SearchIcon } from "../assets/svg";
import { BOOKINGS } from "../utils/formatDate";
import { useContext } from "react";
import { TidalTreksContextAPI } from "../../store/context";

const BookingListEvent = () => {
  const { bookingHandler } = useContext(TidalTreksContextAPI);
  return (
    <Box mt={"10px"}>
      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={{ base: "20px", md: "0px" }}
        alignItems={{ md: "center" }}
        padding={"18px 25px"}
      >
        <Link to={"/"}>
          <Image
            src="/tidalTreksLogo.JPG"
            w={{ base: "132.8px", "2xl": 115 }}
            h={"80px"}
            borderRadius={"5px"}
          />
        </Link>
        <Box
          boxShadow={"0 2px 11px -5px rgba(0, 0, 0, .6)"}
          fontSize={"14px"}
          h={"40px"}
          w={"220px"}
          border={"1px solid #afb8c0"}
          borderRadius={"5px"}
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"10px"} ml={"10px"}>
            <CalendarIcon />
            <Text className="roboto" color={"#0a6ece"}>
              Search by date
            </Text>
          </Box>

          <Box
            bgColor={"#0a6ece"}
            w={"50px"}
            borderTopRightRadius={"5px"}
            borderBottomRightRadius={"5px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SearchIcon />
          </Box>
        </Box>
      </Box>
      <Box borderTop={"1px solid #E0E0E0"} mt={"5px"} mb={"20px"}>
        <SimpleGrid
          display={{ base: "grid" }}
          columns={{ base: 1, md: 2 }}
          maxW={{ lg: "870px", xl: "950px" }}
          placeItems="center"
          mt={"20px"}
          mx={"auto"}
          alignItems="stretch" // Ensure all items stretch evenly
          rowGap="15px" // Add row gap to prevent stacking issues
          px={{ base: "1rem", md: "0rem" }}
        >
          {BOOKINGS.map((booking, index) => {
            return (
              <Box
                key={index}
                width={{ base: "100%", md: "330px", lg: "418px", xl: "460px" }}
                bgImage={'url("/3.jpeg")'}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                h={{ base: "182px", md: "378px" }}
                borderRadius="5px"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                pb="15px"
                className="group"
                cursor="pointer"
                boxShadow="0 8px 10px 1px rgba(0, 0, 0, .1), 0 3px 14px 2px rgba(0, 0, 0, .08), 0 5px 5px -3px rgba(0, 0, 0, .16)"
                position="relative" // Ensures overlay works correctly
                overflow="hidden" // Prevents content overflow
              >
                {/* Dark gradient overlay */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="50%" // Covers the lower half of the box
                  bgGradient="linear(to-t, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
                  borderRadius="5px"
                />

                {/* Content Box */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  px="20px"
                  position="relative"
                  zIndex="2"
                >
                  <Box className="roboto" color="#FFF">
                    <Text
                      _groupHover={{ textDecoration: "underline" }}
                      fontSize="22px"
                      lineHeight={1}
                      fontWeight={400}
                      cursor="pointer"
                    >
                      {booking.title}
                    </Text>
                    <Text
                      fontSize="13px"
                      letterSpacing="0.01em"
                      lineHeight={1.2}
                    >
                      {booking.details}
                    </Text>
                  </Box>
                  <Button
                    bgColor="#0a6ece"
                    color="#FFF"
                    _hover={{ bgColor: "rgb(8, 90, 167)" }}
                    className="roboto"
                    w="62.58px"
                    h="30px"
                    fontSize="14px"
                    fontWeight={400}
                    borderRadius="3px"
                    onClick={() => bookingHandler(booking.id)}
                  >
                    Book
                  </Button>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BookingListEvent;
