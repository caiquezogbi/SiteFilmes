const API_KEY = '4a51f9298b80258edc7799da1c9fa225';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comedia
- terror
- romance
- documentario
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json =  await req.json();
    return json;
}

export default {
getHomeList: async () => {
    return [
        {
            slug: 'originals',
            title: 'originais do site',
            items: await basicFetch (`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'recomendados para vc',
            items: await basicFetch (`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'em alta',
            items: await basicFetch (`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'ação',
            items: await basicFetch (`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'comedia',
            items: await basicFetch (`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'terror',
            items: await basicFetch (`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'romance',
            items: await basicFetch (`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'documentarios',
            items: await basicFetch (`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },

    ];
}

}