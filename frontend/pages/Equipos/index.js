import {getEquipos, postEquipos, deleteEquipos, getEquiposOne, updEquiposOne} from "./API.js";
document.addEventListener("DOMContentLoaded", iniciar);
//GET EQUIPOS
async function iniciar(){
    const datos = await getEquipos();
    const tablas = document.querySelector("#insert");
    console.log(datos);
    datos.forEach(element => {
        const {_id ,Equipo, Pais, gerente} = element;
        tablas.innerHTML += `
            <tr>
                <td>${_id}</td>
                <td>${Equipo}</td>
                <td>${Pais}</td>
                <td>${gerente}</td>
                <td>
                    <button class="btn btn-danger delete" id="${_id}">ELIMINAR</button>
                </td>
                <td>
                    <button class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT"  id="${_id}">EDITAR</button>
                </td>
            </tr>
        `
    });
}

//POST
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", datosPOST);

function datosPOST(e){
    e.preventDefault();
    const Equipo = document.querySelector("#equipoNombre").value;
    const Pais = document.querySelector("#pais").value;
    const gerente = document.querySelector("#gerente").value;
    console.log(Equipo);

    const data = {
        Equipo,
        Pais,
        gerente
    }
    console.log(data);

    if(validate(data)){
        postEquipos(data);
        alert("Los datos se han ingresado satisfactoriamente");
    }else {
        alert("no pasa");
    }
}

//DELETE
const laTabla = document.querySelector("#insert");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_equipos = e.target.getAttribute("id");
        console.log(id_equipos);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteEquipos(id_equipos);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_equipos = e.target.getAttribute("id");
        console.log(id_equipos);
        const datos = await getEquiposOne(id_equipos);
        const Equipo = document.querySelector("#EquipoNombre2");
        const Pais = document.querySelector("#pais2");
        const gerente = document.querySelector("#gerente2");
        Equipo.value = datos.Equipo;
        Pais.value = datos.Pais;
        gerente.value = datos.gerente;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Equipo = document.querySelector("#EquipoNombre2").value;
            const Pais = document.querySelector("#pais2").value;
            const gerente = document.querySelector("#gerente2").value;

            const datosUpd = {
                Equipo,
                Pais,
                gerente
            }
            
            if(validate(datosUpd)){
                updEquiposOne(datosUpd, id_equipos);
            }
        }
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element != "");
}