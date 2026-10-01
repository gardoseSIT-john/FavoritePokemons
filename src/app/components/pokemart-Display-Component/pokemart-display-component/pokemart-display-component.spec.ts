import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemartDisplayComponent } from './pokemart-display-component';

describe('PokemartDisplayComponent', () => {
  let component: PokemartDisplayComponent;
  let fixture: ComponentFixture<PokemartDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemartDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemartDisplayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
