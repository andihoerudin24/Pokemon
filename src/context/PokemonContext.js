import React,{createContext,useContext,useEffect,useState} from 'react'
import { ErrorsContext } from './ErrorsContext';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) =>{
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentPageResults, setCurrentPageResults ] = useState([]);
    const [ allPokemonCount, setAllPokemonCount ] = useState(0);
    const [ limitValue, setLimitValue ] = useState(10);
    const favouritesFromLocalStorage = JSON.parse(localStorage.getItem('favourites'));
    const [ favourites, setFavourites ] = useState(favouritesFromLocalStorage === null ? [] : favouritesFromLocalStorage);
    const { setFetchingError } = useContext(ErrorsContext);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitValue}&offset=${limitValue * (currentPage - 1)}`)
          .then(res => res.json())
          .then(data => {
            setCurrentPageResults(data.results);
            setAllPokemonCount(data.count);
            console.log(data.results)
          })
          .catch(() => setFetchingError(true));
      }, [currentPage, limitValue]);
      return (
        <PokemonContext.Provider
          value={{
            currentPage,
            currentPageResults,
            allPokemonCount,
            limitValue,
            setLimitValue
          }}
        >
          {props.children}
        </PokemonContext.Provider>
      )

}


export default PokemonContextProvider
