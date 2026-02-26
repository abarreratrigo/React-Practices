import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";


    // const gifsCache: Record<string, Gif[]> = {};

export const useGif = () => {

    const [gifs, setGifs] = useState<Gif[]>([])

    const [previousSearches, setPreviousSearches] = useState<string[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handlePreviousSearchClick = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return
        }

        const gifs = await getGifsByQuery(term)
        setGifs(gifs)
    };

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

        gifsCache.current[query] = gifs
        console.log(gifsCache);
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
