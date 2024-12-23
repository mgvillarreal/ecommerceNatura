import { useState } from "react";
import Button from '../Button/Button';

const ItemCount = ({ stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleIncrease = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAddToCart = () => {
        if(stock > 0){
            onAdd(count);
        }
    };

  return (
        <div className="flex flex-col items-center space-y-2">

            {stock === 0 ?
                <p className="text-bordo text-lg font-semibold">Producto sin stock</p> :
                <>
                <div className="flex items-center space-x-4">
                    <button onClick={handleDecrease} className="px-2 py-1 bg-lila text-bordo rounded disabled:opacity-50" disabled={count <= 1}>
                    -
                    </button>
                    <span className="font-bold text-lg">{count}</span>
                    <button onClick={handleIncrease} className="px-2 py-1 bg-lila text-bordo rounded disabled:opacity-50" disabled={count >= stock}>
                    +
                    </button>
                </div>
                <Button fn={handleAddToCart} text="Agregar al carrito" color="rosa" disabled={stock === 0}> </Button>
                </>
            }
            
        </div>
     );
};

export default ItemCount;