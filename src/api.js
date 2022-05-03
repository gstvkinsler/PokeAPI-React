export const searchPokemon = async (pokemon) => {
    try {
        let url ="https://pokeapi.co/api/v2/pokemon/" + pokemon
        const response = await fetch(url).then(result => {return result.json()})
        return response
    } catch (error) {
        console.log()
    }
}


export const getPokemon = async (limit = 50, offset = 0) => {
    try {
        let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url).then(result => {return result.json()})
        return response
    } catch (error) {
        console.log()
    }
} 


export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url).then(result => {return result.json()})
        return response
    } catch (error) {
        console.log()
    }
} 
    