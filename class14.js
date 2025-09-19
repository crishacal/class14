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
/*
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

//Update pages by multiplying it by 2.
function atualizarPaginas(livros){
    livros.paginas *= 2;
    return livros.paginas;
}
console.log(atualizarPaginas(livro));
console.log(livro.paginas);

//Add a property actors (array of names). Use .join(", ") to print all actors.
livro.atores = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf"];
console.log(livro.atores.join(", "));

//Use Object.keys(movie) to show all the keys.
console.log(Object.keys(livro));

//Use Object.values(movie) and find the type of each value with typeof.
console.log(Object.values(livro));
console.log(typeof livro.titulo);
console.log(typeof livro.autor);
*/

/* Parte 3*/
//Create an object company with name, location, and employees (array of names). Print the number of employees
const empresa = {
    nome: "CrisSoft",
    localizacao: "Goiânia",
    funcionarios: ["Ana", "Carlos", "Mariana", "Pedro", "Lucas"]
};
console.log(empresa.funcionarios.length);

//Add a nested object ceo with name and age. Print the ceo name reversed using string functions.
empresa.ceo = { nome: "João", idade: 45 };
console.log(empresa.ceo.nome.split("").reverse().join(""));

//Update the location by replacing "Old" with "New" using string functions.
empresa.localizacao = empresa.localizacao.replace("Goiânia", "Anapolis");
console.log(empresa.localizacao);

//Delete the ceo property.
delete empresa.ceo;
console.log(empresa);
console.log(Object.keys(empresa));

//Create an object recipe with name, ingredients (array), and time. Print the last ingredient in uppercase.
const receita = {
    nome: "Bolo de chocolate",
    ingredientes: ["farinha", "açúcar", "ovos", "chocolate", "leite"],
    tempo: 60
};
console.log(receita.ingredientes.at(-1).toUpperCase());

//Add a property difficulty set to "easy". Convert it to lowercase before printing.
receita.dificuldade = "fácil";
console.log(receita.dificuldade.toLowerCase());

//Use Object.entries(recipe) to print all pairs. Then count how many keys it has using .length.
console.log(Object.entries(receita));
console.log(Object.entries(receita).length);

//Destructure the recipe to extract name and time. Print:
const { nome, tempo } = receita;
console.log(`O tempo de preparo do ${nome} é de ${tempo} minutos.`)

/*Create an object classroom with teacher and students (array of objects: {name, grade}).
Print the grade of the student whose name includes "Jo".*/
const salaDeAula = {
    professor: "Ana",
    alunos: [
        { nome: "João", nota: 8.5 },
        { nome: "Maria", nota: 9.0 },
        { nome: "Pedro", nota: 7.5 },
        { nome: "Ana", nota: 8.0 }
    ]
};
let alunoAn = salaDeAula.alunos.filter(aluno => aluno.nome.includes("o"));
console.log(alunoAn[0].nota);

//Loop through the students array and print each student’s name in uppercase along with their grade
salaDeAula.alunos.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tirou nota ${aluno.nota}`);
})

//Use Object.entries(recipe) to print all key–value pairs.
console.log(Object.entries(salaDeAula));