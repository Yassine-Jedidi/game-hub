import { Image, Text } from "@chakra-ui/react";
import useGames from "../hooks/UseGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text color="#E53E3E">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
