// Animación suave para el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animación para los elementos cuando aparecen en el viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Observar elementos para animaciones
document.querySelectorAll('.feature-card, .stat-box').forEach((element) => {
    observer.observe(element);
});

// Ajustar la reproducción del video de fondo
const video = document.getElementById('hero-video');
if (video) {
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });
}

// Datos de los productos
const productos = {
    1: {
        titulo: "Pintura Interior Vinílica",
        descripcion: "Pintura Vinílica ideal para interiores, con un acabado mate. Ideal para ambientes secos."
    },
    2: {
        titulo: "Pintura Exterior Resistente",
        descripcion: "Pintura para exteriores con resistencia a la intemperie, ideal para fachadas."
    }
};

// Mostrar detalles en el modal
function mostrarDetalles(productId) {
    const producto = productos[productId];
    
    // Actualizar el contenido del modal con los detalles del producto
    document.getElementById("product-title").innerText = producto.titulo;
    document.getElementById("product-description").innerText = producto.descripcion;

    // Mostrar el modal
    document.getElementById("product-modal").style.display = "block";
}

// Cerrar el modal
function cerrarModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Cerrar el modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target == document.getElementById("product-modal")) {
        cerrarModal();
    }
}
