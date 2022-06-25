import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import {PokemonDetail} from 'components/pokemon';

import {Pokemon} from 'interfaces';
import {getPokemonInfo, getPokemonsList} from 'utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => (
    <PokemonDetail {...pokemon} />
);

export const getStaticPaths: GetStaticPaths = async ctx => {
    const results = await getPokemonsList();
    const paths = results.map(({name}) => ({
        params: {name}
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {name} = params as {name: string};

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    };
};

export default PokemonByNamePage;
