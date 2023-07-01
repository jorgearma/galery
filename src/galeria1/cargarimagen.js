import data from "./../datos/fotos";

const galeria = document.getElementById('galeria')



const cargarimagen = (id,nombre,ruta,descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaactual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaactual];

    let indeximagenactual;
    fotos.forEach((foto,index) => {
        if(foto.id === id){
        indeximagenactual = index;
        }
    });


    if(galeria.querySelectorAll('.galeria__carousel-slide').length > 0){
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        galeria.querySelectorAll('.galeria__carousel-slide')[indeximagenactual].classList.add('galeria__carousel-slide--active');
    }
};


const cargaranteriorsiguiente = (direccion) => {
    const categoriaactual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaactual];
    const idimagenactual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indeximagenactual;
    fotos.forEach((foto,index) => {
        if (foto.id === idimagenactual){
            indeximagenactual = index;
        }
        
    });

    if (direccion ==='siguiente'){
        if (fotos[indeximagenactual + 1]){
            const {id, nombre, ruta, descripcion} = fotos[indeximagenactual + 1];
            cargarimagen(id, nombre, ruta, descripcion);
        }
    } else if (direccion ==='anterior') {
        if (fotos[indeximagenactual - 1]){
            const {id, nombre, ruta, descripcion} = fotos[indeximagenactual - 1];
            cargarimagen(id, nombre, ruta, descripcion);
        }
    }
}


export {cargarimagen,cargaranteriorsiguiente};