import {useEffect} from "react";
import {useState} from "react";
import classes from "../pokemons/MainFeaturedPokemon.module.css";
import {Link} from "react-router-dom";

function EvolutionTab(props) {
    const [evolutionNames, setEvolutionNames] = useState([]);

    const url = props.url
    const evolutionArray = [];

    useEffect( () => {
        fetch(url).then(resp => resp.json()).then(data => {
            const evoChainUrl = data.evolution_chain.url
            fetch(evoChainUrl).then(resp => resp.json()).then(data => {
                console.log(data.chain)
                evolutionArray.push({
                    name: data.chain.species.name,
                    id: deconstructUrlForId(data.chain.species.url)
                })
                // console.log(data.chain.species.name)
                if (data.chain.evolves_to.length > 0) {
                    const secondEvo = data.chain.evolves_to[0];
                    // console.log(data.chain.evolves_to[0].species.name)
                    evolutionArray.push({
                        name: secondEvo.species.name,
                        id: deconstructUrlForId(secondEvo.species.url)
                    })

                    if (secondEvo.evolves_to.length > 0) {
                        const thirdEvo = secondEvo.evolves_to[0];
                        // console.log(thirdEvo.species.name)
                        evolutionArray.push({
                            name: thirdEvo.species.name,
                            id: deconstructUrlForId(thirdEvo.species.url)
                        })
                    }
                }

                console.log(evolutionArray)
                evolutionArray.map(evo => console.log(evo))
            }).then(() => setEvolutionNames(evolutionArray))
        })
    }, []);

    function deconstructUrlForId(url) {
        const urlArray = url.split("/")
        return urlArray[urlArray.length - 2]
    }





    return (
        <div className="d-flex justify-content-between">
            {evolutionNames.map(evo =>
                <Link to={{
                    pathname: '/searchedPokemon',
                    state: evo.id,
                }}><span key={evo.id}>{evo.name}</span></Link>

            )}
        </div>
    )
}

export default EvolutionTab;