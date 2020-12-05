import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
    return ( 
        <div className='search-box'>
            <input className='search' type='text' name='search'/>
            <button className='search-btn' type='submit'><i className='fa fa-search' aria-hidden='true'></i></button>
        </div>
     );
}
 
export default SearchBox;