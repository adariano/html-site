//Questão 01
var ehPositivo = function (num) { return (num > 0) ? true : false; };
var numeroIn = Number(prompt("Insira um número: "));
console.log(ehPositivo(numeroIn));
//Questão 03
function generateUser(props) {
    props.name = String(prompt("Insira nome: "));
    props.age = Number(prompt("Insira idade: "));
    props.email = String(prompt("Insira email: "));
    return props;
}
