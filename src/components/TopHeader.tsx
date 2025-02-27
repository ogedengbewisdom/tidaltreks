import { Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { Link } from "react-router-dom";

const TopHeader: React.FC = () => {
  const phoneNumber = "07368 536127";
  const email = "tidaltreks@gmail.co.uk";

  return (
    <>
      <Box bgColor={"#000000"} color={"#FFF"}>
        <Flex
          h={"40px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          fontSize={{ base: "13px" }}
          fontWeight={400}
          maxW={{ "2xl": "1176px" }}
          marginX={{ xl: "auto" }}
          paddingX={{ base: "4px", lg: "30px", xl: "50px", "2xl": "0px" }}
        >
          <Box display={{ base: "block", md: "none" }}></Box>
          <Box
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            gap={"33px"}
          >
            <Box>Call {phoneNumber}</Box>
            <Box letterSpacing={"0.0919px"}>Email: {email}</Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"30px"}
            w={"181.95px"}
          >
            <Box whiteSpace={"nowrap"}>Contact Us {"»"}</Box>
            <Flex gap={"10px"} w={"69.08px"}>
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#A89252"
                  width={12.08}
                  height={13}
                />
              </Link>
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color="#A89252"
                  width={7.44}
                  height={13}
                />
              </Link>
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  color="#A89252"
                  width={20}
                />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TopHeader;
