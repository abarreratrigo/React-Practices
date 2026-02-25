import type { FC } from 'react'
import type { Gif } from '../../mock-data/gifs.mock'

interface GifsListProps{
    gifs: Gif[]
}

//This time I've used a Functional Component in order to use the Props
//that I've defined previously 
export const GifsList: FC<GifsListProps> = ({gifs}) => {
    return (
      <div className="gifs-container">
        {
            gifs.map((gif) => (
                <div key={gif.id} className='gif-card'>
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p>
                        {gif.width}x{gif.height} (1.5mb)
                    </p>
               </div> 
            ))
        }
        </div>
  )
}
