

export const pokemonIds = [12,43,25,35];


interface Pokemon  { 
    id:number;
    name : string;
    poder?: string;
}

export const  picachu:Pokemon = {
    id: 1,
    name : 'Picachu',
    poder: 'Electricidad'
}

export const bolbasur : Pokemon = {
    id: 43,
    name : 'Bolbasur',
    poder: 'Hidratación'
}


export const pokemons:  Pokemon[] = [];

pokemons.push(picachu , bolbasur);

console.log(picachu, bolbasur);
