import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BLOGPOST, formatSpecificDate, LINKS } from "../utils/formatDate";

const Blog = () => {
  return (
    <Box py={{ base: "3rem", md: "4rem" }}>
      <Box
        marginX={{ md: "auto" }}
        maxW={{ md: "730px", lg: "940px", xl: "1150px", "2xl": "1200px" }}
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={{ base: "2rem", lg: "1rem" }}
        px={{ base: "1rem", sm: "1.3rem" }}
      >
        <Box display={"flex"} flexDir={"column"} gap={"20px"}>
          {BLOGPOST.map((blog, index) => {
            let convertStringToArray = blog.description.split(" ");
            let description = blog.description;
            if (convertStringToArray.length > 10) {
              convertStringToArray = convertStringToArray.slice(0, 10);
              description = convertStringToArray.join(" ") + " ...";
            }

            const formattedDate = formatSpecificDate(blog.date, "long");

            return (
              <Box
                key={index}
                display={"flex"}
                gap={"1rem"}
                bgColor={"#e0e0e0"}
                p={"36px"}
                borderRadius={"6px"}
                borderBottom={"4px solid #A89252"}
              >
                <Box
                  display={{ base: "none", md: "block" }}
                  w={{ md: "161.5px" }}
                  h={{ md: "110.66px" }}
                >
                  <Image
                    src={blog.src}
                    alt={blog.title}
                    w={"100%"}
                    h={"100%"}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  gap={"20px"}
                  py={"0.5rem"}
                >
                  <Heading
                    textTransform={"uppercase"}
                    color={"rgb(74, 73, 74)"}
                    fontSize={{ base: "24px" }}
                    fontWeight={500}
                    lineHeight={"30px"}
                    textAlign={"left"}
                  >
                    {blog.title}
                  </Heading>
                  <Text
                    fontWeight={700}
                    lineHeight={"30px"}
                    textAlign={"left"}
                    fontSize={"13px"}
                  >
                    {formattedDate.day} {formattedDate.month}{" "}
                    {formattedDate.year}
                  </Text>
                  <Text
                    lineHeight={"30px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                  >
                    {description}
                  </Text>
                  <Link to={`/blog/${blog.title.replace(/\s+/g, "-")}`}>
                    <Button
                      bgColor={"transparent"}
                      borderRadius={"6px"}
                      border={"1px solid rgb(0,0,0)"}
                      fontSize={"14px"}
                      color={"rgb(74,73,74)"}
                      className="montserrat"
                      _hover={{
                        color: "#FFF",
                        bgColor: "#000",
                      }}
                    >
                      View Article
                    </Button>
                  </Link>
                </Box>
              </Box>
            );
          })}
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
            ml={{ base: "-1rem", lg: "-2rem" }}
            mb={"20px"}
            whiteSpace={"nowrap"}
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
                  whiteSpace={"nowrap"}
                >
                  <Link to={list.link}> {list.title}</Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
