import axios from "axios";
import { API_KEY } from "./ApiKey";

const apiBaseUrl = "https://newsapi.org/v2";
"https://newsapi.org/v2/top-headlines?country=us&apiKey=0429b374ed754c81adb2dcfcd9e1a1b9"

const breakingNewsUrl = `${apiBaseUrl}/top-headlines?country=us&apiKey=${API_KEY}`;
const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

const discoverNewsUrl = (discover) =>
  `${apiBaseUrl}/top-headlines?country=us&category=${discover}&apiKey=${API_KEY}`;


const searchNewsUrl = (query,params) =>
  `${apiBaseUrl}/everything?q=${query}&apiKey=${API_KEY}`;

 
const newsApiCall = async (endpoints, params) => {
  const options = {
    method: "GET",
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};


  
export const fetchBreakingNews = async () => {
  return await newsApiCall(breakingNewsUrl);
};

export const fetchRecommendedNews = async () => {
  return await newsApiCall(recommendedNewsUrl);
};

export const fetchDiscoverNews = async (discover) => {
  return await newsApiCall(discoverNewsUrl(discover));
};


export const fetchSearchNews = async (query) => {
  const endpoint = searchNewsUrl(query);
  return await newsApiCall(endpoint);
};
