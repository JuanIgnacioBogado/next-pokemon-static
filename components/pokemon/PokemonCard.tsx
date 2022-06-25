import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Card, Grid, Row, Text} from '@nextui-org/react';

import {SmallPokemon} from 'interfaces';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({pokemon: {id, img, name}}) => (
    <Grid xs={6} sm={4} md={3} xl={2}>
        <Card isHoverable isPressable>
            <Link href={`/name/${name}`}>
                <a>
                    <Card.Body css={{p: 1}}>
                        <Image
                            src={img}
                            width="100%"
                            height={140}
                            alt={name}
                            loading="lazy"
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify="space-between">
                            <Text transform="capitalize">{name}</Text>
                            <Text>#{id}</Text>
                        </Row>
                    </Card.Footer>
                </a>
            </Link>
        </Card>
    </Grid>
);
