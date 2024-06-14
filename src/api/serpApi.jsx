import axios from 'axios';

const API_KEY = '280587d31d387104738faab45918eb4cbdbb1be974f9ef38fb662df2af746d47';

export const fetchImages = async (query) => {
  const params = {
    engine: 'google',
    api_key: API_KEY,
    q: query,
    tbm: 'isch',  // tbm parameter for image search
    location: 'Austin, Texas',
  };

  const response = await axios.get('/api/search', { params });
  console.log(response);
  return response.data.images_results; // Adapt this based on actual JSON response structure
};
