//Importamos los estilos css creados
import { useState } from 'react';
import './ItemCounter.css';
//Creo la interfaz para el componente ItemCounter
interface ItemCounterProps {
    name: string;
    quantity?: number;
}

//Componente ItemCounter que recibe un nombre como prop y muestra un contador con botones para incrementar y decrementar el valor
export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

    //Vamos a crear un Hook
    const [count, setCount] = useState(quantity);

    //Creamos las funciones para manejar los eventos de los botones
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return; // Evitamos que el contador sea 0
        setCount(count - 1);
    }

    return (
        <div className='item-container'>
            <span className='item-name' style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
            <button onClick={handleAdd}>+1</button>
            <button>+2</button>
            <span className='quantity'>{count}</span>
            <button onClick={handleSubtract}>-1</button>
            <button>-2</button>
        </div>
    )
}
