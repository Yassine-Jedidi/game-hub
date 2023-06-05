
import { Genre } from "./UseGenres";
import useData from "./UseData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}


const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>("/games");
};

export default useGames;
