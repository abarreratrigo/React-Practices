//Author Alexis Barrera
//Personalized window for Rother Industries & Tecgnologies

import { type CSSProperties } from 'react';
import { ItemCounter } from '../shopping-cart/ItemCounter';

const FONT = "Arial";

const rotherMenuItems = {
    name: "Rother Industries & Technologies",
    address: "Córdoba, Spain",
}

const myStyles: CSSProperties = {
    fontSize: 30,
    fontFamily: FONT,
    color: 'white',
    backgroundColor: 'crimson',
    textAlign: "center",
    padding: 12,
    marginTop: 20,
}

const styleP: CSSProperties = {
    fontSize: 18,
    fontFamily: FONT,
    textAlign: 'center',
    padding: 10
}
interface ItemList {
    productName: string;
    quantity: number;
}

const items: ItemList[] = [
    { productName: "DISPOSITIVOS INSTALADOS", quantity: 6 },
    { productName: "DISPOSITIVOS EN MANTENIMIENTO", quantity: 2 },
    { productName: "DISPOSITIVOS EN STOCK", quantity: 100 },
];

export const MyPersonalizedWindow = () => {

    return (
        <div>
            <div>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: FONT,
                    fontSize: 40,
                    color: 'crimson'
                }}
                >Bienvenido a Rother Industries & Technologies</h1>
                <p style={styleP} className='prueba'>
                    Has iniciado sesión como: {JSON.stringify(rotherMenuItems)}</p>
            </div>
            <div>
                <h2 style={myStyles} data-testid="devices-info">Información de los dispositivos</h2>

                <div className='div2'>
                    {items.map(({ productName, quantity }) => (
                        <ItemCounter key={productName} name={productName} quantity={quantity} />
                    ))}
                </div>
            </div>
        </div>
    )
}