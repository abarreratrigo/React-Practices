import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { CustomPreviousSearches } from './gifs/components/CustomPreviousSearches'
import { GifsList } from './gifs/components/GifsList'
import { useGif } from './gifs/hooks/useGif'

export const GifsApp = () => {
    
    const { gifs,previousSearches, handlePreviousSearchClick, handleSearch } = useGif()
    
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
