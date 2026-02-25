import React from 'react'

interface CustomSearchBarProps{
  placeholderText?: string
}

export const CustomSearchBar = ({placeholderText = 'Buscar'}: CustomSearchBarProps) => {
  return (
    <div className="search-container">
        <input type="text" placeholder={placeholderText} />
        <button>Buscar</button>
    </div>
  )
}
