import { Person } from './person';

export interface Movie {
  countries: string[];
  directors: Person[];
  genres: string[];
  idIMDB: string;
  languages: string[];
  metascore: string;
  originalTitle: string;
  plot: string;
  ranking: number;
  rated: string;
  rating: string;
  releaseDate: string;
  runtime: string;
  simplePlot: string;
  title: string;
  type: string;
  urlIMDB: string;
  urlPoster: string;
  votes: string;
  writers: Person[];
  year: string;
}
