import dataCategorias from './datos/categorias'

const {categorias} = dataCategorias
const contenedorcategorias = document.getElementById('categorias');

categorias.forEach((categoria) => {
    const nuevacategoria = document.createElement('a');
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
                <p class="categoria__nombre">${categoria.nombre}</p>
                <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos </p>
        </div>
     `;
nuevacategoria.innerHTML = plantilla
nuevacategoria.classList.add('categoria');
nuevacategoria.href = '#'
nuevacategoria.dataset.categoria = categoria.id;

contenedorcategorias.append(nuevacategoria);
});

