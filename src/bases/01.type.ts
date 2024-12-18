export const name:string = 'David';
export const age:number = 23;
export const isValid:boolean =true;

export const templateString = ` Esto es un String 
Multilinea
puede tener
" dobles
'simples
inyectar valores ${ name }
números: ${ age }
boleanos ${ isValid }
`
console.log(templateString);
