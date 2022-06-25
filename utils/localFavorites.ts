export const getFavorites = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]');

export const toggleFavorite = (id: number) => {
    let favorites: number[] = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const existInFavorite = (id: number): boolean => {
    const favorites: number[] = getFavorites();

    return favorites.includes(id);
};