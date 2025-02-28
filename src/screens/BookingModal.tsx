import {
  Box,
  Button,
  CloseButton,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { faWordpressSimple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import BookingEventDetail from "./BookingEventDetail";
import BookingListEvent from "./BookingListEvent";
import { TidalTreksContextAPI } from "../../store/context";

const BookingModal = () => {
  const {
    isOpen: openPopover,
    onClose: closePopover,
    onToggle: togglePopover,
  } = useDisclosure();
  const finalRef = React.useRef(null);
  const { showlist, isOpen, onClose } = useContext(TidalTreksContextAPI);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Modal
      blockScrollOnMount={true}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "sm", md: "3xl", lg: "4xl", xl: "5xl" }}
    >
      <ModalOverlay bg="rgba(255, 255, 255, 0.8)" backdropFilter="blur(1px)" />
      <ModalContent w={{ base: "100%", md: "90vw" }} maxW="978px">
        <Box
          mx={"10px"}
          mt={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            fontSize={"13px"}
            fontWeight={500}
            size={"sm"}
            variant="ghost"
            display={"flex"}
            gap={"5px"}
          >
            <FontAwesomeIcon icon={faWordpressSimple} />
            <span style={{ display: "flex", alignItems: "center" }}>
              English (US)
              <Image src="/icons8-triangle-arrow-24 (2).png" />
            </span>
          </Button>
          <Box>
            <Popover
              placement="bottom-end"
              isOpen={openPopover}
              onClose={closePopover}
            >
              <PopoverTrigger>
                <CloseButton onClick={togglePopover} />
              </PopoverTrigger>
              <PopoverContent
                sx={{
                  boxShadow: "0 4px 29px 3px rgba(0, 0, 0, .4)",
                  mt: "-10px",
                }}
              >
                <PopoverHeader
                  fontWeight={500}
                  border={"none"}
                  textAlign={"center"}
                  color={"#1f2428"}
                  className="roboto"
                  fontSize={"19px"}
                  mt={"10px"}
                >
                  Are you sure you want to close?
                </PopoverHeader>
                <PopoverArrow />
                <PopoverBody mt={"-10px"}>
                  <Text
                    className="roboto"
                    color={"#697886"}
                    mb={"10px"}
                    textAlign={"center"}
                    fontSize={"13px"}
                    letterSpacing={"0.01em"}
                    lineHeight={1.2}
                  >
                    You will lose any information that you've filled in.
                  </Text>
                  <Box display={"flex"} gap={"10px"} mb={"10px"}>
                    <Button
                      _hover={{
                        bgColor: "rgb(6, 80, 150)",
                      }}
                      textAlign={"center"}
                      className="roboto"
                      color={"#FFF"}
                      bgColor={"#0a6ece"}
                      fontSize={"13px"}
                      fontWeight={700}
                      h={"33px"}
                      minW={"140px"}
                      onClick={() => {
                        onClose();
                        closePopover();
                      }}
                    >
                      Leave checkout
                    </Button>
                    <Button
                      textAlign={"center"}
                      className="roboto"
                      fontSize={"13px"}
                      fontWeight={700}
                      h={"33px"}
                      minW={"140px"}
                      onClick={closePopover}
                    >
                      Stay
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <>{showlist ? <BookingListEvent /> : <BookingEventDetail />}</>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
