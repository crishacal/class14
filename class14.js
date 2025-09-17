/*
//Create an object car with properties: brand, model, year. Access and print the brand.
const car = {
    brand: "Toyota", 
    model: "Corola", 
    year: "2023",
    color: ['branco', 'azul', 'prata'],

};
console.log(car.brand);

//Print the brand in uppercase using a string function.
function printBrand(obj){
    console.log(obj.toUpperCase());
}
printBrand(car.brand);

//Add a property colors (an array of at least 3 colors).
//Print the last color.
console.log(car.color.at(-1));

//Update the year by adding +1 to it.
car.year = String(Number(car.year) + 1);
console.log(car.year);

//Check if the color red exists in the colors property.
console.log(car.color.includes('vermelho'));

//Remove the colors property
delete car.color;
console.log(Object.keys(car));

//Print the first 3 digits of the brand
console.log(car.brand.slice(0, 3));

//Create an object student with a name property and nested property grades (math, english). Print the math grade
const aluno = {
    nome: "Pedro",
    notas: {matematica: 8.0, Ingles: 7.8}
};
console.log(aluno.notas.matematica);

//Use Object.keys(student) to print all the keys
console.log(Object.keys(aluno));

//Use Object.values(student) to print all the values.
console.log(Object.values(aluno));
*/

/*PARTE 2*/
//Create an object book with title, author and pages
//Add an array property keywords (3 words).
const livro = {
    titulo: "O Senhor dos Aneis",
    autor: "J. R. R. Tolkien",
    paginas: 500,
    keywords: ["aventura", "romance", "clássico"]
};

//Print the title in lowercase.
console.log(livro.titulo.toLowerCase());

//Check if "magic* exists;
console.log(livro.keywords.includes("magic*"));

//Check the position of romance in the keywords property
console.log(livro.keywords.indexOf("romance"));

//Select all the book titles the start with the letter A
console.log(livro.titulo.toLowerCase().startsWith("a"));

//Select only books with more than 200 pages
function livrosPagina(livros){
    if (livros.paginas > 200){
        return "sim";
    }else{
        return "Não";
    }
}
console.log(livrosPagina(livro));

//Destructure book to extract title print
const {titulo, paginas} = livro;
console.log(`O livro ${titulo} tem ${paginas} páginas.`);

//