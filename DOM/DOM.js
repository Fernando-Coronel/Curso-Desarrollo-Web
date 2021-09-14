//Metodo get element by ID (ID)
/*console.log('*Metodo get element by ID (ID)');
let cabecero = document.getElementById('cabecero');
console.log(`Valor Cabecero: ${cabecero.innerHTML}`);//imprimir con template literal

let parrafo = document.getElementById('parrafo');
console.log(`Valor Parrafo: ${parrafo.innerHTML}`);//imprimir con template literal

parrafo.innerHTML = 'Nuevo Valor del parrafo';
cabecero.innerHTML = 'Nuevo Valor Cabecero';

//Metodo get element by tagName (etiquetas)
console.log('\n*Metodo get element by tagName (etiquetas)');
let parrafos = document.getElementsByTagName('p');
console.log(`Numero de parrafos: ${parrafos.length}`);
for (let i = 0; i < parrafos.length; i++) {
   console.log(`i:${i} - ${parrafos[i].innerHTML}`)
    
}

//Metodo get element by class name(clases)
console.log('\n*Metodo get element by class name(clases)');
let elementos = document.getElementsByClassName('amarillo');
console.log(`Numero de elementos: ${elementos.length}`);
for (let elemento of elementos) {
   console.log(`${elemento.innerHTML}`)
}

//Metodo query selector all
console.log('\n*Metodo query selector all');
let elementos1 = document.querySelectorAll('p.amarillo');
console.log(`Numero de elementos query: ${elementos1.length}`);
for (let elemento2 of elementos1) {
   console.log(`${elemento2.innerHTML}`)
}*/

//Manejo de Formularios
/*function mostrarValores(){
    let formulario = document.forms['formulario'];
    let texto = '';
    let nombre = formulario['nombre'];
    let apellido  = formulario['apellido'];
    texto = nombre.value + '<br/>' + apellido.value;
    document.getElementById('valores').innerHTML = texto;
}*/

//Cambiar imagen con el boton
/*function mostrar(){
    document.getElementById('imagen').src = 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
}*/

//Modificar los estilos con boton
/*function mostrar1(){
    document.getElementById('cabecero').style.color = 'red';
    document.getElementById('parrafo').style.color = 'green';
    document.getElementById('parrafo2').style.color = 'blue';
    document.querySelector('button').style.backgroundColor = 'green';
}*/
//Evento Onclick
/*function cambiarTexto(titulo){
    console.log(titulo);
    console.log(titulo.innerHTML);
    titulo.innerHTML = 'Cambiar titulo' ;
    console.log(titulo.innerHTML);
}*/

//Asociar eventos a elementos HTML con javascript
/*document.getElementById('titulo').onclick = cambiarTexto1;
function cambiarTexto1(){
    document.getElementById('mostrar').innerHTML = 'Nuevo Contenido';
    document.getElementById('titulo').style.color = 'red';
    document.getElementById('titulo').style.fontFamily = 'verdana';
    document.getElementById('mostrar').style.color = 'red';
    document.getElementById('mostrar').style.fontFamily = 'verdana';
    document.getElementById('titulo').style
}*/

//Manejo de evento onload(se ejecuta cuando carga la pagina web)
/*function entrar(){
    alert('Entrando a la pagina web');
    let texto = '';
    if(navigator.cookieEnabled){
        texto = 'Cookies Habilitadas';
    }else{
        texto = 'Cookies Deshabilitadas'
    }
    document.getElementById('mostrar').innerHTML = texto;
}*/

//Manejo de evento onchange(modifica un campo de texto o de un formulario, los pasa a mayusculas o dependiendo el metodo que se le quiera agregar)
    /*function convertir(nombreInput){
    nombreInput.value = nombreInput.value.toUpperCase();
    }
    
//Manejo de evento onmouseout y onmouseover
    function rojo(titulo){//esta es una funcion callback
        titulo.style.color = 'red';//pasar el mouse sobre el titulo cambia de color
    }
    
    function azul(titulo){//esta es una funcion callback
        titulo.style.color = 'blue';//al quitar el mouse del titulo pasa del color que tenia en el over a out
    }
    
    function amarillo(titulo){//esta es una funcion callback
        titulo.style.color = 'yellow';//pasar el mouse sobre el titulo cambia de color
    }
    
    function verde(titulo){//esta es una funcion callback
        titulo.style.color = 'green';//al quitar el mouse del titulo pasa del color que tenia en el over a out
    }*/

//Manejo de evento onmouse down y onmouse up
/*function naranja(titulo){//esta es una funcion callback
    titulo.style.color = 'orange';//click sostenido cambia a color naranja
}

function morado(titulo){//esta es una funcion callback
    titulo.style.color = 'purple';//Al quitar el clic sostenido pasa a color morado
}*/

//Manejo de eventos onfocus y onblur
/*function cambiar(elementoInput){//esta es una funcion callback
    elementoInput.style.background = 'yellow';//Aplica fondo en el input
}

function regresar(elementoInput){//esta es una funcion callback
    elementoInput.style.background = 'white';//Al hacer click en otro lugar regresa al color blanco
}*/

//Manejo de Evento addEventListener
/*document.getElementById('nombre1').addEventListener('focus', cambiar);//asi se aplicaria el DOM para no hacerlo directamente en HTML como los anteriores ejemplos
document.getElementById('nombre1').addEventListener('blur', regresar);


function cambiar(evento){//esta es una funcion callback
    let componente = evento.target;
    componente.style.background = 'yellow';//Aplica fondo en el input
}

function regresar(evento){//esta es una funcion callback
    evento.target.style.background = 'white';//Al hacer click en otro lugar regresa al color blanco
}*/

//Manejo de Evento addEventListener con funciones flecha(Pero es recomendable usar funciones callback)
/*document.getElementById('apellido1').addEventListener('focus', (evento) => {
    evento.target.style.background = 'pink';//Aplica fondo en el input
} );
document.getElementById('apellido1').addEventListener('blur', (evento) =>{
    evento.target.style.background = 'white';//Al hacer click en otro lugar regresa al color blanco
});*/

//Delegacion de Eventos(Aplica los cambios pero seria en todo lo que este adentro de la etiqueta HTML)
const forma = document.getElementById('forma');

forma.addEventListener('focus', (evento) => {
    evento.target.style.background = 'red';//Aplica fondo en el input
}, true );
forma.addEventListener('blur', (evento) =>{
    evento.target.style.background = 'white';//Al hacer click en otro lugar regresa al color blanco
}, true);


































































































































































































