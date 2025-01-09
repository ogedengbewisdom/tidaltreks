import { Box, Image, Text } from "@chakra-ui/react";
import { formatSpecificDate, LATESTPOST } from "../utils/formatDate";

//  const specificDate = new Date(2022, 1, 10);
const SocialEvents = () => {
  return (
    <Box
      paddingX={{ base: "1rem", lg: "0rem" }}
      display={"flex"}
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: "50px", lg: "25px" }}
      // justifyContent={"space-between"}
      // gap={{ lg: "25px" }}
    >
      <Box
        w={{ base: "100%", lg: "368px" }}
        h={{ md: "480px" }}
        boxShadow={"0 0 4px 1px #d0d0d0"}
        boxSizing={"border-box"}
        borderBottom={"4px solid #a89252"}
        py={"40px"}
        px={"28px"}
      >
        <Text
          textAlign={"center"}
          fontWeight={600}
          fontSize={"24px"}
          color={"#4a494a"}
          textTransform={"uppercase"}
        >
          latest news
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          mt={"30px"}
          maxH={"320px"}
          overflowY={"auto"}
        >
          {LATESTPOST.map((post, index) => {
            const postDateObject = new Date(
              post.date.year,
              post.date.month - 1,
              post.date.day
            );
            const postDate = formatSpecificDate(postDateObject);
            return (
              <Box
                display={"flex"}
                borderBottom={"2px solid #eaeaea"}
                pb={{ base: "20px", md: "10px" }}
                pt={{ base: "20px", md: "0px" }}
                key={index}
              >
                <Box
                  display={{ base: "none", md: "flex" }}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    w={"48px"}
                    h={"46px"}
                    bgColor={"#a89252"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Text color={"#FFF"} fontSize={"18px"} fontWeight={600}>
                      {postDate.day}
                    </Text>
                  </Box>
                  <Text fontSize={"15px"} fontWeight={400}>
                    {postDate.month}
                  </Text>
                </Box>
                <Box margin={"7px 10px 3px"} color={"#4a494a"}>
                  <Text fontSize={"15px"} fontWeight={600}>
                    {post.title}
                  </Text>
                  <Text fontSize={"15px"} fontWeight={400}>
                    {post.content}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* twitter post */}

      <Box
        w={{ base: "100%", lg: "368px" }}
        h={{ base: "480px" }}
        boxShadow={"0 0 4px 1px #d0d0d0"}
        boxSizing={"border-box"}
        borderBottom={"4px solid #a89252"}
        py={"40px"}
        px={"28px"}
      >
        <Text
          textAlign={"center"}
          fontWeight={600}
          fontSize={"24px"}
          color={"#4a494a"}
          textTransform={"uppercase"}
        >
          twitter
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          mt={"30px"}
          maxH={"320px"}
          overflowY={"auto"}
        >
          <Box display={"flex"} pb={{ base: "10px", md: "10px" }}>
            <Box>
              <Text textAlign={"center"} color={"#4a494a"}>
                Twitter feed is not available at the moment.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* face book post */}

      <Box
        w={{ base: "100%", lg: "368px" }}
        h={{ base: "480px" }}
        boxShadow={"0 0 4px 1px #d0d0d0"}
        boxSizing={"border-box"}
        borderBottom={"4px solid #a89252"}
        py={"40px"}
        px={"28px"}
      >
        <Text
          textAlign={"center"}
          fontWeight={600}
          fontSize={"24px"}
          color={"#4a494a"}
          textTransform={"uppercase"}
        >
          facebook
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          mt={"30px"}
          maxH={"320px"}
          overflowY={"auto"}
          gap={"20px"}
        >
          {/* one */}
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Box w={"40px"} h={"40px"} borderRadius={"50%"} bgColor={"black"}>
              <Image src="/cff-avatar.png" w={"100%"} borderRadius={"50%"} />
            </Box>
            <Box>
              <Text fontWeight={700} color={"#4a494a"} fontSize={"14px"}>
                The Floating Grace
              </Text>
              <Text fontWeight={400} color={"#9197a3"} fontSize={"11px"}>
                18 hours ago
              </Text>
            </Box>
          </Box>
          {/* two */}
          <Box>
            <Text color={"#4a494a"} fontSize={"16px"}>
              Only hours to go before we welcome in a whole new year and a whole
              new era... or it can be. Start as you mean to go on by ensuring
              you reward yourself for even the smallest of achievements, and
              treat yourself to one of our regular cruises on The Floating Grace
              Or call 07540 373838 or email bookings@floatinggrace.co.u
            </Text>
          </Box>
          {/* three */}
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialEvents;
