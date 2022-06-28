import {useState, useEffect, FC, ChangeEvent} from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Input, Link, Text, useTheme} from '@nextui-org/react';

import {getFavorites} from 'utils';

interface Props {
    handleChange?: ChangeEvent<HTMLInputElement> | any;
    search?: string;
    total?: number;
}

export const Navbar: FC<Props> = ({handleChange, search, total}) => {
    const {asPath} = useRouter();
    const {theme} = useTheme();
    const [totalFavorites, setTotalFavorites] = useState(0);

    const length = typeof window !== 'undefined' ? getFavorites().length : 0;

    const setStatus = (): any => {
        if (search && search.trim().length > 0 && total === 0) {
            return 'error';
        } else if (search && search.trim().length > 0 && total !== 0) {
            return 'success';
        } else {
            return 'default';
        }
    };

    useEffect(() => {
        setTotalFavorites(length);
    }, [length]);

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 20px',
                backgroundColor: theme?.colors.gray50.value
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Image
                    loading="lazy"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                    alt="Icono de la app"
                    width={70}
                    height={70}
                />
                <NextLink href="/" passHref>
                    <Link>
                        <Text color="white" h2>
                            P
                        </Text>
                        <Text color="white" h3>
                            okémon
                        </Text>
                        <Text color="white" h2 css={{marginLeft: '6px'}}>
                            A
                        </Text>
                        <Text color="white" h3>
                            pp
                        </Text>
                    </Link>
                </NextLink>
            </div>

            <div>
                {asPath === '/' && (
                    <Input
                        aria-label="inputSearch"
                        id="inputSearch"
                        type="text"
                        placeholder="Busca por Nombre o ID"
                        onChange={handleChange}
                        bordered
                        color="primary"
                        status={setStatus()}
                        animated={false}
                        clearable
                        css={{marginRight: '15px'}}
                    />
                )}

                <NextLink href="/favorites" passHref>
                    <Link>
                        <Text color="white">
                            Favoritos
                            {totalFavorites > 0 && `: ${totalFavorites}`}
                        </Text>
                    </Link>
                </NextLink>
            </div>
        </div>
    );
};
