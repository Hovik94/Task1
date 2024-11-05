import axios from 'axios';

export const fetchProducts = async (filters) => {
  const response = await axios.get('http://localhost:3004/products', { params: filters });
  return response.data;
};
