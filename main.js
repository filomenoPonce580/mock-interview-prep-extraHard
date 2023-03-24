const { default: axios } = require("axios");
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"


function getPokemon(pokemonIDs){
    const arrayOfPromises = pokemonIDs.map((id)=>{
        return axios.get(`${BASE_URL}/${id}`)
    })
    console.log(arrayOfPromises)
    return Promise.all(arrayOfPromises)
        .then((arrayOfResponses)=>{
            const arrayOfResponseData = arrayOfResponses.map((fullResponse)=>{
                return {
                    name: fullResponse.data.name,
                    ability: fullResponse.data.abilities[0].ability.name
                }
            });
            return arrayOfResponseData
        })
        .catch((err)=>{
            return err.message
        })
}

getPokemon([1,4,7]).then((res)=>{
    console.log(res)
})

