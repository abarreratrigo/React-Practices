import { fireEvent, render, screen } from "@testing-library/react";
import { describe,expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    
    //Este test debe renderizar los valores por defecto
    test ('Should render with default values', ()=>{
        
        //Definimos el nombre para que sea más seguro el test
        const name = 'DISPOSITIVOS INSTALADOS'

        render(<ItemCounter name={name}/>)

        screen.debug();

        //Buscamos texto en la clase renderizada
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })

    test ('Should render with custom quantity', ()=>{
        
        //Definimos el nombre para que sea más seguro el test
        const name = 'DISPOSITIVOS INSTALADOS'
        const quantity = 75

        render(<ItemCounter name={name} quantity={quantity}/>)

        screen.debug();

        //Buscamos la cantidad en la clase renderizada
        expect(screen.getByText(quantity)).toBeDefined();
    })

    test('Should increase count when button is pressed', () =>{

        render(<ItemCounter name={"test item"} quantity={1}/>)
        
        //Cogemos los botones que necesitemos para testear
        const [button1] = screen.getAllByRole('button')

        //Disparamos el evento
        fireEvent.click(button1);
        //Buscamos el valor = 2 en la pantalla
        expect(screen.getByText(2)).toBeDefined();
    })

    test('Should increase count when button is pressed', () =>{

        render(<ItemCounter name={"test item"} quantity={1}/>)
        
        //Cogemos los botones que necesitemos para testear
        const [, button2] = screen.getAllByRole('button')

        fireEvent.click(button2);
        //Buscamos el valor = 3 en la pantalla
        expect(screen.getByText(3)).toBeDefined();      
    })

    test('Should decrease count when button is pressed', () =>{

        render(<ItemCounter name={"test item"} quantity={6}/>)

        const [, , ,button4] = screen.getAllByRole('button')

        fireEvent.click(button4);
        expect(screen.getByText(4)).toBeDefined();
    })

    test('Should decrease count when button is pressed', () =>{

        render(<ItemCounter name={"test item"} quantity={6}/>)

        const [, ,button3] = screen.getAllByRole('button')

        fireEvent.click(button3);
        expect(screen.getByText(5)).toBeDefined();
    })

    test('Should not decrease count when button is pressed', () =>{

        //Hacemos este test para comprobar que no baje de 1 el valor

        render(<ItemCounter name={"test item"} quantity={1}/>)

        const [, , ,button4] = screen.getAllByRole('button')

        fireEvent.click(button4);

        expect(screen.getByText(1)).toBeDefined();
    })

    test('Should change to red when count is 1', ()=>{

        const quantity = 1;
        const name = "test-item";

        render(<ItemCounter name={name} quantity={quantity} />)
        
        const itemText = screen.getByText(name);
        
        //Con esto obtenemos el color del elemento que estamos testeando
        expect(itemText.style.color).toBe('red')
    })

    test('Should change to black when count is greater than 1', ()=>{

        const quantity = 2;
        const name = "test-item";

        render(<ItemCounter name={name} quantity={quantity} />)
        
        const itemText = screen.getByText(name);
        
        expect(itemText.style.color).toBe('black')
    })
})
    