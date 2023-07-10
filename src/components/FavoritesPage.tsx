import { useState, useEffect } from 'react';
import GameCard, { Game } from './GameCard';

function FavoritesPage() {
    const [favorites, setFavorites] = useState<Game[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const handleUnfavorite = (id: number) => {
        const newFavorites = favorites.filter((game) => game.id !== id);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    return (
        <div>
            {favorites.map((game, index) => (
                <GameCard
                    key={game.id || index}
                    id={game.id}
                    title={game.title}
                    thumbnail={game.thumbnail}
                    genre={game.genre}
                    platform={game.platform}
                    developer={game.developer}
                    short_description={game.short_description}
                    onUnfavorite={handleUnfavorite}
                />
            ))}
        </div>
    );
}

export default FavoritesPage;