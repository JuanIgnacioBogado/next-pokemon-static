import {useEffect, useState, FC} from 'react';
import {Button, Card, Container, Grid, Text} from '@nextui-org/react';
import confetti from 'canvas-confetti';

import {Layout} from 'components/layouts';

import {Sprites} from 'interfaces';
import {existInFavorite, toggleFavorite} from 'utils';

interface Props {
    name: string;
    sprites: Sprites;
    id: number;
}

export const PokemonDetail: FC<Props> = ({name, id, sprites}) => {
    const [isInFavorites, setIsInFavorites] = useState(false);

    const onToggleFavorite = () => {
        toggleFavorite(id);
        setIsInFavorites(!isInFavorites);

        if (!isInFavorites) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 1,
                    y: 0
                }
            });
        }
    };

    useEffect(() => {
        setIsInFavorites(existInFavorite(id));
    }, [id]);

    return (
        <Layout title={name}>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card css={{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image
                                loading="lazy"
                                src={
                                    sprites.other?.dream_world.front_default ||
                                    '/no-image.png'
                                }
                                alt={name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{justifyContent: 'space-between'}}>
                            <Text h1 transform="capitalize">
                                {name}
                            </Text>
                            <Button
                                animated
                                color="gradient"
                                ghost={!isInFavorites}
                                onClick={onToggleFavorite}
                            >
                                {isInFavorites
                                    ? 'Sacar de Favoritos'
                                    : 'Guardar en Favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display="flex" gap={0}>
                                <Card.Image
                                    loading="lazy"
                                    src={sprites.front_default}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Card.Image
                                    loading="lazy"
                                    src={sprites.back_default}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Card.Image
                                    loading="lazy"
                                    src={sprites.front_shiny}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Card.Image
                                    loading="lazy"
                                    src={sprites.back_shiny}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};
