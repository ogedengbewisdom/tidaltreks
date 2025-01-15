import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatSpecificDate, LATESTPOST } from "../utils/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
const WEBSITELINKS = [
  { title: "home", link: "/" },
  { title: "book a cruise", link: "/" },
  { title: "menus", link: "/" },
  { title: "private events", link: "/" },
  { title: "route map", link: "/" },
  { title: "gallery", link: "/" },
  { title: "blog", link: "/" },
  { title: "contact us", link: "/" },
  { title: "privacy policy", link: "/" },
];

const GENERATELINKS = [
  { title: "Call 07368 536127", src: "/304080.png" },
  { title: "Send Us An Email »", src: "/icons8-message-24.png" },
  {
    title: `Albert Dock, Salthouse
    Quay, Liverpool, L3 4AE`,
    src: "/icons8-location-50.png",
  },
];
const Footer: React.FC = () => {
  return (
    <Box bgColor={"#000"} className="Montserrat">
      <Box
        maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
        marginX={{ md: "auto" }}
        pt={{ base: "70px", md: "76pxpx" }}
        pb={{ base: "50px", md: "76px" }}
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={"40px"}
        px={{ base: "0.8rem", sm: "1rem", lg: "0rem" }}
      >
        {/* website links */}
        <Box color={"#FFF"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"22px"}
            mb={"30px"}
            fontWeight={500}
            className="Montserrat"
          >
            website links
          </Heading>
          <List display={"flex"} flexDir={"column"} gap={"5px"}>
            {WEBSITELINKS.map((website, index) => {
              return (
                <Link to={website.link} key={index}>
                  <ListItem
                    fontSize={"14px"}
                    fontWeight={500}
                    // listStyle={"none"}
                    textTransform={"capitalize"}
                    _hover={{
                      color: "#A89252",
                    }}
                    // letterSpacing={"0.099px"}
                    transition="0.3s ease-in-out"
                  >
                    {website.title}
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
        {/* Get in touch */}
        <Box color={"#FFF"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"22px"}
            mb={"30px"}
            className="Montserrat"
            fontWeight={500}
          >
            Get in touch
          </Heading>

          <List display={"flex"} flexDir={"column"} gap={"30px"}>
            {GENERATELINKS.map((generate, index) => {
              return (
                <ListItem
                  key={index}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                >
                  <Box
                    bgColor={"#FFF"}
                    w={"24px"}
                    h={"24px"}
                    borderRadius={"50%"}
                  >
                    <Image src={generate.src} borderRadius={"50%"} />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={500}>
                    {generate.title}
                  </Text>
                </ListItem>
              );
            })}
            <Box w={{ base: "100%", md: "270px" }}>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"22px"}>
                Available for private bookings 7 days a week. For cruises please
                check online for availability by clicking "book now" on the{" "}
                <strong>book a cruise</strong> page.
              </Text>
            </Box>
          </List>
        </Box>
        {/* Latest news */}
        <Box color={"#FFF"} display={{ base: "none", md: "block" }}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"22px"}
            mb={"30px"}
            className="Montserrat"
            fontWeight={500}
          >
            latest news
          </Heading>
          <Box display={"flex"} flexDir={"column"} gap={"5px"}>
            {LATESTPOST.map((post, index) => {
              const postDateObject = new Date(
                post.date.year,
                post.date.month - 1,
                post.date.day
              );
              const postDate = formatSpecificDate(postDateObject);
              return (
                <Box display={"flex"} key={index}>
                  <Box color={"#FFF"}>
                    <Link to={"/"}>
                      <Text
                        _hover={{
                          color: "#A89252",
                        }}
                        // letterSpacing={"0.099px"}
                        transition="0.3s ease-in-out"
                        fontSize={"15px"}
                      >
                        <strong>{post.title}</strong>
                      </Text>
                    </Link>
                    <Text
                      fontSize={"13px"}
                    >{`${postDate.day} ${postDate.month} ${postDate.year}`}</Text>
                    <Link to={"/"}>
                      <Text
                        _hover={{
                          color: "#A89252",
                        }}
                        // letterSpacing={"0.099px"}
                        transition="0.3s ease-in-out"
                        fontSize={"15px"}
                        fontWeight={400}
                        fontStyle={"italic"}
                      >
                        {"News"}
                      </Text>
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* Socials */}
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="20px"
          py={{ base: "35px" }}
          className="Montserrat"
        >
          <Box w={"100px"} h={"100px"}>
            <Image src="/tidalTreksLogo.JPG" />
          </Box>
          <Box>
            <Text
              className="Montserrat"
              fontSize={"15px"}
              fontWeight={400}
              color={"#FFF"}
            >
              Tidal Treks
            </Text>
            <Flex gap={"10px"} justifyContent={"center"} mt={"15px"}>
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#A89252"
                  //   width={12.08}
                  //   height={13}
                />
              </Link>
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color="#A89252"
                  //   width={7.44}
                  //   height={13}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
