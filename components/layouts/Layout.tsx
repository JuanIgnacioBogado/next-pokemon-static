import {FC, PropsWithChildren} from 'react';
import Head from 'next/head';

import {Navbar} from 'components/ui';

interface Props {
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokémon App'}</title>
                <meta name="author" content="Juan Ignacio Bogado" />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta
                    name="description"
                    content={`Información sobre el pokémon ${title}`}
                />

                <meta
                    property="og:title"
                    content={`Información sobre ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la página sobre ${title}`}
                />
                <meta
                    property="og:image"
                    content={`${origin}/img/banner.png`}
                />
            </Head>

            <Navbar />

            <main style={{padding: '0 20px'}}>{children}</main>
        </>
    );
};
