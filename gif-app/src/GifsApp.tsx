import { useState } from 'react'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { CustomPreviousSearches } from './gifs/components/CustomPreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {

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

    return (
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de gifs"
                description="Descubre y comparte el Gif perfecto" />

            {/*SearchBar*/}
            <CustomSearchBar placeholderText='Buscar GIFs'
                onQuery={handleSearch} />

            {/*Previous searches*/}
            <CustomPreviousSearches searches={previousSearches}
                onLabelClick={handlePreviousSearchClick} />

            {/*Gifs*/}
            <GifsList gifs={gifs}/>
        </>
  )
}
