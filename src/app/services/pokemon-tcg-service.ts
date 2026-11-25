import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {ApiResponseOnePokemonTCG, ApiResponsePokemonTCG, CardPokemonTCG} from '../common/models/pokemon-tcg.model';
import {environment} from '../environment/environment';

@Service()
export class PokemonTCGService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getPokemonCards(page:number): Observable<ApiResponsePokemonTCG | null>{
    console.log(page);
    return this.httpClient.get<ApiResponsePokemonTCG>(
      environment.URLBasePokemon /* + '?pageSize=20&page=' + page */
    ).pipe(
      catchError(err => {
        console.error(err);
        return of(null);
      })
    )
  }

  getPokemonCard(id: string): Observable<CardPokemonTCG | null>{
    return this.httpClient.get<ApiResponseOnePokemonTCG>(
      environment.URLBasePokemon + '/' + id
    ).pipe(
      map(res => res.data),
      catchError(err => {
        console.error(err);
        return of(null);
      })
    )
  }

}
