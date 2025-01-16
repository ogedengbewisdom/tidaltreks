import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import TopHeader from "./TopHeader";
import { Link, NavLink } from "react-router-dom";
import { LINKS } from "../utils/formatDate";

interface MobileNavbarPops {
  isOpen: boolean;
  onClose: () => void;
}
const MobileNavbar: React.FC<MobileNavbarPops> = (props) => {
  return (
    <>
      <Drawer isOpen={props.isOpen} placement="top" onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent
          bgColor={"#000"}
          paddingX={"0px"}
          display={{ base: "block", lg: "none" }}
        >
          <DrawerBody padding={"0px"}>
            <TopHeader />
            <Box as={"nav"} bg={{ base: "#000", md: "rgba(0, 0, 0, 0.7)" }}>
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
                <Link to={"/"} onClick={() => props.onClose()}>
                  <Image
                    pos={"absolute"}
                    top={"16px"}
                    src="/tidalTreksLogo.JPG"
                    w={{ base: 100, "2xl": 115 }}
                    h={"auto"}
                  />
                </Link>
                {/* button */}
                {/* <DrawerTrigger asChild> */}
                <Box
                  w={"40px"}
                  h={"40px"}
                  bgColor={"#A89252"}
                  display={{ base: "block", lg: "none" }}
                  onClick={props.onClose}
                >
                  <Image src="icons8-hamburger-button-48 (1).png" />
                </Box>
                {/* </DrawerTrigger> */}
              </Box>
            </Box>

            <List
              className="Montserrat"
              display={{ base: "flex", lg: "none" }}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ base: "20px" }}
              marginY={"3.5rem"}
            >
              {LINKS.map((item, index) => {
                return (
                  <ListItem
                    onClick={() => props.onClose()}
                    key={index}
                    fontSize={{ base: "20px" }}
                    fontWeight={600}
                    color={"#FFF"}
                    _hover={{
                      color: "#A89252",
                    }}
                    // letterSpacing={"0.099px"}
                    transition="0.3s ease-in-out"
                    whiteSpace={"nowrap"}
                  >
                    <NavLink
                      to={item.link}
                      style={({ isActive }) => ({
                        color: isActive ? "#A89252" : "#FFF",
                      })}
                    >
                      {item.title}
                    </NavLink>
                  </ListItem>
                );
              })}
            </List>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileNavbar;
