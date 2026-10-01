import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokemartDisplayComponent} from './components/pokemart-Display-Component/pokemart-display-component/pokemart-display-component';
import { CartDisplayComponent } from './components/cart-Display-Component/cart-display-component/cart-display-component';
import { FavPokemonDisplayComponent } from './components/favPokemon-Display-Component/fav-pokemon-display-component/fav-pokemon-display-component';

@Component({
  imports: [RouterOutlet,PokemartDisplayComponent,CartDisplayComponent,FavPokemonDisplayComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('FavoritePokemons');
}
