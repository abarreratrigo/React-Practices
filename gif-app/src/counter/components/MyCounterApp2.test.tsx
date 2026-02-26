import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";
// import { useCounter } from "../hooks/useCounter";

//Mock created in order to have very much control on the custom hook
const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSubstract: handleSubstractMock,
        handleReset: handleResetMock,
    })
}));

describe('MyCounterApp', () => {
    
    test('should render the component', () => {
        render(<MyCounterApp />)
        
        // screen.debug()

        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
            'Counter: 20'
        )
        expect(screen.getByRole("button", { name: "+1" }).innerHTML).toBeDefined()
        expect(screen.getByRole("button", { name: "-1" }).innerHTML).toBeDefined()
        expect(screen.getByRole("button", { name: "Reset" }).innerHTML).toBeDefined()
    })

    test('should call handleAdd if button is pressed', () => {
        render(<MyCounterApp />)

        const button = screen.getByRole("button", { name: "+1" })

        fireEvent.click(button)

        expect(handleAddMock).toHaveBeenCalled()
        expect(handleSubstractMock).not.toHaveBeenCalled()
    })

    test('should reset the value if button is pressed', () => {
        render(<MyCounterApp />)

        const button = screen.getByRole('button', { name: 'Reset' })
        
        fireEvent.click(button)

        expect(handleResetMock).toHaveBeenCalled()
    })
})