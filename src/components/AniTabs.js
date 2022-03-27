import { Box } from "@chakra-ui/react";

const AniTabs = () => {
  return (
    <Box
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
    ></Box>
  );
};

export default AniTabs;
