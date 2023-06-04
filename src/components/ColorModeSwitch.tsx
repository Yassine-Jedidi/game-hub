import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon, BsMoonFill, BsSunFill } from "react-icons/bs";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
      {colorMode == "dark" ? <BsMoonFill /> : <BsSunFill />}
    </HStack>
  );
};

export default ColorModeSwitch;
