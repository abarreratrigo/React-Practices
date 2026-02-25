import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'

export const GifsApp = () => {
    return (
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de gifs"
                description="Descubre y comparte el Gif perfecto" />

            {/*SearchBar*/}
            <CustomSearchBar placeholderText='Buscar GIFs'/>

            {/*Previous searches*/}
            <PreviousSearches/>

            {/*Gifs*/}
            <GifsList gifs={mockGifs}/>
        </>
  )
}
