import React, { useState } from 'react'

interface CustomSearchBarProps{
  placeholderText?: string
  onQuery: (query: string) => void;
}

export const CustomSearchBar = ({placeholderText = 'Buscar', onQuery}: CustomSearchBarProps) => {
  
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onQuery(query)
    setQuery('')
  }
  
  return (
    <div className="search-container">
      <input
        type="text" placeholder={placeholderText}
        value={query}
        onChange={(event) => setQuery(event.target.value)}

        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch()
          }
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
