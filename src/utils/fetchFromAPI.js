import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const HOST = import.meta.env.VITE_RAPID_API_HOST;
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": HOST,
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
