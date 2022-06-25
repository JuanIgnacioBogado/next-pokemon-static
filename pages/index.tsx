import {GetStaticProps, NextPage} from 'next';
import {Grid} from '@nextui-org/react';

import {Layout} from 'components/layouts';
import {PokemonCard} from 'components/pokemon';

import {SmallPokemon} from 'interfaces';
import {getPokemonsList} from 'utils';

interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => (
    <Layout title="Listado de Pokémons">
        <Grid.Container gap={2}>
            {pokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </Grid.Container>
    </Layout>
);

export const getStaticProps: GetStaticProps = async ctx => {
    const results = await getPokemonsList();
    const pokemons: SmallPokemon[] = results.map((poke, index) => ({
        ...poke,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
        }.svg`
    }));

    return {
        props: {
            pokemons
        }
    };
};

export default Home;
