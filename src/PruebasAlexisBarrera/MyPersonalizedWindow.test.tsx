import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyPersonalizedWindow } from "./MyPersonalizedWindow";

describe('MyAwesomeApp', () => {
    test('Should render firstName and lastName', () => {

        const { container } = render(<MyPersonalizedWindow />);
        screen.debug();

        const h1 = container.querySelector('h1')
        const h2 = container.querySelector('h2')

        expect(h1?.innerHTML).toContain("Bienvenido a Rother Industries &amp; Technologies");
        expect(h2?.innerHTML).toContain("Carrito de compras")
    })

    test('Should render firstName and lastName - screen', () => {

        render(<MyPersonalizedWindow />);
        screen.debug();

        const h1 = screen.getByRole('heading', { level: 1 })

        const h2 = screen.getByTestId("shopping-cart")
        console.log(h1.innerHTML, h2.innerHTML);

        expect(h2.innerHTML).toContain("Carrito de compras")
    })
})
