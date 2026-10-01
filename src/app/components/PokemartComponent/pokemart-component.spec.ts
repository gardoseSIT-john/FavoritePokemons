import { TestBed } from '@angular/core/testing';
import { PokemartComponent } from './pokemart-component';

describe('PokemartComponent', () => {
  let service: PokemartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemartComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
