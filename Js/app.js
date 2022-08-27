const materia = document.getElementById('materia');
const puntos = document.getElementById('puntos');
const btnAceptar = document.getElementById('btnAceptar');
const btnCancelar = document.getElementById('btnCancelar');
const creditos = document.getElementById('creditos');
const btnIngresar = document.getElementById('ingresar');
const containerIngresar = document.getElementById('containerCant');
const cantMaterias = document.getElementById('cantMaterias');
const tabla = document.querySelector('tbody');
let INDICE = document.getElementById('indice');
let divContainer = document.getElementById('divContainer');
let multip;
let totalPuntos = 0;
let totalCreditos = 0;
let totalIndice = 0;
let contador = 1;

let CANT_MATERIAS;


btnIngresar.addEventListener('click', (e) => {
    e.preventDefault();

    CANT_MATERIAS = cantMaterias.value;

    if(CANT_MATERIAS != '') {
        
        containerIngresar.style.display = 'none'

        divContainer.style.display = 'block'

    } else {

        swal.fire({

            icon: 'info',
            text:'Ingresa una cantidad de materias',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },

            hideClass:{
                popup: 'animate__animated animate__fadeOut'
            }}); 
    };
});


btnAceptar.addEventListener('click', (e) => {
    e.preventDefault();

    if(contador <= CANT_MATERIAS) {

        const MATERIA = materia.value;
        const CREDITOS = creditos.value;
        const PUNTOS = puntos.value;

       valorVacio(MATERIA, CREDITOS, PUNTOS)

    } else {

        swal.fire({

            icon: 'warning',
            text:'Esta es la cantidad de materias que ingresaste',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },

            hideClass:{
                popup: 'animate__animated animate__fadeOut'
            }}); 
    };
});

function indice(puntos) {

    let cal_indice = 0

    switch(puntos) {
        case 'A': cal_indice = 4
        break;

        case 'B': cal_indice = 3
        break;

        case 'C': cal_indice = 2
        break;

        case 'F': cal_indice = 0
        break;

        default:
            cal_indice = 0
    };

    return cal_indice;
};

function calculo(MATERIA, CREDITOS, PUNTOS) {
    
    const tr = document.createElement('tr');
        
    materia.value = '';
    creditos.value = '';
    puntos.value = '';


    tr.innerHTML = `

        <td>${CREDITOS}</td>
        <td>${MATERIA}</td>
        <td>${PUNTOS}</td>
        
    `;

    tabla.appendChild(tr);

    const contenido = indice(PUNTOS);

    multip = contenido * CREDITOS;

    totalPuntos += multip;

    totalCreditos += Number(CREDITOS);

    if(contador == CANT_MATERIAS) {

        totalIndice = totalPuntos / totalCreditos;

        INDICE.textContent = totalIndice;
    }

    contador++;

};

function valorVacio(MATERIA, CREDITOS, PUNTOS) {
    
    if(MATERIA != '' && CREDITOS != '' && PUNTOS != '') {

        valorValido(MATERIA, CREDITOS, PUNTOS)

    } else {

        swal.fire({

            icon: 'info',
            text:'Llena todos los campos',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },

            hideClass:{
                popup: 'animate__animated animate__fadeOut'
            }})
    };
}

function valorValido(MATERIA, CREDITOS, PUNTOS) {

    const puntos = PUNTOS.toLowerCase();

    if(isNaN(CREDITOS)) {

        swal.fire({

            icon: 'warning',
            text:'Solo se permiten numeros en el campo de creditos',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },

            hideClass:{
                popup: 'animate__animated animate__fadeOut'
            }})

    } else if(puntos != "a" && puntos != "b" && puntos != "c" && puntos != "f") {

        swal.fire({

            icon: 'warning',
            text:'Valor de indice no valido',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },

            hideClass:{
                popup: 'animate__animated animate__fadeOut'
            }});

    } else {

        calculo(MATERIA, CREDITOS, puntos.toUpperCase())
    }
};