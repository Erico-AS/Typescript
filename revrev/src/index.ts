import Pokemon from './models/Pokemon'
import PokemonFactory from './Pokemon-factory'

const pokemons: Pokemon[] = new PokemonFactory("./data/pokemon.csv").Pokemons

for (let pokemon of pokemons) {
    if(pokemon.geracao === 3 && pokemon.lendario) {
        const {nome, geracao} = pokemon
        console.log(`O pokemon ${nome} é lendario da fase ${geracao}`)
    }
}