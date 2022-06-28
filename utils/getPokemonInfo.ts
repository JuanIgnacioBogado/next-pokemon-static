import {Pokemon, PokemonListResponse} from 'interfaces';
import {pokeApi} from 'api';

export const getPokemonInfo = async (param: string) => {
    try {
        const {
            data: {name, sprites, id}
        } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);

        return {
            name,
            sprites,
            id
        };
    } catch (error) {
        return null;
    }
};

export const getPokemonsList = async () => {
    const {
        data: {results}
    } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    return results;
};
