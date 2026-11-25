import {Component, inject, signal} from '@angular/core';
import {PokemonTCGService} from '../../../../services/pokemon-tcg-service';
import {rxResource, toSignal} from '@angular/core/rxjs-interop';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-pokemon-tcglist-component',
  styleUrl: './pokemon-tcglist-component.css',
  templateUrl: './pokemon-tcglist-component.html',
})
export class PokemonTCGListComponent {
  private readonly pokeService: PokemonTCGService = inject(PokemonTCGService);
  currentPage = signal(1);

  resourcePokemon = rxResource({
    params: () => ({page: this.currentPage()}),
    stream: ({params}) => this.pokeService.getPokemonCards(params.page)
  })



}
