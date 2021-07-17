import React, { useState } from 'react';
import '../styles/SearchBar.css';



const SearchBar = (props) => {

  // using useState on search Value
  const [searchValue, setSearchValue] = useState('');
  
  // onChange function
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }

  // clear btn function
  const handleClearClick = () => {
    setSearchValue('');
  }

  // filtering items function with props(products)
  const filteredElement = props.products.filter((product) => {
    return product.includes(searchValue);
  })

  // clear btn displaying
  const shouldDisplayButton = searchValue.length > 0;

  return (
  <div>
    {/* input searchbar */}
    <input type='text' value={searchValue} onChange={handleInputChange}/>

    {/* clear btn!! using short circuit!! 개신기 ㅋㅋ */}
    {shouldDisplayButton && <button onClick={handleClearClick} >clear</button>}

    {/* filtering with map */}
    {filteredElement.map((product) => {
      return (
        <li key={product}>{product}</li>
      );
    })}

  </div>
  );
}

export default SearchBar;