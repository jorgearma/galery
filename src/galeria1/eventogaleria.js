import cerrargaleria from "./cerrargaleria";
import slideclick from "./slideclick";
import { cargaranteriorsiguiente } from "./cargarimagen";
import carrusel from "./carrusel";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click',(e) => {
   const boton = e.target.closest('button');

   if (boton?.dataset?.accion === 'cerrar-galeria'){
      cerrargaleria();
   }

   //carrusel click
   if(e.target.dataset.id ){
      slideclick(e);

   }
   

   if(boton?.dataset?.accion === 'siguiente-imagen'){
      cargaranteriorsiguiente('siguiente');
   }

   if(boton?.dataset?.accion === 'anterior-imagen'){
      cargaranteriorsiguiente('anterior');
   }
   if(boton?.dataset?.accion === 'siguiente-slide'){
       carrusel('adelante');
   }

   if(boton?.dataset?.accion === 'anterior-slide'){
      carrusel('anterior');

   }
});