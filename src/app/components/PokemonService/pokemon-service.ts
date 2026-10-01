import { Service,Injectable,signal,computed } from '@angular/core';


@Injectable({providedIn: 'root'})
export class PokemonService {
    /* 
    List favorite pomemons in these regions.
    - Johto
    - Kanto
    -Hoenn
    */

    JohtoPokemons = signal([
        {name:'Typhlosion',type:'Fire', heldItem:'Berry',briefDescription:'A ferocious Pokémon that rubs its blazing fur together to cause massive explosions. If its rage peaks, its body becomes so hot that anything that touches it will instantly go up in flames.'},
        {name:'Ampharos',type:'Electric',heldItem:'Magnet',briefDescription:'A gentle creature that likes dark places, using the tip of its tail to shed light onto its surroundings. This tail glows so brightly it can be seen from far away and has been treasured since ancient times as a beacon.'},
        {name:'Heracross',type:'Bug/Fighting',heldItem:'Coda Berry',briefDescription:'This powerful beetle is usually docile, but if it is disturbed while sipping sweet honey, it will aggressively chase off the intruder by thrusting its prized horn under their belly to flip them.'},
        {name:'Houndoom',type:'Dark/Fire',heldItem:'Black Glasses',briefDescription:'A sinister canine whose eerie, ominous howls cause other Pokémon to shiver and head straight back to their nests. If you are burned by the toxic flames it shoots from its mouth, the pain will never go away.'},
        {name:'Corsola',type:'Water/Rock',heldItem:'Hard Stone',briefDescription:'A coastal Pokémon that continuously sheds and grows coral branches, which are highly prized by locals for their beauty. In some south sea nations, people even live in communities built directly on top of groups of these Pokémon'},
        {name:'Donphan',type:'Ground',heldItem:'Soft Sand',briefDescription:'Known as the Armor Pokémon, it possesses sharp, hard tusks and a rugged, tire-like hide that is so incredibly tough a normal attack wont even leave a scratch on it. It attacks by curling its body into a ball and violently rolling like a wheel, delivering a tackle powerful enough to completely knock down a house'}
    ])

    KantoPokemons = signal([
        {name:'Charizard',type:'Fire/Flying',heldItem:'Charcoal',briefDescription:'A fiercely competitive dragon-like Pokémon that flies around the sky in search of powerful opponents. It breathes intense fire that is hot enough to melt boulders, and its flames grow significantly hotter and burn more fiercely as it gains experience in battle.'},
        {name:'Sandslash',type:'Ground',heldItem:'Hard Stone',briefDescription:'A Pokémon that lives in desert areas and is known for its ability to dig tunnels quickly. It uses its sharp claws to defend itself and can roll into a ball to protect itself from predators.'},
        {name:'Gengar',type:'Ghost/Poison',heldItem:'Black Sludge',briefDescription:'A mischievous Pokémon that is known for its ability to hide in shadows and play pranks on people. It can pass through walls and is often seen lurking in dark places, waiting to scare unsuspecting victims.'},
        {name:'Machamp',type:'Fighting',heldItem:'Muscle Band',briefDescription:'A Pokémon that is known for its incredible strength and speed. It has four muscular arms that allow it to perform powerful punches and throws, making it a formidable opponent in battle.'},
        {name:'Starmie',type:'Water/Psychic',heldItem:'Mystic Water',briefDescription:'A star-shaped Pokémon that is known for its ability to spin rapidly and create powerful whirlpools. It can also use its psychic powers to communicate with other Pokémon and humans, making it a valuable ally in battle.'},
        {name:'Dragonite',type:'Dragon/Flying',heldItem:'Dragon Fang',briefDescription:'A rare and powerful Pokémon that is known for its incredible speed and agility. It can fly at high speeds and is capable of delivering devastating attacks with its powerful wings and tail.'}
    ])

    HoennPokemons = signal([
        {name:'Sceptile',type:'Grass',heldItem:'Miracle Seed',briefDescription:'A Pokémon that is known for its incredible speed and agility. It can move quickly through forests and is capable of delivering powerful attacks with its sharp leaves and tail.'},
        {name:'Sharpedo',type:'Water/Dark',heldItem:'Sharp Beak',briefDescription:'A fierce and aggressive Pokémon that is known for its sharp teeth and powerful jaws. It can swim at high speeds and is capable of delivering devastating attacks with its powerful bite.'},
        {name:'Metagross',type:'Steel/Psychic',heldItem:'Metal Coat',briefDescription:'A Pokémon that is known for its incredible strength and durability. It has a tough, metallic body that can withstand powerful attacks and is capable of delivering devastating blows with its powerful limbs.'},
        {name:'Slaking',type:'Normal',heldItem:'Leftovers',briefDescription:'A Pokémon that is known for its incredible laziness and slow movements. It spends most of its time sleeping and is capable of delivering powerful attacks with its massive body when it is awake.'},
        {name:'Altaria',type:'Dragon/Flying',heldItem:'Dragon Fang',briefDescription:'A Pokémon that is known for its incredible speed and agility. It can fly at high speeds and is capable of delivering devastating attacks with its powerful wings and tail.'},
        {name:'Absol',type:'Dark',heldItem:'Black Glasses',briefDescription:'A Pokémon that is known for its incredible speed and agility. It can move quickly through forests and is capable of delivering powerful attacks with its sharp claws and tail.'}
    ])
}
