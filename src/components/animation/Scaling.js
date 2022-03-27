import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Scaling = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionBox
      bg="white"
      w={isOpen ? "400px" : "100px"}
      h={isOpen ? "200px" : "100px"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      layout
      value={isOpen}
      initial={{ borderRadius: 50 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <MotionBox w="40px" h="40px" layout bg="#f107a3" borderRadius="50px" />
    </MotionBox>
  );
};

export default Scaling;
