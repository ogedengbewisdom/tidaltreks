import { Box, Text } from "@chakra-ui/react";

interface ButtonsProps {
  color?: string;
  title?: string;
  bgColor?: string;
  hbgColor?: string;
}
const Button: React.FC<ButtonsProps> = (props) => {
  return (
    <Box
      as={"button"}
      bgColor={props.bgColor ? props.bgColor : "#000"}
      px={"20px"}
      h={"45px"}
      display={"flex"}
      alignItems={"center"}
      gapX={"10px"}
      color={"#A89252"}
      _hover={{
        bgColor: "#A89252",
        color: `${props.hbgColor ? props.hbgColor : "#FFF"}`,
      }}
      transition="0.5s ease-in-out"
    >
      <Text
        fontSize={{ base: "13px", "2xl": "14px" }}
        fontWeight={400}
        color={props.color ? props.color : "#FFF"}
        letterSpacing={"0.095"}
        textTransform={"uppercase"}
      >
        {props.title ? props.title : "view Route"}
      </Text>
      <Box fontSize={"26px"} fontWeight={600}>
        {">"}
      </Box>
    </Box>
  );
};

export default Button;
