import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pic.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={10} />
      <Text fontSize="3xl">Designed for Hendouda</Text>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
