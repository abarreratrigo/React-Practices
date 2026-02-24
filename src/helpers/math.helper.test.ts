import { describe, expect, test } from "vitest"
import { add, multiply, substract } from "./math.helpers"

//Usamos el describe para agrupar los test
describe("add", () => {

    test('Should add two positive numbers', () => {

        //! 1.Arrange
        const a = 1;
        const b = 2;

        //! 2.Act
        const result = add(a, b)

        //! 3.Assert
        expect(result).toBe(a + b);
    })

    test('Should add two negative numbers', () => {

        //! 1.Arrange
        const a = 1;
        const b = -2;

        //! 2.Act
        const result = add(a, b)

        //! 3.Assert
        expect(result).toBe(-1);
    })
})

describe("substract", () => {

    test('Should substract two positive numbers', () => {

        const a = 7;
        const b = 3;

        const result = substract(a, b)

        expect(result).toBe(4)
    })

    test('Should substract two negative numbers', () => {

        const a = -7;
        const b = -3;

        const result = substract(a, b)

        expect(result).toBe(-4)
    })
})

describe("multiply", () => {

    test('Should multiply two positive numbers', () => {

        const a = 7;
        const b = 3;

        const result = multiply(a, b)

        expect(result).toBe(21)
    })

    test('Should substract two numbers (one positive and one negative)', () => {

        const a = -7;
        const b = 3;

        const result = multiply(a, b)

        expect(result).toBe(-21)
    })
})


