import { Service,Injectable,signal,computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemartComponent {

    popularItems = signal([
        {id:1, name:'Max Potion',price:2500, description:'A spray-type medicine for wounds. It completely resotres the max HP of a single Pokemon,'},
        {id:2, name:'Full Restore',price:3000, description:'A medicine that can be used to fully restore the HP of a single Pokemon and heal any status condition it has.'},
        {id:3, name:'Ultra Ball',price:1200, description:'A high-performance Pokeball that provides a higher catch rate than a Great Ball.'},
        {id:4, name:'Quick Ball',price:100, description:'A somewhat different Poké Ball that has a more effective catch rate if used at the start of a wild encounter.'},
        {id:5, name:'Max Repel',price:900, description:'An item that prevents weak wild Pokémon from appearing for 250 steps after its use.'},
        {id:6, name:'LeftOvers',price:20000, description:'An item to be held by a Pokémon. A small amount of HP is organically restored to the holder at every turn.'},
        {id:7, name:'Life Orb',price:50000, description:'An item to be held by a Pokemon. It boosts the power of moves, but HP is decreased with each hit.'},
        {id:8, name:'Choice Scarf', price:50000, description:'An item to be held by a Pokemon. It boosts Speed but only allows the use of a single move.'},
        {id:9, name:'Focus Sash',price:50000, description:'An item to be held by a Pokemon. If it has full HP, it will endure a potential KO attack with 1 HP'},
        {id:10, name:'Heavy-Duty Boots',price:20000,description:'An item to be held by a Pokemon. These boots prevent the holder from taking damage or effects from traps on the battlefield.'}
    ])

    private cartItems =signal<any[]>([]);
    cart = this.cartItems.asReadonly();

    totalPrice = computed(()=>
        this.cartItems().reduce((sum,item)=> sum + item.price,0)
    );

    addToCart(product:any){
        this.cartItems.update(current =>[...current,product]);
    }

    clearCart(){
        this.cartItems.set([]);
    }



}


/*
Objective here:
Player should be able to add an item to their cart based on
the popular item (So a popular Item catalogue(10 Items))

Items should have a price, name and information.

Compute the total cost in the cart too.

*/ 




