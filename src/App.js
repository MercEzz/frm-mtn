import { Box } from "@chakra-ui/react";

import AnimateBtn from "./components/AnimateBtn";
import AniTabs from "./components/AniTabs";
import Scaling from "./components/Scaling";

const App = () => {
  return (
    <Box
      as="body"
      minH="100vh"
      p="0"
      m="0"
      boxSizing="border-box"
      bgGradient={"linear(250deg,#7b2ff7, #f107a3)"}
      overflow="hidden"
      display="flex"
      bgRepeat="no-repeat"
      justifyContent="center"
      alignItems="center"
    >
      {/* <AnimateBtn /> */}
      <AniTabs />
    </Box>
  );
};

export default App;
