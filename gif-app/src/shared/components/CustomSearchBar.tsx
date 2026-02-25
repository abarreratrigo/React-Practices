import { useEffect, useState } from 'react'

interface CustomSearchBarProps{
  placeholderText?: string
  onQuery: (query: string) => void;
}

export const CustomSearchBar = ({placeholderText = 'Buscar', onQuery}: CustomSearchBarProps) => {
  
  const [query, setQuery] = useState('')

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      onQuery(query)
    },700)

    return () => {
      clearTimeout(timeoutId)
    };

  }, [query, onQuery])

  const handleSearch = () => {
    onQuery(query)
    setQuery('')
  }

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) =>{
     if (event.key === "Enter") {
            handleSearch()
          }
  }
  
  return (
    <div className="search-container">
      <input
        type="text" placeholder={placeholderText}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleEnterKey}

      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
