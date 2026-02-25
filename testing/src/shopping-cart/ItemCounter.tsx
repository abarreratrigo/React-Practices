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
    const handleAdd = (add: number) => {
        console.log("Hola");
        
        setCount(count + add);
    }

    const handleSubtract = (substract: number) => {
        if (count === 1 || count === 0) return; // Evitamos que el contador sea 0
        setCount(count - substract);
    }

    return (
        <div className='item-container'>
            <span className='item-name' style={{ color: count === 1 || count === 0 ? 'red' : 'black' }}>{name}</span>
            <button onClick={() => handleAdd(1)}>+1</button>
            <button onClick={() => handleAdd(2)}>+2</button>
            <span className='quantity'>{count}</span>
            <button onClick={() => handleSubtract(1)}>-1</button>
            <button onClick={() => handleSubtract(2)}>-2</button>
        </div>
    )
}