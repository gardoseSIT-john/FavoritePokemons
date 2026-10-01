import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavPokemonDisplayComponent } from './fav-pokemon-display-component';

describe('FavPokemonDisplayComponent', () => {
  let component: FavPokemonDisplayComponent;
  let fixture: ComponentFixture<FavPokemonDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavPokemonDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavPokemonDisplayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
