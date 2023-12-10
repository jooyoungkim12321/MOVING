const API_KEY = "802f1bd51dca47d68d95c3741283bbaa";
const BASE_URL = "https://api.themoviedb.org/3";

interface IInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_data: string;
  title: string;
  video: boolean;
  vote_count: number;
}

export interface IPopularMovies {
  page: number;
  results: IInfo[];
}

export interface ISearch {
  page: number;
  results: IInfo[];
}

export interface ITrendingWekk {}

export function getPopularMovies() {
  return fetch(
    `${BASE_URL}/movie/popular?language=ko&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
}

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

export function CollectionSearch(keyword: any) {
  return fetch(
    `${BASE_URL}/search/collection?api_key=${API_KEY}&query=${keyword}&language=ko&page=1&include_adult=false&`
  ).then((response) => response.json());
}

export function getTrendingWeek() {
  return fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ko`
  ).then((response) => response.json());
}
