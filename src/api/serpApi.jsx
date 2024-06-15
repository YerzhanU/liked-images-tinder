import axios from 'axios';

const API_KEY = '280587d31d387104738faab45918eb4cbdbb1be974f9ef38fb662df2af746d47';

export const fetchImages = async (query) => {
  try {
    const params = {
      engine: 'google',
      api_key: API_KEY,
      q: query,
      tbm: 'isch',  // tbm parameter for image search
      location: 'Austin, Texas',
    };
  
    const response = await axios.get('/api/search', { params });
    return response.data.images_results;
  } catch (error) {
    console.error('Error fetching images from SerpApi:', error);
    throw error;
  }
};
