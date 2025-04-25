function sumar(numero1,numero2){
    return numero1+numero2;
}

function restar(numero1,numero2){
    return numero1-numero2;
}

function multiplicar(numero1,numero2){
    return numero1*numero2;
}

function dividir(numero1,numero2){
    return numero1/numero2;
}

function evaluarOperacion(tipo){
    let num1=parseFloat(document.getElementById('id_numero_1').value);
    let num2=parseFloat(document.getElementById('id_numero_2').value);
    let resultado=0;

    const SUMAR='+';
    const RESTAR='-';
    const MULTIPLICAR='*';
    const DIVIDIR='/';

    if(tipo === '+' ){
        resultado=SUMAR(num1,num2)
    }
    if(tipo === '-' ){
        resultado=RESTAR(num1,num2)
    }
    if(tipo === '*' ){
        resultado=MULTIPLICAR(num1,num2)
    }
    if(tipo === '/' ){
        resultado=DIVIDIR(num1,num2)
    }
    document.getElementById('id_resultado').innerText=document.getElementById('id_resultado').innerText + resultado.toString();
}


const fundamentos = () => {
    /*Expresion Lambda

    Tipos de Variables
    var: antiguo, esta queando obsoleto
    let: variables cambiantes
    const: variables constantes
    
    */
    let nombre='Jordy';
    let numero=10;
    let arreglo=[1, 2, 3, 4, 5];

    console.log[arreglo];
    console.log['texto de prueba'];
    console.log('Fundamentos JS')

    /*Arreglos*/
    const diasLaborables=['lunes', 'martes','miercoles','jueves','viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);

    console.log(diasLaborables[10]);
    let valor=' ';
    console.log(valor);

    /*Arreglos* agregar elementos */
    diasLaborables.push('sabado');
    diasLaborables.unshift('Dias');
    console.log(diasLaborables);
    
    const numerosImpares=[1, 3, 5, 7, 9, 11];
    const numerosPares=[2, 4, 6, 8];

    const numerosUnir = numerosPares.concat(numerosImpares);
    console.log(numerosUnir);

    /* Sencias de Control */
    for(const dia of diasLaborables){
        console.log(dia);
        if(dia === 'viernes' ){
            console.log('Por fin viernes')
        }else{
            console.log('Aun no es viernes');   
        }

        if(dia !== 'viernes' ){
            console.log('Dia normal')
        }else{
            console.log('Dia de salida');   
        }
    }

    /* Manejor de objetos*/
    const miProfesor={
        nombre: 'Jordy',
        apellido: 'Chamba',
        edad: 15,
        genero: 'Masculino',
        ciudad: 'Quito'
    }
    console.log(miProfesor);

    /*Seteo de Atributos*/ 
    console.log(miProfesor.nombre);
    miProfesor.apellido='Teran';
    console.log(miProfesor);

    if(miProfesor.ciudad === 'Quito'){
        console.log('Es de la capital');
    }

    /*Un arreglo de 3 estudiantes */
    const estudiante11={
        nombre: 'Kevin',
        apellido: 'Andrade',
        edad: 25,
        genero: 'Masculino',
        ciudad: 'Cuenca'
    }
    const estudiante12={
        nombre: 'Kevin',
        apellido: 'Pozo',
        edad: 15,
        genero: 'Masculino',
        ciudad: 'Quito'
    }
    const estudiante13={
        nombre: 'Bryan',
        apellido: 'Loya',
        edad: 55,
        genero: 'Masculino',
        ciudad: 'Ibarra'
    }

    const estudiantes=[estudiante11,estudiante12,estudiante13];
    console.table(estudiantes)

};