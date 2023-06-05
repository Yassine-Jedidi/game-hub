import useData from "./useData";
import { Platform } from "./useGames";
import platforms from "../data/platforms";

const usePlatform = () => {
    return {data:platforms,isLoading:false,error:null};
    }

export default usePlatform