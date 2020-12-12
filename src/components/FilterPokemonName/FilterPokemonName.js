import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import searchIcon from '../../assets/search-color.svg';
import './FilterPokemonName.css';

const FilterPokemonName = () => {

 const { nameInputValue, setNameInputValue } = useContext(PokemonContext);

  return (
    <div className='filter-pokemon-name'>
      <form className='search-pokemon__form'>
        <div>
          <img
            alt='search Pokemon by name'
            src={searchIcon}
            className='search-icon'
          />
        </div>
        <label
          htmlFor='pokemon-name'
          className='sort-title'
        >
          Cari Pokemon Di Sini Ya Gan
        </label>
        <input
          type='search'
          placeholder='car dari nama ya gan'
          value={nameInputValue}
          onChange={(e) => setNameInputValue(e.target.value)}
          className='search-pokemon__input'
          id='pokemon-name'
          name='pokemon-name'
        />
      </form>
    </div>
  )
}

export default FilterPokemonName;