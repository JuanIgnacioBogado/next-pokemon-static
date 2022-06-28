import {ChangeEvent, useState} from 'react';
import {GetStaticProps, NextPage} from 'next';
import {Grid, Text} from '@nextui-org/react';

import {Layout} from 'components/layouts';
import {PokemonCard} from 'components/pokemon';

import {SmallPokemon} from 'interfaces';
import {getPokemonsList} from 'utils';

interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {
    const [search, setSearch] = useState('');

    const handleChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setSearch(value);
    };

    const filteredPokemons = (): SmallPokemon[] => {
        if (search.trim()) {
            return pokemons.filter(
                p =>
                    p.name.includes(search.trim().toLowerCase()) ||
                    p.id.toLocaleString() === search.trim()
            );
        }
        return pokemons;
    };

    const total: number = filteredPokemons().length;

    return (
        <Layout
            {...{
                handleChange,
                search,
                total,
                title: 'Listado de Pokémons'
            }}
        >
            {total ? (
                <Grid.Container gap={2}>
                    {filteredPokemons().map(pokemon => (
                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                    ))}
                </Grid.Container>
            ) : (
                <Text h2 css={{textAlign: 'center', marginTop: '3rem'}}>
                    Sin resultados... <br /> Prueba con otro Nombre o ID
                </Text>
            )}
        </Layout>
    );
};

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
