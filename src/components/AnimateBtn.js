import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const AnimateBtn = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
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
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default AnimateBtn;
