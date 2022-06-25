import {useEffect, useState} from 'react';
import {NextPage} from 'next';

import {Layout} from 'components/layouts';
import {NoFavorites} from 'components/ui';

import {getFavorites} from 'utils';
import {FavoritePokemon} from 'interfaces';
import {FavoritePokemons} from 'components/pokemon';

const FavoritesPage: NextPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<FavoritePokemon[]>(
        []
    );

    useEffect(() => {
        const favorites = getFavorites();
        if (favorites.length) {
            setFavoritePokemons(
                favorites.map(id => ({
                    id,
                    img: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                }))
            );
        }
    }, []);

    return (
        <Layout title="Pokémons - Favoritos">
            {!favoritePokemons.length ? (
                <NoFavorites />
            ) : (
                <FavoritePokemons {...{favoritePokemons}} />
            )}
        </Layout>
    );
};

export default FavoritesPage;
