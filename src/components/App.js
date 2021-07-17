import React, { useState, useEffect } from 'react';
import CountButton from './CountButton';
import SearchBar from './SearchBar';


const App = () => {

  // useState for products
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // fetching fake store api
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json()) // don't understand yet
            // make an products array function?
            .then(productsArray => {
              // make newProductsState var for mapping product title
              const newProductsState = productsArray.map((product) => {
                return product.title;
              }); 
              // setProducts using useState with var newProductsState we have made 
              setProducts(newProductsState);
            })

    /* testing for Loading element

    setTimeout(() => {
      setProducts([
        'tooth paste',
        'tooth brush', 
        'mouth wash',
        'dental floss',
        'mouth guard',
      ])
    }, 2000);

    */
  }, []);

  // var for loading element
  const hasProducts = products.length > 0;

  return (
    <div>
      {/* ternary operator for making loading element */}
      {hasProducts? <SearchBar products={products} /> : 'Loading'}

      {/* if incrementBy = 'String', it displays string */}
      {/* <CountButton incrementBy={10} />  */}

    </div>
  );
}

export default App;

