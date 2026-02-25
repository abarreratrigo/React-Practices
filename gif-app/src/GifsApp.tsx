import React from 'react'

export const GifsApp = () => {
    return (
        <>
            {/*Header*/}
            <div className='content-center'>
                <h1>Buscador de gifs</h1>
                <p>Descubre y comparte el gif perfecto</p>
            </div>

            {/*Search*/}
            <div className="search-container">
                <input type="text" placeholder='Buscador de GIFs' />
                <button>Buscar</button>
            </div>

            {/*Previous searches*/}
            <div className="previous-searches">
                <h2>Búsquedas previas</h2>
                <ul className='previous-searches-list'>
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Spiderman</li>
                </ul>
            </div>
        </>
  )
}
