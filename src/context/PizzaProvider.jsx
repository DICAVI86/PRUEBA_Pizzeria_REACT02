import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext()

export const PizzaProvider = ({children}) =>{

    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(()=>{
        getPizzas();
    },[]);

    const getPizzas = async()=>{
        const res  = await fetch('/pizzas.json');
        const pizzas = await res.json();
        setPizzas(pizzas);
    };

    const agregarAlCarrito = ({id, price, name, img})=> {
        const productoPorIndex = carrito.findIndex((p)=> p.id === id);
        const producto = {id, price, name, img, cantidad:1};

        if (productoPorIndex >= 0) {
            carrito[productoPorIndex].cantidad++;
            setCarrito([...carrito])
        } else {
            producto.cantidad = 1
            setCarrito([...carrito, producto])
        }
    };

    const eliminarDelCarrito = (i) => {
        const index = carrito.findIndex((orden) => orden.id === i.id);
        if (index >= 0) {
          if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
            setCarrito([...carrito]);
          } else {
            const nuevoCarrito = carrito.filter((item) => item.id != i.id);
            setCarrito(nuevoCarrito);
          }
        } else {
          console.log("Borrado");
        }
      };

    return (
        <PizzasContext.Provider 
            value={{
                pizzas,
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                getPizzas,
                }}>

            {children}
        </PizzasContext.Provider>
    )


}