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
            const searchedName = searchedNameRef.current.value;
            const warning = document.querySelector('.warning');
            console.log(searchedName)

            if (searchedName == null || searchedName.length < 1) {
                warning.innerHTML = 'Couldnt find pokemon with that name.'
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

        <div className='d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center mt-3 align-content-center' >
            {/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" className="ms-md-3"/>*/}
            <div className='d-flex align-items-center flex-column mt-4'>
                    <input className={`me-2 me-md-5 ${classes.search}`} type="text" id='pokemon-searchbar' placeholder='Search for pokemon..' ref={searchedNameRef} onKeyPress={SearchbarInputHandler}/>
                    <div className="warning mx-5 text-danger"></div>
            </div>
        </div>
    )
}

export default Searchbar;