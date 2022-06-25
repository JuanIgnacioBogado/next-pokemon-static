import {FC} from 'react';
import Image from 'next/image';
import {Container, Text} from '@nextui-org/react';

export const NoFavorites: FC = () => (
    <Container
        css={{height: 'calc(100vh - 100px)'}}
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
    >
        <Text h1>No hay Favoritos</Text>
        <Image
            style={{opacity: 0.1}}
            width={250}
            height={250}
            alt="No Favorite Pokémon"
            src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        />
    </Container>
);
