import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateSearchParams = (a,b) => {
        setSearchParams((prev) => {
            prev.set(a,b);
            return prev;
        })
    }

    console.log(searchParams);
    console.log(searchParams.get('color'), searchParams.get('size'));

  return (
    <div>
        <h4>Colors</h4>
        <button onClick={() => updateSearchParams('color','red')}>Red</button>
        <button onClick={() => updateSearchParams('color','white')}>White</button>

        <h4>Size</h4>
        <button onClick={() => updateSearchParams('size','10')}>10</button>
        <button onClick={() => updateSearchParams('size','7')}>7</button>
        <button onClick={() => updateSearchParams('size','5')}>5</button>
    </div>
  )
}

export default Products;