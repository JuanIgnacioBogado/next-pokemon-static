import {NextPage, GetStaticPaths, GetStaticProps} from 'next';

import {PokemonDetail} from 'components/pokemon';

import {Pokemon} from 'interfaces';
import {getPokemonInfo} from 'utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => (
    <PokemonDetail {...pokemon} />
);

export const getStaticPaths: GetStaticPaths = async ctx => {
    const paths = [...Array(151)].map((_, index) => ({
        params: {id: `${index + 1}`}
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params as {id: string};

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        }
    };
};

export default PokemonPage;
