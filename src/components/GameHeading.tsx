import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading fontSize={"4xl"} paddingLeft={7} marginBottom={4} as="h1">
      {gameQuery.platform != null ? gameQuery.platform.name : null}{" "}
      {gameQuery.genre != null ? gameQuery.genre.name : null} Games
    </Heading>
  );
};

export default GameHeading;
