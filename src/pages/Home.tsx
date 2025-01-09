import { Box } from "@chakra-ui/react";
import Events from "../screens/Events";

const HomePage: React.FC = () => {
  return (
    <Box paddingTop={{ base: "20px", lg: "70px" }}>
      <Events />
    </Box>
  );
};

export default HomePage;
