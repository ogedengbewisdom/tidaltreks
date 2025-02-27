import {
  Box,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { EVENTACTIVITYLINK, LINKS } from "../utils/formatDate";
import { Link, useNavigate } from "react-router-dom";
import EventActivity from "../components/EventActivity";

const Menus = () => {
  const navigate = useNavigate();
  // const ACTIVITYNAME = Object.keys(EVENTACTIVITYLINK[0]);
  const navigateHandler = (link: string) => {
    navigate(link);
  };

  return (
    <>
      <Box
        mt={{ base: "20px", md: "70px" }}
        marginX={{ md: "auto" }}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
        // pb={{ base: "70px" }}
      >
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          px={{ base: "1rem", md: "0px" }}
          gap={"20px"}
        >
          <Box>
            <Box>
              <Heading
                as={"h2"}
                textTransform={"uppercase"}
                textAlign={"left"}
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={500}
                color={"rgb(74, 73, 74)"}
                lineHeight={{ base: "30px" }}
                marginTop={{ xl: "19px" }}
                className="montserrat"
              >
                Sunday Lunch menu
              </Heading>
              <Heading as={"h4"} fontSize={"16px"} my={"20px"}>
                <em>
                  <strong>Main Courses</strong>
                </em>
              </Heading>
              <Box
                fontSize={"14px"}
                color={"rgb(74, 73, 74)"}
                className="montserrat"
                fontWeight={400}
              >
                <Text>
                  <strong>Roast Chicken</strong> freshly cooked with Yorkshire
                  puddings, sage & onion stuffing, roast potatoes, gravy and a
                  choice of two veg
                </Text>
                <Text>
                  <strong>Roast Beef</strong> freshly cooked with Yorkshire
                  pudding, sage & onion stuffing, roast potatoes, gravy and a
                  choice of two veg
                </Text>
                <Text>
                  <strong>Nut Roast (v/vegan)</strong> with cashews and
                  cranberrys served with new potatoes, veg and vegan gravy
                </Text>
              </Box>
              <Text
                mt={"15px"}
                mb={"10px"}
                fontSize={"14px"}
                fontWeight={400}
                color={"rgb(74, 73, 74)"}
                className="montserrat"
              >
                <em>
                  All our food is freshly sourced on the day then cooked and
                  prepared on board.
                </em>
              </Text>
              <hr />
              <Box>
                <Heading as={"h4"} fontSize={"16px"} my={"20px"}>
                  <em>
                    <strong>Desert</strong>
                  </em>
                </Heading>
                <Box
                  fontSize={"14px"}
                  color={"rgb(74, 73, 74)"}
                  className="montserrat"
                  fontWeight={400}
                >
                  <Text>
                    <strong>Choc Fudge Cake</strong> – A hedonistic rich dessert
                    topped with thick Cream
                  </Text>
                  <Text>
                    <strong>Apple Pie</strong> – Traditional Homemade pie served
                    piping hot smothered in creamy Custard
                  </Text>
                  <Text>
                    <strong>Fresh Mixed Fruit</strong> – A vegan friendly sweet
                    treat
                  </Text>
                </Box>
              </Box>
            </Box>
            {/* EVENING CRUIS */}
            <Box mt={"4rem"}>
              <Heading
                as={"h2"}
                textTransform={"uppercase"}
                textAlign={"left"}
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={500}
                color={"rgb(74, 73, 74)"}
                lineHeight={{ base: "30px" }}
                marginTop={{ xl: "19px" }}
                className="montserrat"
              >
                Evening Dinner Menu
              </Heading>
              <Heading as={"h4"} fontSize={"16px"} my={"20px"}>
                <em>
                  <strong>Main Courses</strong>
                </em>
              </Heading>
              <Box
                fontSize={"14px"}
                color={"rgb(74, 73, 74)"}
                className="montserrat"
                fontWeight={400}
              >
                <Text>
                  <strong>Chicken</strong> stuffed with a tangy Blue Stilton
                  Cheese and topped with a delicious Mushroom Sauce
                </Text>
                <Text>
                  <strong>Lamb Shank</strong> tender British Meat accompanied
                  with a traditional Mint Sauce
                </Text>
                <Text>
                  <strong>Salmon</strong> poached to perfection and topped with
                  a delicate Hollandaise Sauce
                </Text>
                <Text>
                  <strong>Spinach Pasta</strong> with a delicious tomato and
                  basil sauce
                </Text>
                <Text>
                  <strong>Nut Roast (v/vegan)</strong> with cashews and
                  cranberrys served with new potatoes, veg and vegan gravy
                </Text>
                <Text my={"20px"}>
                  <strong>Optional Children’s Menu</strong>
                  <br />
                  Chicken Nuggets & Chips
                </Text>
              </Box>
              <Text
                mt={"15px"}
                mb={"10px"}
                fontSize={"14px"}
                fontWeight={400}
                color={"rgb(74, 73, 74)"}
                className="montserrat"
              >
                <em>
                  Each main course comes with new potatoes and a selection of
                  fresh veg.
                </em>
                <br />
                <em>
                  All our food is freshly sourced on the day then cooked and
                  prepared on board.
                </em>
              </Text>
              <hr />
              <Box>
                <Heading as={"h4"} fontSize={"16px"} my={"20px"}>
                  <em>
                    <strong>Desert</strong>
                  </em>
                </Heading>
                <Box
                  fontSize={"14px"}
                  color={"rgb(74, 73, 74)"}
                  className="montserrat"
                  fontWeight={400}
                >
                  <Text>
                    <strong>Choc Fudge Cake</strong> – A hedonistic rich dessert
                    topped with thick Cream
                  </Text>
                  <Text>
                    <strong>Apple Pie</strong> – Traditional Homemade pie served
                    piping hot smothered in creamy Custard
                  </Text>
                  <Text>
                    <strong>Fresh Mixed Fruit</strong> – A vegan friendly sweet
                    treat
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box px={{ base: "1rem", lg: "0rem" }}>
            <Heading
              as={"h3"}
              fontSize={"24px"}
              fontWeight={500}
              className="montserrat"
              textTransform={"uppercase"}
              color={"rgb(74, 73, 74)"}
              // textAlign={"center"}
              ml={{ base: "-1rem", md: "-2rem" }}
              mb={"20px"}
            >
              SITE LINKS
            </Heading>
            <List listStyleType={"initial"} color={"rgb(74, 73, 74)"}>
              {LINKS.map((list, index) => {
                return (
                  <ListItem
                    key={index}
                    color={"rgb(74, 73, 74)"}
                    fontSize={"14px"}
                    fontWeight={400}
                    className="montserrat"
                    // textAlign={"left"}
                  >
                    <Link to={list.link}> {list.title}</Link>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Box>
      <Box
        mt={{ base: "20px", md: "70px" }}
        bgColor={"#E0E0E0"}
        py={{ base: "70px" }}
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
        <Box
          marginX={{ md: "auto" }}
          maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
        >
          <SimpleGrid
            display={{ base: "grid", md: "grid" }}
            columns={{ base: 1, md: 3 }}
            gap={{ base: "15px", md: "18px", lg: "20px", xl: "30px" }}
            paddingX={{ base: "1rem", "2xl": "1rem" }}
            mt={"58px"}
          >
            {EVENTACTIVITYLINK.map((item, index) => {
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

export default Menus;
