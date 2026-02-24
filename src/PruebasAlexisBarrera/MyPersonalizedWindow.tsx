//Author Alexis Barrera
//Personalized window for Rother Industries & Tecgnologies

import { type CSSProperties } from 'react';
import { ItemCounter } from './shopping-cart/ItemCounter';

const rotherMenuItems = {
    name: "Rother Industries & Technologies",
    address: "Córdoba, Spain",
}

const myStyles: CSSProperties = {
    backgroundColor: '#b4b4b4',
    borderRadius: 20,
    padding: 12,
    marginTop: 40,
}

interface ItemList {
    productName: string;
    quantity: number;
}

const items: ItemList[] = [
    { productName: "Dispositivos instalados", quantity: 6 },
    { productName: "Dispositivos en mantenimiento", quantity: 2 },
    { productName: "Dispositivos en stock", quantity: 100 },
];

export const MyPersonalizedWindow = () => {

    return (
        <>
            <div>
                <h1>Bienvenido a Rother Industries & Technologies</h1>
                <p style={myStyles}>
                    Menú personalizado: {JSON.stringify(rotherMenuItems)}</p>
            </div>
            <div>
                <h2 style={myStyles} data-testId="shopping-cart">Carrito de compras</h2>

                {items.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))}

                {/* <ItemCounter name="Dispositivos instalados" quantity={6} />
                <ItemCounter name="Dispositivos en mantenimiento" quantity={2} />
                <ItemCounter name="Dispositivos en stock" quantity={100} /> */}
            </div>
        </>
    )
}