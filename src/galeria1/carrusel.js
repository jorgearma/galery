const garelira = document.getElementById('galeria')

const carrusel = (direccion)=>{
    const obciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin : '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entradas) => {
        const slidesvisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting === true){
                return entrada;

            }

        });
        if(direccion === 'anterior'){   
            const primerslidesvisible = slidesvisibles[0];
            const indexprimervisible = entradas.indexOf(primerslidesvisible);

            if(indexprimervisible -1 >= 1){
                entradas[indexprimervisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });

            }

            


        } else if (direccion === 'adelante'){
            const  ultimasslidevisibles = slidesvisibles[slidesvisibles.length - 1];
            const indexultimovisible = entradas.indexOf(ultimasslidevisibles);

            if(entradas.length -1 > indexultimovisible){
                entradas[indexultimovisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                })

            }
           
        
        }



        const slides = garelira.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) =>{
        observer.unobserve(slide);
    });

    },obciones);

    const slides = garelira.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) =>{
        observer.observe(slide);
    })

}
export default carrusel;