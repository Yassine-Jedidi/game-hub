import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pic.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={10} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
