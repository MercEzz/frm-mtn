import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { initialTabs as tabs } from "./Ingredients";

const MotionBox = motion(Box);

const AniTabs = () => {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <MotionBox
      drag
      dragTransition={{
        min: 0,
        max: 100,
      }}
      w="480px"
      h="360px"
      borderRadius="10px"
      bg="white"
      overflow="hidden"
      boxShadow="0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);"
      display="flex"
      flexDir="column"
    >
      <Box
        as="nav"
        bg="#fdfdfd"
        p="5px 5px 0"
        borderRadius="10px"
        borderBottomLeftRadius="0"
        borderBottomRightRadius="0"
        borderBottom="1px solid #eeeeee"
        h="44px"
      >
        <UnorderedList
          listStyle="none"
          p="0"
          m="0"
          fontFamily="heading"
          fontWeight="500"
          fontSize="14px"
          display="flex"
          w="100%"
        >
          {tabs.map((item) => (
            <ListItem
              borderRadius="5px"
              borderBottomLeftRadius="0"
              borderBottomRightRadius="0"
              w="100%"
              p="10px 15px"
              position="relative"
              cursor="pointer"
              h="35px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bg={item === selectedTab ? "#eee" : "white"}
              flex="1"
              minW="0"
              key={item.label}
              onClick={() => {
                setSelectedTab(item);
              }}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <MotionBox
                  position="absolute"
                  bottom="-1px"
                  left="0"
                  right="0"
                  height="1px"
                  bg="#8855ff"
                  layoutId="underline"
                />
              ) : null}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box
        as="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="128px"
        flexGrow="1"
      >
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </MotionBox>
  );
};

export default AniTabs;
