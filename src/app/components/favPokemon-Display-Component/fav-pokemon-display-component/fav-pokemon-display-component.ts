import { Component,inject } from '@angular/core';
import {PokemonService} from '../../PokemonService/pokemon-service';

@Component({
  imports: [],
  selector: 'app-fav-pokemon-display-component',
  styleUrl: './fav-pokemon-display-component.css',
  templateUrl: './fav-pokemon-display-component.html',
})
export class FavPokemonDisplayComponent {
  pokemonService = inject(PokemonService);
}
