// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos=[];
let nombreAmigo=0;
let lista;
let nuevoInicio = 0;
function agregarAmigo()
{
    if(nuevoInicio !==0)
    {
        limpiarArray();
        nuevoInicio=0;
    }
    nombreAmigo=document.getElementById("amigo").value
    if(nombreAmigo != '')
    {
        if(buscarAmigo(nombreAmigo) == 1) // si el amigo ya existe en el array, no se agrega
         {
        alert('El amigo ya está en la lista');
        eliminarAmigo();
        return; // se sale de la función
        }
        arrayAmigos.push(nombreAmigo);
        eliminarAmigo();
        mostrarAmigo();
    }
    else{
        alert('El campo no puede estar vacío');
       }
}
function mostrarAmigo()
{
    lista = document.getElementById("listaAmigos"); // se busca el elemento de la lista
    lista.innerHTML = '';// limpiar lista
    for(let i = 0; i < arrayAmigos.length; i++) // se recorre el array de amigos
    {
        let li = document.createElement("li");  // por cada amigo, se crea un nuevo elemento de lista
        li.textContent = arrayAmigos[i];    // se estavlece el texto del elemento de lista
        lista.appendChild(li);  // se agrega el elemento de lista al elemento de la lista
    }

}
function eliminarAmigo()
{
    document.getElementById("amigo").value = '';
}
function sortearAmigo()
{
    if(arrayAmigos.length === 0)
    {
        alert('No hay amigos para sortear');
        return;
    }
    eliminarAmigo();
    let indiceAleatorio =parseInt (Math.floor(Math.random() * arrayAmigos.length));
    let amigoSorteado = arrayAmigos[indiceAleatorio];
    document.getElementById("listaAmigos").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    document.getElementById("listaAmigos").classList.add("result-list");
    nuevoInicio++;
}
function limpiarArray()
{
    arrayAmigos = []; // se limpia el array de amigos
    document.getElementById("listaAmigos").innerHTML = ''; // se limpia la lista visualmente
    document.getElementById("listaAmigos").classList.remove("result-list"); // se remueve la clase de estilo
}
function buscarAmigo(nombre)
{
    for(let i=0; i<arrayAmigos.length; i++)
    {
        if(arrayAmigos[i] === nombre) // se busca si el amigo ya existe en el array
        {
            return 1; // si existe, se retorna 1
        }
    }
}