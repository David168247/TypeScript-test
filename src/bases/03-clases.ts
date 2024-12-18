import axios from "axios";
import { Move, Pokeapiresponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    
     get imageUrl() : string {
        return `https://pokemon.com/${ this.id }.jpg`;

     }
    
    constructor(
        public readonly name: string,
        public id: number,
    ){};

    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);     
    }
    
    async getMovies(): Promise<Move[]> { 

        const { data } = await axios.get<Pokeapiresponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves[0].move.name);
        return data.moves;  
        
    }
}

export  const charmander = new Pokemon('charmander',2);

// charmander.scream();
// charmander.speak();

console.log(charmander.getMovies());
