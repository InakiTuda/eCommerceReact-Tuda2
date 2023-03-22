import React,{useState} from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const increaseStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decreaseStock = () => {
        if (counter > stock) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= stock){
            setStock(stock - counter);
            setCounter(1);
        }
    }

    return (
        <div className="container" id="itemcount">
            <div className="row mb-3">
                <div className="">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-danger" onClick={decreaseStock}>-</button>
                        <button type="button" className="btn btn-outline-dark">{counter}</button>
                        <button type="button" className="btn btn-outline-success" onClick={increaseStock}>+</button>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="align-items">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    ) 
}

export default ItemCount;