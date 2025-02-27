import {
  Box,
  Image,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { LINKS, BOOKINGS } from "../utils/formatDate";
import BookingModal from "../screens/BookingModal";
import { useContext } from "react";
import { TidalTreksContextAPI } from "../../store/context";

const NavBarLg = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { selectedBookings, bookingHandler } = useContext(TidalTreksContextAPI);

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <BookingModal />
      <Box pos={"relative"}>
        <Box pos={"absolute"} zIndex={2} bottom={"-1000px"}>
          <MobileNavbar isOpen={isOpen} onClose={onClose} />
        </Box>
        <Box
          as={"nav"}
          bg={{
            base: "#000",
            md: path === "/route" ? "rgba(0, 0, 0, 0.2)" : "rgba(0,0,0,0.7)",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            h={{ base: "84px", md: "100px" }}
            maxW={{ "2xl": "1176px" }}
            marginX={{ xl: "auto" }}
            paddingX={{
              base: "30px",
              md: "7px",
              lg: "30px",
              xl: "50px",
              "2xl": "0px",
            }}
            pos={"relative"}
          >
            <Link to={"/"}>
              <Image
                pos={"absolute"}
                top={"16px"}
                src="/tidalTreksLogo.JPG"
                w={{ base: "130px", md: "166px" }}
                h={{ base: "75px", md: "99px" }}
                borderRadius={"5px"}
              />
            </Link>
            {/* button */}
            <Box
              w={"40px"}
              h={"40px"}
              bgColor={"#A89252"}
              display={{ base: "block", lg: "none" }}
              onClick={onOpen}
            >
              <Image src="/icons8-hamburger-button-48 (1).png" />
            </Box>
            {/* </DrawerTrigger> */}

            <List
              display={{ base: "none", lg: "flex" }}
              flexDir={"row"}
              className="Montserrat"
              gap={{ base: "18.9px", "2xl": "18.9px" }}
            >
              {LINKS.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    fontSize={{ base: "12px", xl: "14px" }}
                    fontWeight={600}
                    color={"#FFF"}
                    _hover={{
                      color: "#A89252",
                    }}
                    transition="0.3s ease-in-out"
                    whiteSpace={"nowrap"}
                  >
                    <NavLink
                      to={item.link}
                      style={({ isActive }) => ({
                        color: isActive ? "#A89252" : "inherit",
                      })}
                    >
                      {item.title}
                    </NavLink>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box
            // bg="rgba(245, 208, 98, 0.5)"
            display={{ base: "none", lg: "block" }}
            bg={"#A89252C7"}
            paddingBottom={"10px"}
            paddingTop={{ lg: "10px", "2xl": "18px" }}
            marginTop={{ base: "-10px", "2xl": "-0px" }}
          >
            <List
              display={"flex"}
              flexDir={"row"}
              // listStyle={"none"}
              className="Montserrat"
              gap={{ md: "10px", xl: "17px" }}
              justifyContent={"center"}
              alignItems={"center"}
              marginLeft={{ base: "200px", "2xl": "110px" }}
            >
              <ListItem
                fontSize={{ base: "15x", lg: "13px", xl: "15px" }}
                fontWeight={600}
                color={"#FFF"}
                width={{ base: "93.02" }}
              >
                Book Online
              </ListItem>
              {BOOKINGS.map((item, index) => {
                return (
                  <ListItem
                    onClick={() => bookingHandler(item.id)}
                    key={index}
                    cursor={"pointer"}
                    title="Book now!"
                    bgColor={"#000"}
                    px={"13px"}
                    h={{ lg: "30px", xl: "40px" }}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                    color="#A89252"
                    _hover={{
                      bgColor: "#A89252",
                      color: "#FFF",
                    }}
                    transition="0.5s ease-in-out"
                  >
                    <Text
                      fontSize={{ base: "11px", lg: "9px", xl: "11px" }}
                      fontWeight={400}
                      color={"#FFF"}
                    >
                      {item.title}
                    </Text>
                    {/* <Box fontSize={"26px"} fontWeight={600}>
                    {">"}
                  </Box> */}
                    <Box
                      fontSize={"26px"}
                      fontWeight={600}
                      width={"25px"}
                      height={"25px"}
                    >
                      <Image src="/icons8-greater-than-30.png" />
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBarLg;
