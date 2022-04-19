const suma = (a,b) =>{
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código
  var aux = 0;

  while(aux == 0)
  {
    //let a = parseInt(prompt('Ingresa el primer número: ')); //Descomentar en caso de querer
                                                              //ingresar otro valor manualmente.
    
    if(Number.isInteger(a))
    {
      //let b = parseInt(prompt('Ingresa el segundo número: '));  //Descomentar en caso de querer
                                                                  //ingresar otro valor manualmente.

      if(!Number.isInteger(b))
      {
        alert('Debe ingresar únicamente números.')
      }
      else if(Number.isInteger(b))
      {
        aux = 1;
        return alert('La suma es: ' + (parseInt(a) + parseInt(b)));
      }
    }
    else
    {
      alert('Debe ingresar únicamente números.')
    }
  }
}

const sonIguales = (x, y)=>{
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:

  //-------------------------------------------------------------------------//
  //x = prompt('Ingrese el dato 1: '); //---Descomentar en caso de querer
  //y = prompt('Ingrese el dato 2: '); //---elegir valores manualmente
  //-------------------------------------------------------------------------//

  let estado; 

  if(x == y)
  {
    estado = true;
    return alert(estado);
  } 
  else if(x != y)
  {
    estado = false;
    return alert(estado);
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  //-------------------------------------------------------------------------//
  //str1 = prompt('Ingrese el texto 1: ') //---Descomentar en caso de querer
  //str2 = prompt('Ingrese el texto 2: ') //---elegir valores manualmente
  //-------------------------------------------------------------------------//

  let caracteresStr1 = str1.length;
  let caracteresStr2 = str2.length;

  if(caracteresStr1 == caracteresStr2)
  {
    return alert('true');
  }
  else if(caracteresStr1 != caracteresStr2)
  {
    return alert('false');
  }
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  // Tu código:
  let aux = 0;

  while(aux == 0)
  {
    //-------------------------------------------------------------------------//
    //numero = parseInt(prompt('Ingresa un número entero: '));  //Descomentar en caso de querer
                                                                //Ingresar un número manualmente.
    //-------------------------------------------------------------------------//

    if(Number.isInteger(numero))
    {
      if(numero > 0)
      {
        aux = 1;
        return alert('Es positivo');
      }
      else if(numero < 0)
      {
        aux = 1;
        return alert('Es negativo');
      }
      else
      {
        return alert('false');
      }
    }
    else if(!Number.isInteger(numero))
    {
      alert('Recuerde que debe ingresar un número.')
    }
  }
}

const colors = (color)=>{
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  
  //-------------------------------------------------------------------------//
  //color = prompt('Ingrese un color (en inglés): ')  //Descomentar en caso de querer
                                                      //Ingresar un valor manualmente.
  //-------------------------------------------------------------------------//

  switch(color)
  {
    case 'blue':
      return alert('This is blue')
    case 'red':
      return alert('This is red')
    case 'green':
      return alert('This is green')
    case 'orange':
      return alert('This is orange')
    default:
      return alert('Color not found')
  }
}

const fizzBuzz = (numero)  => {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let aux = 0;

  while(aux == 0)
  {

    //-------------------------------------------------------------------------//
    //numero = parseInt(prompt('Ingrese un número: ')); //Descomentar en caso de querer
                                                        //Ingresar un valor manualmente.
    //-------------------------------------------------------------------------//

    if(Number.isInteger(numero))
    {
      if(numero % 3 === 0 && numero % 5 == 0)
      {
        aux = 1;
        return alert('fizzbuzz')
      }
      else if(numero % 3 == 0)
      {
        aux = 1;
        return alert('fizz')
      }
      else if(numero % 5 == 0)
      {
        aux = 1;
        return alert('buzz')
      }
      else if(numero % 3 != 0 || numero % 5 != 0)
      {
        aux = 1;
        return alert(numero)
      }
    }
    else
    {
      aux = 1 //Comentar en caso de querer hacer uso del
              //Ingreso manual para evitar error.
      alert('El dato ingresado debe ser un número: ')
    }
  }
}

const devolverPrimerElemento = (array) => {
  // Devuelve el primer elemento de un array
  // Tu código:
  
  //-------------------------------------------------------------------------//
  //-------------- Descomentar en caso de querer realizar -------------------//
  //---------------Ingresos de los elementos manualmente---------------------//
  //-------------------------------------------------------------------------//
  /*
  array = [];
  
  let cantidadElementos;
  let elemento; 
  
  // Los elementos serán enteros.
  cantidadElementos = parseInt(prompt('Indique la cantidad de elementos que tendrá la lista: ')); 
  
  for(var i = 0; i < cantidadElementos; i++)
  {
    elemento = array.push(parseInt(prompt('Ingrese elemento ' + (i+1))));
  }
  */
  //-------------------------------------------------------------------------//
  //-------------- Descomentar en caso de querer realizar -------------------//
  //---------------Ingresos de los elementos manualmente---------------------//
  //-------------------------------------------------------------------------//
  return alert(array[0])
}

const agregarItemAlFinalDelArray = (array, elemento) =>{
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  
  elemento = array.push(elemento)
  return alert(array)
}

const nuevoUsuario = (nombre, email, password) => {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

  const usuario = {
    nombre: nombre,
    email: email,
    password: password
  };

  return alert(usuario);
}

const verificarPassword = (usuario, password) => {
  // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  usuario = {
    password: usuario.password
  };

  if(password == usuario.password)
  {
    return alert(true);
  }
  else
  {
    return alert(false);
  }
}

const actualizarPassword =(usuario, nuevaPassword) => {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  
  usuario = {
    password: usuario.password
  };

  if(password != usuario.password)
  {
    usuario.password = password;
    return alert(usuario);
  }
}

const agregarAmigo = (usuario, nuevoAmigo) => {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  let amigos = []  

  usuario = {
    amigos: usuario.amigos
  };

  nuevoAmigo = usuario.amigos.push(nuevoAmigo);

  return alert(usuario);
}

const pasarUsuarioAPremium = usuarios => {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  
  usuarios.push = (
    { esPremium: true },
    { esPremium: true },
    { esPremium: true },
    { esPremium: true },
    { esPremium: true }
  );

  return alert(usuarios)
}

const users = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false }
];

const sumarLikesDeUsuario = usuario => {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  // let usuario = {
  //   posts: [{
  //     likes: 4
  //   }]
  // };

}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con 
//las propiedades de la persona y sus valores.
//Ej: { 
  //   Nombre: 'Juan',
  //   Apellido: 'Perez',
  //   Edad: 22,
  //   Domicilio: 'Saavedra 123'
  //  }

class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:

    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    
}

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    
    
    for(let i = 0; i < numeros.length; i++)
    {
      if(Number.isInteger(numeros[i]))
      {
        cb += numeros[i];
      }
    }

    alert("El total es: "+ (cb));
}

sumarArray([1, 2, 3, 4, 5, '4', 5], 0)

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:


  }

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:

    let result = []
    result = array.filter(word => word.charAt(0) == 'a');

    return alert(result);
  } 
  
   /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
/*
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}
*/