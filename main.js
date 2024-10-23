console.log("conectado")


document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault(); 
    
    
let placa = document.getElementById('placa').value;
let num_serie = document.getElementById('num_serie').value;
let modelo = document.getElementById('modelo').value;
let marca = document.getElementById('marca').value;
let kilometraje = document.getElementById('kilometraje').value;
let tipo = document.getElementById('tipo').value;





//console.log(jsonData)


let out="";
out += `
<tr>
<td>${placa} <button onclick="getback('placa')">Actualizar</button> </td> 
<td>${num_serie} <button onclick="getback('num_serie')">Actualizar</button> </td>
<td>${modelo} <button onclick="getback('modelo')">Actualizar</button> </td>
<td>${marca} <button onclick="getback('marca')">Actualizar</button> </td>
<td>${kilometraje}<button onclick="getback('kilometraje')">Actualizar</button> </td>
<td>${tipo}<button onclick="getback('tipo')">Actualizar</button> </td>
</tr>
`
let placeholder = document.querySelector("#car-data")
placeholder.insertAdjacentHTML('beforeend', out)

const show = document.getElementById('table');
show.style.display = 'block';

const newDate = JSON.parse(localStorage.getItem('datosCarro'));

let datos =[{
    placa: placa,
    num_serie: num_serie,
    modelo: modelo,
    marca: marca,
    kilometraje: kilometraje,
    tipo: tipo,
}]
const jsonData = JSON.stringify(datos);
localStorage.setItem('datosCarro', jsonData)
//función main
/*
function getback(valor){
    const objectFromStorage = JSON.parse(localStorage.getItem('datosCarro'));
    console.log(objectFromStorage)
    let encuesta = prompt(`Escriba el nuevo valor para ${valor}`)

    if(encuesta === objectFromStorage[0].valor){alert(`El valor ${encuesta} es exactamente el mismo, por lo que no se actualizó`)}
    else{    
        alert(`el nuevo valor de ${valor}: ${objectFromStorage[0].valor} ha sido actualizado con éxito ----> Antes ${objectFromStorage[0].valor}, ahora ${encuesta}`) 
        localStorage.setItem(objectFromStorage[0].placa,encuesta)
        return objectFromStorage[0].placa = encuesta
    }                
}
getback('placa')
*/
})

