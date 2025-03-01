import {
  Box,
  ListItem,
  OrderedList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import InputText from "../components/Input";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";

const BOOKINGPROCESS = [
  "Complete the quote form",
  "A member of our team will contact you within 2 days",
  "Confirm your exact requirements",
  "Pay 20% deposit to confirm booking",
  "Turn up and enjoy!",
];
const RequestForm = () => {
  return (
    <Box
      bgColor={"#E0E0E0"}
      py={{ base: "50px", md: "100px" }}
      className="montserrat"
    >
      <Box
        marginX={{ md: "auto" }}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"20px"}
          px={{ base: "1rem", sm: "1.3rem", md: "0rem" }}
        >
          <form>
            <Box display={"flex"} flexDir={"column"} gap={"30px"}>
              <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box
                  minW={{ base: "100%", md: "484px", lg: "700px", xl: "858px" }}
                  bgColor={"#FFF"}
                  padding={"34px 25px"}
                  display={"flex"}
                  flexDir={"column"}
                  gap={"20px"}
                >
                  <Text
                    as={"h3"}
                    fontSize={"26px"}
                    lineHeight={"28px"}
                    fontWeight={600}
                    textTransform={"uppercase"}
                  >
                    1) Contact Details
                  </Text>
                  <InputText placeholder="Full Name*" type="text" />
                  <Box display={"flex"} gap={"10px"}>
                    <InputText placeholder="Phone Number*" type="text" />
                    <InputText placeholder="Email Address*" type="text" />
                  </Box>
                </Box>
              </Box>

              <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box
                  minW={{ base: "100%", lg: "700px", xl: "858px" }}
                  bgColor={"#FFF"}
                  padding={"34px 25px"}
                  display={"flex"}
                  flexDir={"column"}
                  gap={"20px"}
                >
                  <Text
                    as={"h3"}
                    fontSize={"26px"}
                    lineHeight={"28px"}
                    fontWeight={600}
                    textTransform={"uppercase"}
                  >
                    2) Event Details
                  </Text>
                  <Box display={"flex"} w={"100%"} ml={"-5px"}>
                    <SelectInput
                      placeholder="No.Guests Attending*"
                      options={["0-50", "50-100", "100-200", "200-250", "250+"]}
                    />
                    <SelectInput
                      placeholder="Start Time Of Event*"
                      options={["Afternoon", "Evening"]}
                    />
                  </Box>
                  <Box display={"flex"} w={"49%"}>
                    <InputText placeholder="" type="date" />
                  </Box>
                </Box>
              </Box>

              <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box
                  minW={{ base: "100%", lg: "700px", xl: "858px" }}
                  bgColor={"#FFF"}
                  padding={"34px 25px"}
                  display={"flex"}
                  flexDir={"column"}
                  gap={"20px"}
                >
                  <Text
                    as={"h3"}
                    fontSize={"26px"}
                    lineHeight={"28px"}
                    fontWeight={600}
                    textTransform={"uppercase"}
                  >
                    3) Additional Requirements
                  </Text>
                  <Box display={"flex"} w={"100%"} ml={"-5px"}>
                    <SelectInput
                      placeholder="Decorations?"
                      options={["Yes", "No"]}
                    />
                    <SelectInput
                      placeholder="Catering?"
                      options={["Yes", "No"]}
                    />
                  </Box>

                  <Box display={"flex"} w={"100%"} ml={"-5px"}>
                    <SelectInput
                      placeholder="Music/Entertainment?"
                      options={["Yes", "No"]}
                    />
                    <SelectInput
                      placeholder="Audio/Visual Equipment?"
                      options={["Yes", "No"]}
                    />
                  </Box>
                </Box>
              </Box>

              <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box
                  minW={{ base: "100%", lg: "700px", xl: "858px" }}
                  bgColor={"#FFF"}
                  padding={"34px 25px"}
                  display={"flex"}
                  flexDir={"column"}
                  gap={"20px"}
                >
                  <Text
                    as={"h3"}
                    fontSize={"26px"}
                    lineHeight={"28px"}
                    fontWeight={600}
                    textTransform={"uppercase"}
                  >
                    4) Comments
                  </Text>
                  <Box display={"flex"} w={"100%"}>
                    <Textarea
                      placeholder="Please feel free to tell us more about your event... (max 254 characters)"
                      size="sm"
                      resize="none"
                      padding={"8px"}
                      bgColor={"#e2e2e2"}
                      border={"1px solid #a9a9a9"}
                      fontSize={"14px"}
                      borderRadius={"2px"}
                      _focus={{ border: "none" }}
                      maxLength={256}
                      h={"198px"}
                      lineHeight={"16px"}
                    />
                  </Box>
                  <Box w={"183px"}>
                    <Button title="REQUEST QUOTE" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </form>
          <Box
            minW={{ base: "100%", md: "232px", lg: "220px", xl: "270px" }}
            bgColor={"#FFF"}
            p={"25px"}
            alignSelf={"flex-start"}
            mt={{ base: "25px", md: "0px" }}
            // mb={{ base: "45px" }}
          >
            <Text
              as={"h3"}
              fontSize={"22px"}
              fontWeight={600}
              textAlign={"center"}
              lineHeight={"28px"}
              textTransform={"uppercase"}
              className="montserrat"
              //   margin={"2px 0 22px"}
            >
              Booking <br /> Process
            </Text>
            <OrderedList
              p={"18px 0 0 18px"}
              display={"flex"}
              flexDir={"column"}
              gap={"10px"}
              color={"#4a494a"}
            >
              {BOOKINGPROCESS.map((process, index) => (
                <ListItem fontSize={"14px"} key={index}>
                  {process}
                </ListItem>
              ))}
            </OrderedList>
            <Text
              fontSize={"15px"}
              lineHeight={"22px"}
              color={"#4a494a"}
              mt={"20px"}
            >
              <strong>We aim to respond to all enquiries within 2 days.</strong>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestForm;
