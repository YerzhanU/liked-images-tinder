import axios from 'axios';

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(`/api/proxy`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from SerpApi:', error);
    throw error;
  }
};
