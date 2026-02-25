import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { CustomPreviousSearches } from './gifs/components/CustomPreviousSearches'
import { GifsList } from './gifs/components/GifsList'

export const GifsApp = () => {

    const [previousSearches, setPreviousSearches] = useState(['spiderman'])

    const handlePreviousSearchClick = (term: string) => {
        console.log({term});
    }

    const handleSearch = (query: string) => {
        console.log(query);
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
            <GifsList gifs={mockGifs}/>
        </>
  )
}
