import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const AnimateBtn = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <Box
      as="body"
      minH="100vh"
      p="0"
      m="0"
      boxSizing="border-box"
      bgGradient={
        isOn
          ? "linear(250deg,#7b2ff7, #f107a3)"
          : "linear(250deg, #f107a3, #7b2ff7 )"
      }
      overflow="hidden"
      display="flex"
      bgRepeat="no-repeat"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        as="button"
        w="160px"
        h="100px"
        bgColor="rgba(255, 255, 255, 0.4)"
        value={isOn}
        onClick={toggleSwitch}
        display="flex"
        justifyContent={isOn ? "flex-end" : "flex-start"}
        borderRadius="50px"
        p="10px"
        cursor="pointer"
      >
        <MotionBox
          w="80px"
          h="80px"
          bgColor="white"
          borderRadius="40px"
          layout
          transition={spring}
        />
      </Box>
    </Box>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default AnimateBtn;
