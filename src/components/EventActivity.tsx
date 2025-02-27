import { Box, Image, Text } from "@chakra-ui/react";

interface EventActivityProps {
  onClick: () => void;
  src: string | any;
  name: string;
}
const EventActivity: React.FC<EventActivityProps> = (props) => {
  return (
    <Box
      cursor={"pointer"}
      onClick={props.onClick}
      maxW={{ base: "100%", md: "368px" }}
      minW={{ md: "230px" }}
      display={{ base: "flex", md: "block" }}
    >
      {/* <Box w={"145px"}>
          <Image src={props.src} w={"145px"} h={"60px"} />
        </Box> */}
      <Image
        src={props.src}
        w={{ base: "15%", sm: "145px", md: "100%" }}
        h={{ md: "200px" }}
      />
      <Box
        w="100%"
        bgColor={"#000"}
        py={{ base: "13px" }}
        px={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          textTransform={"uppercase"}
          fontWeight={300}
          color={"rgb(255, 255, 255)"}
          fontSize={{ base: "13px", lg: "1rem" }}
          whiteSpace={"nowrap"}
        >
          {props.name}
        </Text>
        {/* <Box fontSize={"26px"} fontWeight={600} color="#A89252">
            {">"}
          </Box> */}
        <Box fontSize={"26px"} fontWeight={600} width={"25px"} height={"25px"}>
          <Image src="/icons8-greater-than-30.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default EventActivity;
