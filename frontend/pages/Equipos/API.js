const urlGet = "http://localhost:5200/equipos/all";
const urlPost = "http://localhost:5200/equipos/post";
const urlDelete = "http://localhost:5200/equipos/del";
const urlGetOne = "http://localhost:5200/equipos/get"
const urlUpd = "http://localhost:5200/equipos/upd";

export const getEquipos = async () => {
    try {
        const extract = await fetch(urlGet);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postEquipos = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Equipos.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteEquipos = async (id_equipos) => {
    try {
            await fetch(`${urlDelete}/${id_equipos}`,{
                method: "DELETE"
            })
            window.location = "Equipos.html"
    } catch (error) {
        console.log(error);
    }
}

export const getEquiposOne = async (id_equipos) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_equipos}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updEquiposOne = async (objeto, id_equipos) => {
    try {
        await fetch(`${urlUpd}/${id_equipos}`,{
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Equipos.html"
    } catch (error) {
        console.log(error);
    }
} 