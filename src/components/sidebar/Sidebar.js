import { Box } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import { useEffect, useRef } from "react";
import MenuToggle from "./MenuToggle";

import Navigation from "./Navigation";

const MotionBox = motion(Box);

const bar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px  40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <MotionBox
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      positon="absolute"
      top="0"
      left="0"
      bottom="0"
      width="300px"
    >
      <MotionBox variants={bar} positon="absolute" top="0" background="#fff" />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </MotionBox>
  );
};

export default Sidebar;
