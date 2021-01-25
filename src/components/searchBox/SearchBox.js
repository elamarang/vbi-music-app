import React from 'react';
import {useSelector} from 'react-redux'

const SearchBox = ({onSearchChange}) =>{
    const searchField = useSelector(state=>state.searchField.searchField)
    return(
        <div className='pa2'>
            <input 
            className = 'pa3 ba b--black bg-lightest-gray w-90'
            type ='search'
            placeholder ='Search for songs...'
            value = {searchField}
           onChange = {onSearchChange}
            />
        </div>
        
    )
}

export default SearchBox;