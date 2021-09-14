//Promesas

/*let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;//ya sea tru o false se cumple la promesa
    if(expresion)
        resolver('Resolvio correcto');
        else
        rechazar('Se produjo un error');
});

//miPromesa
//.then( valor => console.log(valor), 
//error => console.log(error));//cualquiera de las dos funciones se puede utilizar
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));//cualquiera de las dos funciones se puede utilizar


let promesa = new Promise((resolver) => {
    //console.log('Inicio Promesa');
    setTimeout( () => resolver('Saludos con promesa y timeout'), 3000);
    //console.log('Fin Promesa');
});

//promesa.then(valor => console.log(valor));*/

//Promesas con el metodo async
//async indica que una funcion regresa una promesa

/*async function miFuncionConPromesa(){
    return 'saludos con promesa y async' ;
}

miFuncionConPromesa().then(valor => console.log(valor));*/


//Metodo await y async con promesas

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await');
    });

    console.log(await miPromesa);

}


//funcionConPromesaYAwait();

//Funcion con Promesa Await (promesa, await, async y setTimeout)

async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver => {
        console.log('Inicia Funcion');
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin Funcion');
}

funcionConPromesaAwaitTimeout();































































































