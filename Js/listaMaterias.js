const tabla = document.querySelector('tbody');

const materias = [
    {
        'creditos' : 5,
        'materia': 'Calculo Integral',
        'Prerrequisito' : 'Calculo Diferencial'
    },

    {
        'creditos' : 4,
        'materia': 'Inteligencia Artificial',
        'Prerrequisito' : 'Programacion 1, Analisis y Diseno de Sistemas'
    },

    {
        'creditos' : 4,
        'materia': 'Programacion Web',
        'Prerrequisito' : 'Programacion 1, Base de Datos Avanzada'
    },

    {
        'creditos' : 3,
        'materia': 'Electiva',
        'Prerrequisito' : 'Ninguna'
    },

    {
        'creditos' : 4,
        'materia': 'Programacion Paralela',
        'Prerrequisito' : 'Programacion 2, Base de Datos Avanzada'
    },

    {
        'creditos' : 4,
        'materia': 'Introduccion a la Ingenieria de Software',
        'Prerrequisito' : 'Programacion 3, Mineria de Datos, Auditoria Informatica'
    },

    {
        'creditos' : 3,
        'materia': 'Electiva',
        'Prerrequisito' : 'Ninguna'
    },

    {
        'creditos' : 3,
        'materia': 'Desarrollo de Emprendedores',
        'Prerrequisito' : 'Metodologia de la Investigacion'
    },

    {
        'creditos' : 0,
        'materia': 'Educacion Fisica',
        'Prerrequisito' : 'Ninguna'
    },

    {
        'creditos' : 0,
        'materia': 'Ingles 10-12',
        'Prerrequisito' : 'Ingles 7-9'
    },

    {
        'creditos' : 4,
        'materia': 'Ingles Tecnico',
        'Prerrequisito' : 'Ingles 10-12'
    },

    {
        'creditos' : 4,
        'materia': 'Estructura de Datos',
        'Prerrequisito' : 'Programacion 3'
    },

    {
        'creditos' : 4,
        'materia': 'Administracion de Proyectos de Software',
        'Prerrequisito' : 'Programacion 3'
    },

    {
        'creditos' : 4,
        'materia': 'Introduccion al Desarrollo de Aplicaciones Moviles',
        'Prerrequisito' : 'Programacion 3'
    },

    {
        'creditos' : 3,
        'materia': 'Plan de Negocios',
        'Prerrequisito' : 'Desarrollo de Emprendedores'
    },

    {
        'creditos' : 3,
        'materia': 'Proyecto Final TDS',
        'Prerrequisito' : 'Programacion Paralela, Introduccion a la Ingenieria de Software'
    }

]

for (x of materias) {

    const tr = document.createElement('tr');

    console.log(x.creditos + ' ' + x.materia + ' ' + x.Prerrequisito);

    tr.innerHTML = `

            <td>${x.creditos}</td>
            <td>${x.materia}</td>
            <td>${x.Prerrequisito}</td>
        
        `;

    tabla.appendChild(tr);

  }
