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
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params as {id: string};
    const pokemon = await getPokemonInfo(id);

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400
    };
};

export default PokemonPage;
