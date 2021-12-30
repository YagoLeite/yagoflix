const API_KEY = "4c74afefb15679e94fa555870ddb4294";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const myJSON = await request.json();
  return myJSON;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "trending",
        title: "Trending",
        item: await basicFetch(
          `/trending/all/week?language=en-US&api_key=${API_KEY}`
        ),
      },
      {
        slug: "originals",
        title: "Originals from Netflix",
        item: await basicFetch(
          `/discover/tv?with_network=213&language=en-US&api_key=${API_KEY}`
        ),
      },
      {
        slug: "top rated",
        title: "Top Rated",
        item: await basicFetch(
          `/movie/top_rated?language=en-US&&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Action",
        item: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        item: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        item: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        item: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        item: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=en-US&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
