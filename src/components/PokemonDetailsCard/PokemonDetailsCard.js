import React , { useContext, useState, useEffect } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { fetchSinglePokemonDetails } from '../../utils/api';
import Loading from '../Loading/Loading';
import FetchingError from '../FetchingError/FetchingError';
import addTofavIcon from '../../assets/add_to_fav_icon.svg';
import favIcon from '../../assets/fav_icon.svg';
import pokemonTypes from '../../helpers/pokemon-types';
import './PokemonDetailsCard.css';

const PokemonDetailsCard = ({ pokemonName, add }) => {

  const [ isHovered, setIsHovered ] = useState(false);
  const { pokemonCache, setPokemonCache, isPokemonFavourite,toggleFavourites} = useContext(PokemonContext);
  const { fetchingError, setFetchingError  } = useContext(ErrorsContext);

  useEffect(() => {
    if (!pokemonCache[pokemonName]) {
      fetchSinglePokemonDetails(pokemonName)
      .then(pokemonDescription => {
        setPokemonCache((prevDetails) => ({
            ...prevDetails,
            [pokemonName]: pokemonDescription
          }))
        })
        .catch(() => setFetchingError(true))
    }
  }, []);

  return (
    <>
      {
        fetchingError
          ? <FetchingError />
          : (
            <div className='pokemon-details__card'>
              { pokemonCache[pokemonName]
                ? <>
                  <div className='add-to-fav__wrapper'>
                    <img
                      alt='add to favourites'
                      src={isPokemonFavourite(pokemonName) ? favIcon : addTofavIcon}
                      className='add-to-fav__img'
                      onMouseOver={() => setIsHovered(true)}
                      onMouseOut={() => setIsHovered(false)}
                      onClick={() => toggleFavourites(pokemonName)}
                    />
                      {
                        add && (
                          <div className={isHovered ? 'add-to-fav-tooltip hovered' : 'add-to-fav-tooltip'}>
                            <h5>{isPokemonFavourite(pokemonName) ? 'hapus dari daftar pokemon favorit kamu' : 'masukan ke daftar favorit'}</h5>
                          </div>
                        )
                      }
                    </div>
                    <img
                      alt={pokemonCache[pokemonName].name}
                      src={pokemonCache[pokemonName].sprites.front_default}
                      className='pokemon-details__img'
                    />
                    <h3 className='pokemon-details__name'>{pokemonCache[pokemonName].name}</h3>
                    <p>bobot: {pokemonCache[pokemonName].weight}</p>
                    <p>tinggi: {pokemonCache[pokemonName].height}</p>
                    <p>Pengalaman bertarung: {pokemonCache[pokemonName].base_experience}</p>
                    <h5>type/s:</h5>
                    <ul className='pokemon-detail__types'>
                      {pokemonCache[pokemonName].types.map(({type}) => {
                        const typeIcon = pokemonTypes.find((pokemon) => pokemon.type === type.name);
                        return (
                          <li key={type.name}>
                            <h6>{type.name}</h6>
                           
                          </li>
                        )
                      })}
                    </ul>
                  </>
                  : <Loading />
                }
              </div>
          )
      }
    </>
  )
}

export default PokemonDetailsCard;