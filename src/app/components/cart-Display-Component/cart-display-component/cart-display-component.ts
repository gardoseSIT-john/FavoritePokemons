import { Component, inject } from '@angular/core';
import { PokemartComponent } from '../../PokemartComponent/pokemart-component';

@Component({
  imports: [],
  selector: 'app-cart-display-component',
  styleUrl: './cart-display-component.css',
  templateUrl: './cart-display-component.html',
})
export class CartDisplayComponent {
  pokemartService = inject(PokemartComponent);
}
