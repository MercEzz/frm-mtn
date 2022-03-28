import { ListItem, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionLi = motion(ListItem);

const livariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }) => {
  return (
    <MotionLi
      variants={livariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      listStyle="none"
      mb="20px"
      display="flex"
      alignItems="center"
      cursor="pointer"
    >
      <Box
        w="40px"
        h="40px"
        borderRadius="50%"
        flex="40px 0"
        mr="20px"
        borderStyle="solid"
        borderWidth="2px"
        borderColor={`${colors[i]}`}
      />
      <Box
        borderRadius="5px"
        w="200px"
        h="20px"
        flex="1"
        borderStyle="solid"
        borderWidth="2px"
        borderColor={`${colors[i]}`}
      />
    </MotionLi>
  );
};

export default MenuItem;
