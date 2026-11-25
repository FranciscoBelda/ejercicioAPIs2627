import {Component, inject, input} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {PokemonTCGService} from '../../../../services/pokemon-tcg-service';

@Component({
  imports: [],
  selector: 'app-pokemon-tcgdetail-component',
  styleUrl: './pokemon-tcgdetail-component.css',
  templateUrl: './pokemon-tcgdetail-component.html',
})
export class PokemonTCGDetailComponent {
  id = input.required<string>();
  private readonly pokeService: PokemonTCGService = inject(PokemonTCGService);

  resourcePokemon = rxResource({
    params: () => ({id: this.id()}),
    stream: ({params}) => this.pokeService.getPokemonCard(params.id)
  })
}
