import { data } from "autoprefixer";
import { useState } from "react";

function ActivePage() {
    const [allPokemons, setAllPokemons] = useState([]);

    const onSearchBtn = () => {
        fetch('https://graphql-pokeapi.graphcdn.app/')
        .then((response) => response.json)
        .then((data) => setAllPokemons(data))
    }

    return (
        <div className="flex justify-center">
            <button className='bg-500-red p-2'>Search</button>
        </div>
    )
}
export default ActivePage;