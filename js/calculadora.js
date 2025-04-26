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

    const ciudadano  = {
        nombre: 'Jordy',
        apellido: 'Chamba',
        direccion: {
            callePrincipal: 'Eloy Alfaro',
            calleSecundario: 'De Las Orquideas',
            referencia:'Al frente de la iglesia',
            numeracion: '5620',
            barrio: {
                referencia: 'Al frente del estadio'
            }
        }
    }
    /* GET */ 
    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    console.log(ciudadano.direccion.barrio.referencia);

    console.log(ciudadano.direccion.callePrincipal);

    /* SET */ 
    ciudadano.direccion.callePrincipal='Av.Amazonas';    
    console.log(ciudadano.direccion.callePrincipal);

    const arregloEstudiantes = [estudiante11,estudiante12];
    console.log(arregloEstudiantes);

    /*  Otra forma de hacer arreglos*/

    const arregloEstudiantes2 = [{nombre:'Carla',apellido:'Castillo'}, 
                                {nombre:'Lidia',apellido:'Teran'},
    ];
    console.log(arregloEstudiantes2);

    /*Buscar la posocion del estudiante*/
    console.log(arregloEstudiantes2[1].apellido)

                        //Desestructuracion de Arreglos

    /*Acceder a los elementos pero no por la posicion sino por la referencia 
    (partir en variables partes) y asi acceder a varias partes */

    const colores = ['Amarillo','Azul','Rojo','Verde','Naranja'];
    const [c1,c2,c3,c4,c5] = colores;
    console.log(c1); 
    console.log(c5); 

    const [cUno,cDos] = colores;
    console.log(cUno);
    console.log(cDos);

    const [, ,cTres] = colores;
    console.log(cTres);

    const [c01,c02] = ['Amarillo','Azul','Rojo','Verde','Naranja'];
    console.log(c01);
    console.log(c02);

    //manera1
    desestrcuturar(colores);

    //manera2
    const valor1 = desestrcuturar2();
    console.log(valor1);
    
    //manera3
    const [,p2,p3, p4, p5, p6, p7, p8, p9, p10] = desestrcuturar2();
    console.log(p3);
    console.log(p2);
    console.log(p10);

    
                         //Desestructuracion de Objetos
    //manera1
    const auto = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'Amarillo'
    }

    const {marca, color,anio} = auto;
    console.log(color);

    //manera2
    const {anio1} = {
        marca1: 'Toyota',
        modelo1: 'prius',
        anio1: 2020,
        color1: 'Amarillo'
    }
    console.log(anio1)
    desestrcuturacionObjeto(auto);

/* en arreglos se desestrcuturaba por la posicion y el obejtos por sus atributos */

    const universidad = {
        nombre:'UCE',
        direccion: 'America',
        rector:{
            nombreR: 'Daniel',
            apellido: 'Teran'
        }
    }

    /*Buscar la posocion del Objeto UCE*/
    //manera1
    const {rector,nombreR}=universidad;
    console.log(rector);
    //manera2
    const {apellido} = rector;
    console.log(apellido);


    const universidad2 = {
        nombre2:'UCE',
        direccion2: 'America',
        rector2:{
            nombreR2: 'Daniel',
            apellido2: 'Teran'
        }
    }
    const{rector2,nombreR2}=universidad2;
    console.log(rector2);
    const{apellido2}=rector2;
    console.log(apellido2);

                    //Desestrcuturacion por operador Res (Item de arreglos)
    console.log('destructurar por operador rest');
    const [p1,...resto]=desestrcuturar2();
    console.log(p1);
    console.log(resto);
    /*Se destructura  la posicion 1 y el resto del arreglo */
    

                    //Desestrcuturacion por operador Res (Objetos)
    //Desestrcuturar una parte de mi arreglo y el resto se mantenga igual
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'Amarillo'
    }
    const {marcaR,...restoO}=autoR;
    console.log(marcaR);
    console.log(restoO);
};

/* Puedo desestructurar en  cualquier parte del codigo 
a cualquier variable que es un arreglo la puede desestrcuturar*/    

function desestrcuturar([c1,c2,c3]){
        console.log(c1);
        console.log(c2);
        console.log(c3);
}

function desestrcuturar2(){
    const colores = ['Rosado','Violeta','Rojo','Cafe','Turquesa'];
    return colores;
}
/* Como conclusion ma desestrcuturado de objeto que hace a traves de sus posiciones */


//marnera1
function desestrcuturacionObjeto(objeto){
    console.log(objeto);
}

//manera2
function desestrcuturacionObjeto({marca, color}){
    console.log(marca);
    console.log(color);
}

