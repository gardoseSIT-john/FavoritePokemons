import { Component,inject } from '@angular/core';
import { PokemartComponent } from '../../PokemartComponent/pokemart-component';


@Component({
  imports: [],
  selector: 'app-pokemart-display-component',
  styleUrl: './pokemart-display-component.css',
  templateUrl: './pokemart-display-component.html',
})
export class PokemartDisplayComponent {
pokemartService = inject(PokemartComponent);

}
