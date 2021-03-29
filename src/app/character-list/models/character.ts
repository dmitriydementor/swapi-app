import { Gender } from './gender.enum';

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string; // "2014-12-09T13:50:51.644000Z";
  edited: string; // "2014-12-20T21:17:56.891000Z";
  url: string;
}
