import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGif = () => {

    const [gifs, setGifs] = useState<Gif[]>([])

    const [previousSearches, setPreviousSearches] = useState<string[]>([])

    const handlePreviousSearchClick = (term: string) => {
        console.log({term});
    }

    const handleSearch = async(query: string = '') => {

        query = query.trim().toLowerCase();

        //Validate query isn't null
        if (query.length === 0) return;

        //Evitate duplicates searches
        if (previousSearches.includes(query)) return;

        //Update previous searches (max. 8 elements)
        setPreviousSearches([query, ...previousSearches].slice(0, 7));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs)
    }

    return {
        //Properties
        gifs,
        previousSearches,
        
        //Methods/actions
        handlePreviousSearchClick,
        handleSearch
    }
}
