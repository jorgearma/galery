const galeria = document.getElementById('galeria');
const cerrargaleria = () => {
    galeria.classList.remove('galeria--active');

    document.body.style.overflow = ''
}
export default cerrargaleria