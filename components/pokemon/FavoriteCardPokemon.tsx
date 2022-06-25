import {FC} from 'react';
import Image from 'next/image';
import {Card, Grid} from '@nextui-org/react';

import {FavoritePokemon} from 'interfaces';
import {useRouter} from 'next/router';

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemon: {id, img}}) => {
    const {push} = useRouter();

    return (
        <Grid xs={6} sm={4} md={3} xl={2}>
            <Card
                isHoverable
                isPressable
                css={{p: 10}}
                onClick={() => push(`/pokemon/${id}`)}
            >
                <Image
                    src={img}
                    width="100%"
                    height={140}
                    alt={`Pokémon N°${id}`}
                    loading="lazy"
                />
            </Card>
        </Grid>
    );
};
