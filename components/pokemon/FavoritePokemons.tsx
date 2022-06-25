import {FC} from 'react';
import {Grid} from '@nextui-org/react';

import {FavoritePokemon} from 'interfaces';
import {FavoriteCardPokemon} from './FavoriteCardPokemon';

interface Props {
    favoritePokemons: FavoritePokemon[];
}

export const FavoritePokemons: FC<Props> = ({favoritePokemons}) => (
    <Grid.Container gap={2}>
        {favoritePokemons.map(pokemon => (
            <FavoriteCardPokemon {...{pokemon}} key={pokemon.id} />
        ))}
    </Grid.Container>
);
