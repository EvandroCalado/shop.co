import axios from 'axios';

export const customFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
