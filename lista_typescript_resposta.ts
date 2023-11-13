//Questão 01

const ehPositivo = (num:number):boolean => (num > 0) ? true : false;

let numeroIn = Number(prompt("Insira um número: "));
console.log(ehPositivo(numeroIn));

//Questão 02

type User = {
    name: string;
    age: number;
    email: string;
}

//Questão 03

function generateUser(props: User) {
    props.name = String(prompt("Insira nome: "));
    props.age = Number(prompt("Insira idade: "));
    props.email = String(prompt("Insira email: "));

    return props
}

//Questão 04

type Meal = {
    name: string;
    description: string;
    priceInCents: number;
}

function showMeal(prop:Meal): void{
    console.log(prop.name);
    console.log(prop.description);
    console.log(prop.priceInCents);
}

//Questão 05
//Não consegui resolver no momento

let lista: string[] = ["Struct","8","Typescript","4","7","10","10","3"];

function filterPairs(num:string[]){
    let aux:number[] = [0,0,0,0,0,0,0,0]
    let returnlist:number[] = [0];
    for(let i in num){
        aux[i] = Number(num[i]);
        //console.log(aux[i])
        if(typeof(aux[i]) == "number" && aux[i] % 2 === 0){
            returnlist.unshift(aux[i]);
            console.log(returnlist[i])
        };
        };
    };
}
