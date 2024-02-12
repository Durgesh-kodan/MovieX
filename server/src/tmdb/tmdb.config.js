const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getURl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getURl };
