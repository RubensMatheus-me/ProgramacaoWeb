/*
var nome = "Rubens";
var nome = "Daniels";


const pessoa = {nome: "Rubens", idade:19};
pessoa.nome = "João";

for(let x =0, y = 9; x<10; x++, y--) {
    console.log("X: "+ x +" Y: " +y);
}

console.log(nome);
console.log(pessoa);
console.log(cumprimentar("Maria"));
console.log(somar(10, 20));

function cumprimentar(nome) {   
    return `Olá, ${nome}!`;
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

const somarArrow = (valor1, valor2) => valor1 + valor2;
console.log(somarArrow(5, 10));

const somarArrowDifernete = (valor1, valor2) => {
    valor1 += 10;
    return valor1 + valor2;
}   
console.log(somarArrowDifernete(5, 10));

let frutas = ["Maça", "Banana", "Batata"];
console.log(frutas[1]); 

frutas.forEach(fruta => {
    console.log(fruta);
})
frutas.map((fruta, idx) => {
    console.log(idx + " " +fruta) 
});

let inputvalue1 = document.getElementById("value1");
inputvalue1.addEventListener('mouseover', function() {
    alert("ola"); 
});

*/
function somar() {
    let valor = document.getElementById('value1').value;
    let valor2 = document.getElementById('value2').value;
    let sum = parseFloat(valor) + parseFloat(valor2);
    document.getElementById("resultado").innerText = sum;
    navigator.clipboard.writeText(sum);   
}
function gerarPDF() {
    var doc = new jsPDF();
    doc.text(document.getElementById('nameDocument').value , 10, 10);
    doc.save(document.getElementById('nameDocument').value);
}

let = file = document.getElementById('file');
function readerFile() {
    let filename = file.files[0].name;
    console.log(filename);
}


//const result = input1 + input2;