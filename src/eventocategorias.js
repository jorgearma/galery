
import datafotos from './datos/fotos'
import { cargarimagen } from './galeria1/cargarimagen';

const contenedorcategorias = document.getElementById('categorias')
const garleria =  document.getElementById('galeria')


contenedorcategorias.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.closest('a')){
        garleria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';


         const categoriaactiva = e.target.dataset.categoria; 
         garleria.dataset.categoria = categoriaactiva


         const  carusel = garleria.querySelector('.galeria__carousel-slides');
         const fotos = datafotos.fotos[categoriaactiva];
         
         const {id,nombre,ruta,descripcion} = fotos[0]
         cargarimagen(id,nombre,ruta,descripcion);

         carusel.innerHTML = '';

         fotos.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
				<img class="galeria__carousel-image" src="${foto.ruta}"data-id="${foto.id}" alt="" />
			</a>
            `;
            garleria.querySelector('.galeria__carousel-slides').innerHTML += slide;
         });

         garleria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});

