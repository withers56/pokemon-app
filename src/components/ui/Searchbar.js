import {Link, Redirect, useHistory} from "react-router-dom";
import {useRef} from "react";
import AnimationAcrossScreen from "./AnimationAcrossScreen";
import classes from './Searchbar.module.css'


function Searchbar(props) {
    let searchedNameRef = useRef();
    let warningRef = useRef();


    const history = useHistory();
    function SearchbarInputHandler(e) {
        if (e.key === 'Enter') {
            const searchedName = searchedNameRef.current.value.toLowerCase().trim();
            const warning = document.querySelector('.warning');
            console.log(searchedName)

            if (searchedName == null || searchedName.length < 1 || searchedName === "") {
                warning.innerHTML = 'Couldnt find pokemon with that name.'
                return;
            }

            fetch(`https://pokeapi.co/api/v2/pokemon/${searchedName}`).then(resp => resp.json()).then(data => {
                const id = data.id;
                history.push({
                    pathname: '/searchedPokemon',
                    state: id
                })
            }).catch(err => {
                warning.innerHTML = 'Couldnt find pokemon with that name.'
            })





        }
    }
    return (

            <div className='d-flex align-items-center flex-column mt-4'>
                    <input className={`${classes.search}`} type="text" id='pokemon-searchbar' placeholder='Search for pokemon..'  ref={searchedNameRef} onKeyPress={SearchbarInputHandler}/>
                    <div className="warning text-danger"></div>
            </div>

    )
}

export default Searchbar;