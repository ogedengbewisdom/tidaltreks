import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatSpecificDate, LINKS } from "../utils/formatDate";
import Advert from "./Advert";

const BlogDetail: React.FC<any> = (props) => {
  const formattedDate = formatSpecificDate(props.data.date, "long");
  return (
    <>
      <Box mt={"8rem"}>
        <Box
          maxW={{ lg: "940px", xl: "1150px", "2xl": "1200px" }}
          marginX={{ md: "auto" }}
          display={"flex"}
          justifyContent={"space-between"}
          gap={{ base: "2rem", md: "1rem" }}
          flexDir={{ base: "column", md: "row" }}
          px={{ base: "1rem", sm: "1.5rem" }}
          py={{ base: "3rem", md: "4rem" }}
        >
          <Box
            maxW={{ md: "500px", lg: "700px", xl: "822px" }}
            // p={"36px"}
            borderRadius={"6px"}
            borderBottom={"4px solid #A89252"}
          >
            <Text lineHeight={"30px"} textAlign={"justify"} fontSize={"16px"}>
              {props.data.description}
            </Text>
            <Text
              fontWeight={700}
              lineHeight={"30px"}
              textAlign={"left"}
              fontSize={"13px"}
              my={"36px"}
            >
              {formattedDate.day} {formattedDate.month} {formattedDate.year}
            </Text>
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
      <Advert />
    </>
  );
};

export default BlogDetail;
