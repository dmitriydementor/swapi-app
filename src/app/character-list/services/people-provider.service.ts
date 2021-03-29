import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../..//core/models/base-response';
import { API_URL } from '../../core/constants/app.constants';
import { Character, Film, Spiece } from '../models'

@Injectable()
export class PeopleProviderService {

  constructor(
    private http: HttpClient,
  ) { }

  getPeople(page?: number) {
    let params = new HttpParams();
    if (page) {
        params = params.set('page', `${page}`);
    }
    return this.http.get<BaseResponse<Character>>(`${API_URL}/people`, { params });
  }

  getCharacter(id: number | string) {
    return this.http.get<Character>(`${API_URL}/people/${id}`);
  }

  getFilms() {
    return this.http.get<BaseResponse<Film>>(`${API_URL}/films`);
  }

  getSpecies() {
    return this.http.get<BaseResponse<Spiece>>(`${API_URL}/species`);
  }
}
