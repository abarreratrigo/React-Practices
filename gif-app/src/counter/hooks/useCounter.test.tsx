import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

describe('useCounter', () => { 

    test('should initialize with default value of 0', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(0);
    })

    test('should initialize with value 20', () => {
        const initalValue = 20;

        const { result } = renderHook(() => useCounter(initalValue))
        
        expect(result.current.counter).toBe(initalValue)
    })

    test('should increment the value when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleAdd()    
        })
        
        expect(result.current.counter).toBe(1)
    })

    test('should decrease the value when handleSubstract is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleSubstract()    
        })
        
        expect(result.current.counter).toBe(-1)
    })

    test('should reset the value when handleReset is called', () => {
        const { result } = renderHook(() => useCounter())
        
        act(() => {
            result.current.handleSubstract()    
        })

        expect(result.current.counter).toBe(-1)
        
        act(() => {
            result.current.handleReset()    
        })
        
        expect(result.current.counter).toBe(0)
    })
})