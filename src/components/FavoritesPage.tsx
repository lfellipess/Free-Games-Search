import { useState, useEffect } from 'react';
import GameCard, { Game } from './GameCard';

function FavoritesPage() {
    const [favorites, setFavorites] = useState<Game[]>([]);
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
            setFavoriteIds(JSON.parse(storedFavorites).map((game: Game) => game.id));
        }
    }, []);

    const handleUnfavorite = (id: number) => {
        const newFavorites = favorites.filter((game) => game.id !== id);
        setFavorites(newFavorites);
        setFavoriteIds(newFavorites.map((game) => game.id));
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const handleFavorite = (id: number) => {
        const game = favorites.find((game) => game.id === id);
        if (game) {
            setFavoriteIds([...favoriteIds, id]);
        }
    };

    return (
        <div>
            {favorites.map((game) => (
                <GameCard
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    thumbnail={game.thumbnail}
                    genre={game.genre}
                    platform={game.platform}
                    developer={game.developer}
                    short_description={game.short_description}
                    isFavorite={favoriteIds.includes(game.id)}
                    onFavorite={handleFavorite}
                    onUnfavorite={handleUnfavorite}
                />
            ))}
        </div>
    );
}

export default FavoritesPage;