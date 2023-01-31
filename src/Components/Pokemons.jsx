import React, { useState } from 'react'
import axios from 'axios';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const obtenerPokemons = () =>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807%27').then(response=>{
                console.log(response);
                setPokemons(response.data.results.map((pokemon) => pokemon.name))
            })
        }
    return (
        <>
            <button onClick={obtenerPokemons}>Pokedex Axios Api!</button>
            <ol>
                {
                    pokemons.map((pokemon, index) => <li key={index}><strong>{pokemon}</strong></li>)
                }
            </ol>
        </>
    )

}
export default Pokemons;