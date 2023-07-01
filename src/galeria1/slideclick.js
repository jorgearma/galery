import datos from './../datos/fotos';
import { cargarimagen } from './cargarimagen';

const slideclick = (e) => {
    let ruta,nombre,descripcion;

    const galeria = document.getElementById('galeria');
    const categoriaactiva = galeria.dataset.categoria;
    const id = parseInt(e.target.dataset.id);

    datos.fotos[categoriaactiva].forEach((foto) => {
        if(foto.id === id){
           ruta = foto.ruta
           nombre = foto.nombre;
           descripcion = foto.descripcion;     
        }
        
    });
    cargarimagen(id,nombre,ruta,descripcion);
};

export default slideclick