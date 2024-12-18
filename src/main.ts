import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
// import { name,age } from './bases/01.type.ts'
import { charmander } from './bases/03-clases.ts'
// import {  pokemonIds, pokemons } from './bases/02-object.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name }</h1>
    
  </div>
`
