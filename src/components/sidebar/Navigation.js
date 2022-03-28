import { UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

import MenuItem from "./MenuItem";

const MotionUl = motion(UnorderedList);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  return (
    <MotionUl
      variants={variants}
      p="25px"
      positon="absolute"
      top="100px"
      width="230px"
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </MotionUl>
  );
};

const itemIds = [0, 1, 2, 3, 4];

export default Navigation;
