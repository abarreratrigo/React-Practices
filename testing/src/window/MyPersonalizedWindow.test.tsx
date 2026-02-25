import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyPersonalizedWindow } from "./MyPersonalizedWindow.tsx";

//!Creamos una función ficticia
const mockItemCounter = vi.fn((props: unknown) => {

  return (<div data-testid="ItemCounter"/>)
})

vi.mock('../shopping-cart/ItemCounter', () => ({
  ItemCounter: (props:unknown) => mockItemCounter(props),
}))

//Voy a crear un componente ficticio
// vi.mock('./shopping-cart/ItemCounter', () => ({      
//Cuando se llame a este componente, se devuelve esto:
// ItemCounter: (props: unknown) => (),
//Con esto comprobamos que existen 3 itemcounter
//     }))
    

describe("MyAwesomeApp", () => {
  
  afterEach(() => {
    vi.clearAllMocks()
  })
  
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyPersonalizedWindow />);
    // screen.debug();

    const h1 = container.querySelector("h1");
    const h2 = container.querySelector("h2");

    expect(h1?.innerHTML).toContain(
      "Bienvenido a Rother Industries &amp; Technologies",
    );
    expect(h2?.innerHTML).toContain("Información de los dispositivos");
  });

  test("Should render firstName and lastName - screen", () => {
    render(<MyPersonalizedWindow />);
    // screen.debug();

    const h1 = screen.getByRole("heading", { level: 1 });

    const h2 = screen.getByTestId("devices-info");
    console.log(h1.innerHTML, h2.innerHTML);

    expect(h2.innerHTML).toContain("Información de los dispositivos");
  });

  //Vamos a usar un snapshot para verificar que la estructura no ha sido modificada
  test("should match snapshot", () => {
    const { container } = render(<MyPersonalizedWindow />);
    expect(container).toMatchSnapshot();
  });
});

describe("ItemMapTest", () => {

  //!Ponemos esto para que el mock no se actualize con los de las otras pruebas
  afterEach(() => {
    vi.clearAllMocks()
  })
  
  test("Should match snapshot - item.map", () => {
    const { container } = render(<MyPersonalizedWindow />);
    expect(container).toMatchSnapshot();
  });
  
  test("Should render the correct number of ItemCounter Component", () => {
    
    render(<MyPersonalizedWindow />)

    //Usamos el creado anteriormente
    const itemCounters = screen.getAllByTestId("ItemCounter")

    console.log(itemCounters.length);
    
    // screen.debug()

    //Comprobamos que existan 3
    expect(itemCounters.length).toBe(3)
    
  })

  test('Should render itemCounter with the correct props', () => {
    
    render(<MyPersonalizedWindow />)
    
    expect(mockItemCounter).toHaveBeenCalledTimes(3)

    //!Así comprobamos que se pasen los datos correctamente
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "DISPOSITIVOS INSTALADOS",
      quantity: 6
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "DISPOSITIVOS EN MANTENIMIENTO",
      quantity: 2
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "DISPOSITIVOS EN STOCK",
      quantity: 100
    });
  });        
});
