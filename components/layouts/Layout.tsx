import {FC, PropsWithChildren, ChangeEvent} from 'react';
import Head from 'next/head';

import {Navbar} from 'components/ui';

interface Props {
    title?: string;
    handleChange?: ChangeEvent<HTMLInputElement> | any;
    search?: string;
    total?: number;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({
    children,
    title,
    handleChange,
    search,
    total
}) => (
    <>
        <Head>
            <title>{title || 'Pokémon App'}</title>
            <meta name="author" content="Juan Ignacio Bogado" />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            <meta
                name="description"
                content={`Información sobre el pokémon ${title}`}
            />

            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta
                property="og:description"
                content={`Esta es la página sobre ${title}`}
            />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar
            {...{
                handleChange,
                search,
                total
            }}
        />

        <main style={{padding: '0 20px'}}>{children}</main>
    </>
);
