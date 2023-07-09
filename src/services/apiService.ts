import axios from "axios";

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': 'abc7fe1733msh47626c3f51efa97p1a713ejsnd84326a6810b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
});

export const fetchGames = async () => {
    const response = await apiClient.get('/games')
    return response.data;
};

export const fetchGamesByCategory =async (category: string) => {
    const response = await apiClient.get('/games', {
        params: {
            category
        }
    });

    return response.data;
};