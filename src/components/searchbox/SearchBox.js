import React, { useState } from 'react';
import './SearchBox.css'

const SearchBox = ({history, placedKeyword=''}) => {

    const [keyword, setKeyword] = useState(placedKeyword)

    const handleSearch = () => {
        if(keyword){
            history.push(`/search/${keyword}`)
        }
    }

    const onKeyPress = (e) => {
        if(e.which === 13) {
            handleSearch()
        }
    }


    return ( 
        <div className='search-box'>
            <input 
                className='search' 
                placeholder='Search by name...' 
                type='text' 
                name='search' 
                value={keyword} 
                onKeyPress={(e) => onKeyPress(e)} 
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={() => handleSearch()} className='search-btn' type='submit'><i className='fa fa-search' aria-hidden='true'></i></button>
        </div>
     );
}
 
export default SearchBox;