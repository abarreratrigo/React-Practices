import { type FC } from 'react'

interface PreviousSearchesProps{
  searches: string[];
  onLabelClick: (term:string) => void;
}

export const CustomPreviousSearches: FC<PreviousSearchesProps> = ({searches, onLabelClick}) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
        <ul className='previous-searches-list'>
          {
            searches.map(term => (
              <li key={term} onClick={() => onLabelClick(term)}
              >{term}
              </li>
            ))
          }
        </ul>  
    </div>
  )
}
