import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Searchbar.scss'


const Searchbar = () => {
  const [ inputValue, setInputValue ] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const updateSearchContext = () => {
    let newURL = !inputValue ? '/courses' : `/courses?name=${inputValue}`
    navigate(newURL, {state: newURL})
  }

  return (
    <div className='search-bar-container'>
      <input
        type="text"
        className="search-bar"
        value={inputValue}
        onChange={event => handleChange(event)}
      />
      <button className="search-btn" onClick={updateSearchContext}>SEARCH</button>
    </div>
  )
}

export default Searchbar
