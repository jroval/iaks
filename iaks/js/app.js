/* =============================================
   APP.JS — el cerebro de iaks
   
   Estructura:
   1. DATOS (ilustraciones y productos)
   2. RENDERIZADO (generar HTML desde datos)
   3. FILTROS
   4. MODAL
   5. ARRANQUE (init)
   ============================================= */


/* =============================================
   1. DATOS
   
   Aquí viven todas tus ilustraciones y productos.
   Para añadir una nueva ilustración: solo añade
   un objeto nuevo al array. El resto se hace solo.
   
   ESTILOS disponibles (el mismo texto que usas
   en el filtro y en cada objeto):
   - "rotulador"
   - "lapiz"
   - "comic-realista"
   - "comic-anime"
   - "comic-fantasia"
   - "vector"
   ============================================= */

const ilustraciones = [

  // --- ROTULADOR ---
  {
    id: 1,
    titulo: "A TODO ROTU",
    estilo: "ROTULADOR",
    descripcion: "Rotulador directo, sin red.",
    imagen: "assets/images/rotu.png",
    color: "#f5e642",
    mockups: {
      poster:   "assets/images/mockups/rotulador/poster.png",
      taza:     "assets/images/mockups/rotulador/taza.png",
      camiseta: "assets/images/mockups/rotulador/camiseta.png",
      sticker:  "assets/images/mockups/rotulador/sticker.png",
      llavero:  "assets/images/mockups/rotulador/llavero.png",
      pin:      "assets/images/mockups/rotulador/pin.png",
    }
  },

  // --- LAPIZ ---
  {
    id: 2,
    titulo: "ESTILO LAPIZ",
    estilo: "BOCETO A MANO",
    descripcion: "Trazos suaves y lineas quebradas que cuentan mas de lo que muestran.",
    imagen: "assets/images/boceto_lapiz.png",
    color: "#f5e642",
    mockups: {
      poster:   "assets/images/mockups/lapiz/poster.png",
      taza:     "assets/images/mockups/lapiz/taza.png",
      camiseta: "assets/images/mockups/lapiz/camiseta.png",
      sticker:  "assets/images/mockups/lapiz/sticker.png",
      llavero:  "assets/images/mockups/lapiz/llavero.png",
      pin:      "assets/images/mockups/lapiz/pin.png",
    }
  },

  // --- COMIC REALISTA ---
  {
    id: 3,
    titulo: "ESTILO COMIC",
    estilo: "CÓMIC CLÁSICO",
    descripcion: "Viñeta urbana con sombras duras, perspectiva imposible y mucha actitud.",
    imagen: "assets/images/mockups/comic-realista/Llavero.png",
    color: "#f5e642",
    mockups: {
      poster:   "assets/images/mockups/comic-realista/poster.png",
      taza:     "assets/images/mockups/comic-realista/taza.png",
      camiseta: "assets/images/mockups/comic-realista/camiseta.png",
      sticker:  "assets/images/mockups/comic-realista/sticker.png",
      llavero:  "assets/images/mockups/comic-realista/llavero.png",
      pin:      "assets/images/mockups/comic-realista/pin.png",
    }
  },

  // --- COMIC ANIME ---
  {
    id: 4,
    titulo: "ESTILO ANIME",
    estilo: "COMIC ANIME",
    descripcion: "Inspiración directa de los mangas y animes clásicos: ojos grandes, y mucho dramatismo.",
    imagen: "assets/images/mockups/comic-anime/camiseta.png",
    color: "#f5e642",
    mockups: {
      poster:   "assets/images/mockups/comic-anime/poster.png",
      taza:     "assets/images/mockups/comic-anime/taza.png",
      camiseta: "assets/images/mockups/comic-anime/camiseta.png",
      sticker:  "assets/images/mockups/comic-anime/sticker.png",
      llavero:  "assets/images/mockups/comic-anime/llavero.png",
      pin:      "assets/images/mockups/comic-anime/pin.png",
    }
  },

  // --- COMIC FANTASIA ---
  {
    id: 5,
    titulo: "ESTILO FANTASÍA",
    estilo: "COMIC FANTASÍA",
    descripcion: "Magia, sofisticación y ojos grandes.",
    imagen: "assets/images/mockups/comic-fantasia/sticker.png",
    color: "#f5e642",
    mockups: {
      poster:   "assets/images/mockups/comic-fantasia/poster.png",
      taza:     "assets/images/mockups/comic-fantasia/taza.png",
      camiseta: "assets/images/mockups/comic-fantasia/camiseta.png",
      sticker:  "assets/images/mockups/comic-fantasia/sticker.png",
      llavero:  "assets/images/mockups/comic-fantasia/llavero.png",
      pin:      "assets/images/mockups/comic-fantasia/pin.png",
    }
  },
   // --- VECTOR---
  {
    id: 6,
    titulo: "ESTILO VECTOR",
    estilo: "VECTOR",
    descripcion: "minimalismo moderno, con colores planos y formas geométricas.",
    imagen: "assets/images/mockups/vector/pin.png",
    color: "#f5e642",
    mockups: {
      poster:   "assets/images/mockups/vector/poster.png",
      taza:     "assets/images/mockups/vector/taza.png",
      camiseta: "assets/images/mockups/vector/camiseta.png",
      sticker:  "assets/images/mockups/vector/sticker.png",
      llavero:  "assets/images/mockups/vector/llavero.png",
      pin:      "assets/images/mockups/vector/pin.png",
    }
  },

];





/* =============================================
   PRODUCTOS

   Para añadir un producto: añade un objeto aqui.
   El id debe coincidir con la clave en mockups.
   ============================================= */

const productos = [
  {
    id: "poster",
    nombre: "Poster A3",
    precio: "desde 12EUR",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/></svg>`
  },
  {
    id: "taza",
    nombre: "Taza",
    precio: "desde 10EUR",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`
  },
  {
    id: "camiseta",
    nombre: "Camiseta",
    precio: "desde 20EUR",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`
  },
  {
    id: "sticker",
    nombre: "Sticker",
    precio: "desde 2EUR",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
  },
  {
    id: "llavero",
    nombre: "Llavero",
    precio: "desde 5EUR",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/></svg>`
  },
  {
    id: "pin",
    nombre: "Pin",
    precio: "desde 4EUR",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 4v6l-2 4h10l-2-4V4"/>
  <line x1="12" y1="14" x2="12" y2="21"/>
  <line x1="9" y1="4" x2="15" y2="4"/>
</svg>`
  },
];

const testimonios = [
 
  // {
  //   id: 1,
  //   nombre: "Maria G.",
  //   ciudad: "Madrid",
  //   mensaje: "Flipé cuando vi el resultado. La taza es un regalo perfecto para mi madre.",
  //   producto: "taza",
  //   fotoOriginal: "assets/images/testimonios/maria-original.jpg",
  //   fotoResultado: "assets/images/testimonios/maria-resultado.jpg",
  //   estilo: "lapiz",
  // },
];


/* =============================================
   2. RENDERIZADO
   ============================================= */

function renderizarFiltros() {
  const contenedorFiltros = document.getElementById('filtros');
  const estilosUnicos = [...new Set(ilustraciones.map(il => il.estilo))];

  estilosUnicos.forEach(estilo => {
    const btn = document.createElement('button');
    btn.className = 'filtro';
    btn.dataset.filtro = estilo;
    btn.textContent = estilo.replace(/-/g, ' ');
    contenedorFiltros.appendChild(btn);
  });
}


function renderizarCards(lista) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  lista.forEach((ilus) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = ilus.id;
    card.dataset.estilo = ilus.estilo;

    card.innerHTML = `
      <div class="card__imagen-wrap">
        <img
          class="card__imagen"
          src="${ilus.imagen}"
          alt="${ilus.titulo}"
          loading="lazy"
          onerror="this.parentElement.style.background='${ilus.color}22'; this.style.display='none'"
        />
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,${ilus.color}22,transparent);pointer-events:none;"></div>
      </div>
      <div class="card__overlay">
        <div class="card__nombre">${ilus.titulo}</div>
        <div class="card__estilo-tag">${ilus.estilo.replace(/-/g, ' ')}</div>
      </div>
      <div class="card__info">
        <div>
          <div class="card__info-nombre">${ilus.titulo}</div>
          <div class="card__info-estilo">${ilus.estilo.replace(/-/g, ' ')}</div>
        </div>
        <span style="color:${ilus.color};font-size:0.7rem;letter-spacing:1px;">ver</span>
      </div>
    `;

    grid.appendChild(card);
    card.addEventListener('click', () => abrirModal(ilus.id));
  });

  // Aqui, una sola vez, cuando todas las cards ya estan en el DOM
  iniciarScrollReveal();
}


function renderizarProductosModal(mockups) {
  const contenedor = document.getElementById('modal-productos');
  contenedor.innerHTML = '';

  productos.forEach(prod => {
    const tieneMockup = mockups && mockups[prod.id];
    const opcion = document.createElement('button');
    opcion.className = 'producto-opcion' + (tieneMockup ? '' : ' sin-mockup');
    opcion.dataset.productoId = prod.id;
    opcion.disabled = !tieneMockup;

    opcion.innerHTML = `
      <span class="producto-opcion__icono">${prod.icono}</span>
      <div class="producto-opcion__nombre">${prod.nombre}</div>
      <div class="producto-opcion__precio">${tieneMockup ? prod.precio : 'proximamente'}</div>
    `;

    if (tieneMockup) {
      opcion.addEventListener('click', () => seleccionarProducto(prod.id, prod.nombre, mockups[prod.id]));
    }

    contenedor.appendChild(opcion);
  });
}


/* =============================================
   3. FILTROS
   ============================================= */

function iniciarFiltros() {
  const contenedorFiltros = document.getElementById('filtros');

  contenedorFiltros.addEventListener('click', (evento) => {
    if (!evento.target.matches('.filtro')) return;

    const filtroElegido = evento.target.dataset.filtro;

    document.querySelectorAll('.filtro').forEach(btn => btn.classList.remove('activo'));
    evento.target.classList.add('activo');

    if (filtroElegido === 'todos') {
      renderizarCards(ilustraciones);
    } else {
      const filtradas = ilustraciones.filter(il => il.estilo === filtroElegido);
      renderizarCards(filtradas);
    }
  });
}


/* =============================================
   4. MODAL
   ============================================= */

let productoSeleccionado = null;

function abrirModal(id) {
  const ilus = ilustraciones.find(il => il.id === id);
  if (!ilus) return;

  document.getElementById('modal').dataset.ilusActual = ilus.id;

  document.getElementById('modal-estilo').textContent = ilus.estilo.replace(/-/g, ' ');
  document.getElementById('modal-titulo').textContent = ilus.titulo;
  document.getElementById('modal-descripcion').textContent = ilus.descripcion;

  // Preview arranca con la imagen principal de la ilustracion
  const preview = document.getElementById('modal-preview');
  preview.src = ilus.imagen;
  preview.alt = ilus.titulo;

  document.getElementById('modal-preview-label').textContent = '';

  // Resetear seleccion
  productoSeleccionado = null;
  document.getElementById('modal-seleccion').textContent = 'elige un producto para verlo';
  document.getElementById('modal-btn-compra').disabled = true;

  renderizarProductosModal(ilus.mockups);

  document.getElementById('modal').classList.add('abierto');
  document.getElementById('modal-overlay').classList.add('abierto');
  document.body.style.overflow = 'hidden';
}


function cerrarModal() {
  document.getElementById('modal').classList.remove('abierto');
  document.getElementById('modal-overlay').classList.remove('abierto');
  document.body.style.overflow = '';
  // Resetear el panel de pedido al cerrar
  document.querySelector('.modal__layout').style.display = 'grid';
  document.getElementById('modal-pedido').classList.remove('activo');
  document.getElementById('modal-confirmacion').classList.remove('activa');
}


function seleccionarProducto(id, nombre, rutaMockup) {
  productoSeleccionado = id;

  document.querySelectorAll('.producto-opcion').forEach(op => {
    op.classList.toggle('seleccionado', op.dataset.productoId === id);
  });

  // Cambiar la imagen del preview al mockup del producto
  const preview = document.getElementById('modal-preview');

  // Transicion suave: fade out, cambia imagen, fade in
  preview.style.opacity = '0';
  setTimeout(() => {
    preview.src = rutaMockup;
    preview.alt = nombre;
    preview.style.opacity = '1';
  }, 150);

  document.getElementById('modal-preview-label').textContent = nombre;
  document.getElementById('modal-seleccion').textContent = nombre + ' seleccionado';
  document.getElementById('modal-btn-compra').disabled = false;
}


function abrirFormularioPedido() {
  const ilusId = Number(document.getElementById('modal').dataset.ilusActual);
  const ilus = ilustraciones.find(il => il.id === ilusId);
  const prod = productos.find(p => p.id === productoSeleccionado);

  // Rellenar el resumen con lo elegido
  document.getElementById('modal-pedido-resumen').innerHTML = `
    <div class="resumen__item">
      <span class="resumen__label">estilo</span>
      <span class="resumen__valor">${ilus.estilo.replace(/-/g, ' ')}</span>
    </div>
    <div class="resumen__item">
      <span class="resumen__label">formato</span>
      <span class="resumen__valor">${prod.nombre}</span>
    </div>
  `;

  // Ocultar layout principal y mostrar formulario
  document.querySelector('.modal__layout').style.display = 'none';
  document.getElementById('modal-pedido').classList.add('activo');

  // Resetear formulario
  document.getElementById('pedido-nombre').value = '';
  document.getElementById('pedido-email').value = '';
  document.getElementById('pedido-nota').value = '';
  document.getElementById('upload-preview').src = '';
  document.getElementById('campo-upload').classList.remove('con-foto');
  document.getElementById('modal-confirmacion').classList.remove('activa');
  document.getElementById('modal-pedido-enviar').style.display = 'block';
  document.querySelector('.modal__pedido-campos').style.display = 'flex';
  document.querySelector('.modal__pedido-volver').style.display = 'block';
}

function volverAlModal() {
  document.querySelector('.modal__layout').style.display = 'grid';
  document.getElementById('modal-pedido').classList.remove('activo');
}

function enviarPedido() {
  const nombre = document.getElementById('pedido-nombre').value.trim();
  const email = document.getElementById('pedido-email').value.trim();
  const foto = document.getElementById('pedido-foto').files[0];

  // Validacion minima
  if (!nombre) {
    document.getElementById('pedido-nombre').focus();
    return;
  }
  if (!email || !email.includes('@')) {
    document.getElementById('pedido-email').focus();
    return;
  }
  if (!foto) {
    document.getElementById('campo-upload').style.borderColor = 'var(--neon-rosa)';
    setTimeout(() => {
      document.getElementById('campo-upload').style.borderColor = '';
    }, 1500);
    return;
  }

  // Simulacion de envio: ocultar campos y mostrar confirmacion
  document.querySelector('.modal__pedido-campos').style.display = 'none';
  document.getElementById('modal-pedido-enviar').style.display = 'none';
  document.querySelector('.modal__pedido-volver').style.display = 'none';

  document.getElementById('confirmacion-texto').textContent =
    'Gracias ' + nombre + '. He recibido tu pedido y te escribo a ' + email + ' en menos de 24h con todos los detalles.';

  document.getElementById('modal-confirmacion').classList.add('activa');
}

function iniciarCompra() {
  abrirFormularioPedido();
}


function iniciarModal() {
  document.getElementById('modal-cerrar').addEventListener('click', cerrarModal);
  document.getElementById('modal-overlay').addEventListener('click', cerrarModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
  });
  document.getElementById('modal-btn-compra').addEventListener('click', () => {
  const ilusId = Number(document.getElementById('modal').dataset.ilusActual);
  añadirAlCarrito(ilusId, productoSeleccionado);
});

  // Pedido
  document.getElementById('modal-pedido-volver').addEventListener('click', volverAlModal);
  document.getElementById('modal-pedido-enviar').addEventListener('click', enviarPedido);
  document.getElementById('modal-confirmacion-cerrar').addEventListener('click', cerrarModal);

  // Preview de foto al seleccionar archivo
  document.getElementById('pedido-foto').addEventListener('change', (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      document.getElementById('upload-preview').src = ev.target.result;
      document.getElementById('campo-upload').classList.add('con-foto');
    };
    reader.readAsDataURL(archivo);
  });
}


/* =============================================
   CARRUSEL DEL HERO

   Coge las imagenes de poster del array
   ilustraciones automaticamente.
   Sin duplicar datos: si añades una ilustracion
   nueva, aparece sola en el carrusel.
   ============================================= */

let carruselActual = 0;
let carruselTimer = null;
const CARRUSEL_INTERVALO = 4000; // ms entre diapositivas

function iniciarCarrusel() {
  const contenedor = document.getElementById('hero-carrusel');
  const contenedorPuntos = document.getElementById('hero-puntos');

  // Cogemos solo las ilustraciones que tienen mockup de poster
  const imagenes = ilustraciones
    .filter(il => il.mockups && il.mockups.poster)
    .map(il => ({ src: il.mockups.poster, titulo: il.titulo }));

  if (imagenes.length === 0) return;

  // Crear diapositivas
  imagenes.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero__diapositiva' + (i === 0 ? ' activa' : '');
    slide.style.backgroundImage = `url('${img.src}')`;
    slide.setAttribute('aria-label', img.titulo);
    contenedor.appendChild(slide);

    // Crear punto indicador
    const punto = document.createElement('button');
    punto.className = 'hero__punto' + (i === 0 ? ' activo' : '');
    punto.setAttribute('aria-label', 'ir a ' + img.titulo);
    punto.addEventListener('click', () => irADiapositiva(i));
    contenedorPuntos.appendChild(punto);
  });

  // Flechas
  document.getElementById('hero-prev').addEventListener('click', () => {
    const total = document.querySelectorAll('.hero__diapositiva').length;
    irADiapositiva((carruselActual - 1 + total) % total);
  });

  document.getElementById('hero-next').addEventListener('click', () => {
    const total = document.querySelectorAll('.hero__diapositiva').length;
    irADiapositiva((carruselActual + 1) % total);
  });

  // Arrancar el timer automatico
  arrancarTimer();
}

function irADiapositiva(indice) {
  const slides = document.querySelectorAll('.hero__diapositiva');
  const puntos = document.querySelectorAll('.hero__punto');

  // Quitar activo de todos
  slides[carruselActual].classList.remove('activa');
  puntos[carruselActual].classList.remove('activo');

  // Poner activo en el nuevo
  carruselActual = indice;
  slides[carruselActual].classList.add('activa');
  puntos[carruselActual].classList.add('activo');

  // Reiniciar el timer para que no salte justo despues de clicar
  reiniciarTimer();
}

function arrancarTimer() {
  carruselTimer = setInterval(() => {
    const total = document.querySelectorAll('.hero__diapositiva').length;
    irADiapositiva((carruselActual + 1) % total);
  }, CARRUSEL_INTERVALO);
}

function reiniciarTimer() {
  clearInterval(carruselTimer);
  arrancarTimer();
}

function iniciarHeader() {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });
}

function iniciarScrollReveal() {
  // El observer vigila cada card
  // Cuando el 15% de la card entra en pantalla, la hace visible
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        // Una vez visible dejamos de observarla — ya no necesita vigilancia
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.15   // 15% visible para activar
  });

  // Observamos todas las cards del grid
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}

/* =============================================
   CARRITO
   ============================================= */

// El carrito vive en localStorage para que persista
// si el usuario recarga la página
let carrito = JSON.parse(localStorage.getItem('iaks-carrito')) || [];

function guardarCarrito() {
  localStorage.setItem('iaks-carrito', JSON.stringify(carrito));
}

function añadirAlCarrito(ilusId, productoId) {
  const ilus = ilustraciones.find(il => il.id === ilusId);
  const prod = productos.find(p => p.id === productoId);
  if (!ilus || !prod) return;

  const item = {
    id: Date.now(), // id único para poder eliminar
    ilusId,
    productoId,
    titulo: ilus.titulo,
    estilo: ilus.estilo,
    producto: prod.nombre,
    precio: prod.precio,
    imagen: ilus.mockups[productoId] || ilus.imagen,
  };

  carrito.push(item);
  guardarCarrito();
  actualizarContador();
  mostrarFeedbackCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(item => item.id !== id);
  guardarCarrito();
  actualizarContador();
  renderizarCarrito();
}

function actualizarContador() {
  const contador = document.getElementById('carrito-contador');
  contador.textContent = carrito.length;
  if (carrito.length > 0) {
    contador.classList.add('visible');
  } else {
    contador.classList.remove('visible');
  }
}

// Feedback visual al añadir — el botón confirma la acción
function mostrarFeedbackCarrito() {
  const btn = document.getElementById('modal-btn-compra');
  const textoOriginal = btn.textContent;
  btn.textContent = 'añadido';
  btn.style.borderColor = 'var(--neon-cyan)';
  btn.style.color = 'var(--neon-cyan)';
  setTimeout(() => {
    btn.textContent = textoOriginal;
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1500);
}

function renderizarCarrito() {
  const contenedor = document.getElementById('carrito-items');
  const footer = document.getElementById('carrito-footer');

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="carrito-vacio">
        <div class="carrito-vacio__icono">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <p class="carrito-vacio__texto">tu carrito está vacío<br/>explora la galería y añade algo</p>
        <button class="btn" onclick="cerrarCarrito()">ver galería</button>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';

  contenedor.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img class="carrito-item__imagen" src="${item.imagen}" alt="${item.titulo}" />
      <div class="carrito-item__info">
        <div class="carrito-item__titulo">${item.titulo}</div>
        <div class="carrito-item__detalle">${item.estilo.replace(/-/g, ' ')} — ${item.producto}</div>
      </div>
      <div class="carrito-item__precio">${item.precio}</div>
      <button class="carrito-item__eliminar" onclick="eliminarDelCarrito(${item.id})" aria-label="eliminar">&#x2715;</button>
    </div>
  `).join('');

  // Total orientativo — cogemos el primer número de cada precio
  const total = carrito.reduce((acc, item) => {
    const num = parseInt(item.precio.replace(/[^0-9]/g, ''));
    return acc + (isNaN(num) ? 0 : num);
  }, 0);
  document.getElementById('carrito-total').textContent = 'desde ' + total + '€';
}

function abrirCarrito() {
  renderizarCarrito();
  document.getElementById('carrito-panel').classList.add('abierto');
  document.getElementById('carrito-overlay').classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
  document.getElementById('carrito-panel').classList.remove('abierto');
  document.getElementById('carrito-overlay').classList.remove('abierto');
  document.body.style.overflow = '';
}

function iniciarCarritoUI() {
  actualizarContador();
  document.getElementById('carrito-btn').addEventListener('click', abrirCarrito);
  document.getElementById('carrito-cerrar').addEventListener('click', cerrarCarrito);
  document.getElementById('carrito-overlay').addEventListener('click', cerrarCarrito);
  document.getElementById('carrito-tramitar').addEventListener('click', () => {
    cerrarCarrito();
    // Por ahora lleva a contacto — cuando conectes Formspree aquí irá el formulario
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });
}

function renderizarTestimonios() {
  const contenedor = document.getElementById('testimonios-grid');
  if (!contenedor) return;

  if (testimonios.length === 0) {
    contenedor.innerHTML = `
      <div class="testimonios__vacio">
        pronto aqui aparecerán los primeros recuerdos reales.<br/>
        sé el primero en compartir el tuyo.
      </div>
    `;
    return;
  }

  contenedor.innerHTML = testimonios.map(t => `
    <div class="testimonio">
      <div class="testimonio__comparativa">
        <img class="testimonio__foto" src="${t.fotoOriginal}" alt="foto original de ${t.nombre}" loading="lazy" />
        <img class="testimonio__foto" src="${t.fotoResultado}" alt="ilustracion de ${t.nombre}" loading="lazy" />
        <div class="testimonio__separador">→</div>
        <span class="testimonio__etiqueta-foto testimonio__etiqueta-foto--original">original</span>
        <span class="testimonio__etiqueta-foto testimonio__etiqueta-foto--resultado">${t.estilo.replace(/-/g, ' ')}</span>
      </div>
      <div class="testimonio__info">
        <div class="testimonio__cliente">
          <div>
            <div class="testimonio__nombre">${t.nombre}</div>
            <div class="testimonio__ciudad">${t.ciudad}</div>
          </div>
          <span class="testimonio__producto-tag">${t.producto}</span>
        </div>
        <p class="testimonio__mensaje">"${t.mensaje}"</p>
      </div>
    </div>
  `).join('');
}
/* =============================================
   INTERNACIONALIZACIÓN (i18n)
   ============================================= */

const traducciones = {
  es: {
    // Nav
    nav: {
      galeria: "galería",
      comoFunciona: "como funciona",
      sobre: "sobre",
      contacto: "contacto",
    },
    // Hero
    hero: {
      tagline: "ilustración con alma",
      titulo1: "arte que",
      titulo2: "se lleva",
      sub: "Ilustraciones únicas en pósters, tazas, stickers y mucho más.<br/>Elige tu estilo. Elige tu objeto. Llévate un pedacito.",
      cta: "ver la galería",
    },
    // Galeria
    galeria: {
      titulo: "la colección",
      filtroTodos: "todos",
      ver: "ver",
    },
    // Como funciona
    comoFunciona: {
      etiqueta: "el proceso",
      titulo: "asi funciona",
      sub: "De tu foto a un objeto único en cuatro pasos.",
      pasos: [
        { titulo: "elige tu estilo", texto: "Explora la galería y encuentra el estilo visual que más te representa. Rotulador, lápiz, cómic, retro pop o fantasía." },
        { titulo: "elige tu regalo", texto: "Póster, taza, camiseta, sticker, llavero o pin. Elige el formato en el que quieres que viva tu ilustración." },
        { titulo: "mándame tu foto", texto: "Una foto tuya, de alguien especial, una mascota, un lugar. Cualquier recuerdo que merezca convertirse en algo tangible." },
        { titulo: "recíbelo en casa", texto: "iaks transforma tu foto con el estilo elegido y te lo envía listo para sorprender. Un recuerdo con alma." },
      ],
      cta: "quiero el mío",
    },
    // Sobre
    sobre: {
      etiqueta: "detrás de iaks",
      titulo1: "el dibujo",
      titulo2: "siempre estuvo",
      titulo3: "primero",
      p1: "iaks nace de una contradicción bonita: un estudiante de desarrollo web que no puede soltar el lápiz. Código de día, ilustración de noche, y la convicción de que las dos cosas se pueden mezclar sin perder el alma.",
      p2: "La inteligencia artificial no reemplaza la mirada — la amplifica. Permite que cualquiera pueda convertir un recuerdo, una cara, un momento, en algo que se puede tocar, colgar, regalar. Eso es lo que hace iaks.",
      p3: "Un recuerdo tangible. Con estilo.",
      dato1: "estilos visuales",
      dato2: "formatos de producto",
      dato3: "obsesión",
    },
    // Testimonios
    testimonios: {
      etiqueta: "lo que dicen",
      titulo: "recuerdos reales",
      sub: "Fotos que se convirtieron en algo tangible.",
      vacio: "pronto aquí aparecerán los primeros recuerdos reales.<br/>sé el primero en compartir el tuyo.",
      original: "original",
    },
    // Contacto
    contacto: {
      titulo: "¿quieres algo?",
      sub: "Escríbeme y lo hablamos.",
      cta: "hola@iaks.art",
    },
    // Modal
    modal: {
      eligeProducto: "elige un producto para verlo",
      enQueLoQuieres: "en que lo quieres",
      pedirEste: "añadir al carrito",
      volver: "← volver",
      tuNombre: "tu nombre",
      placeholderNombre: "como te llamas",
      tuEmail: "tu email",
      placeholderEmail: "donde te escribo",
      tuFoto: "tu foto",
      uploadTexto: "arrastra tu foto o haz clic",
      uploadSub: "jpg, png — max 10mb",
      nota: "nota (opcional)",
      placeholderNota: "algo que deba saber sobre la foto o el encargo",
      confirmar: "confirmar pedido",
      pedidoRecibido: "pedido recibido",
      cerrar: "cerrar",
    },
    // Carrito
    carrito: {
      titulo: "tu carrito",
      vacio: "tu carrito está vacío<br/>explora la galería y añade algo",
      verGaleria: "ver galería",
      totalEstimado: "total estimado",
      tramitar: "tramitar pedido",
      aviso: "los precios son orientativos, se confirman al tramitar",
    },
    // Footer
    footer: "© 2025 iaks — hecho con cariño y píxeles",
    // Productos
    productos: {
      poster: "Póster A3",
      taza: "Taza",
      camiseta: "Camiseta",
      sticker: "Sticker",
      llavero: "Llavero",
      pin: "Pin",
    },
    // Ilustraciones
    ilustraciones: [
      { titulo: "ESTILO ROTU", descripcion: "Rotulador directo, sin red. El trazo lo dice todo." },
      { titulo: "ESTILO LAPIZ", descripcion: "Trazos suaves y líneas quebradas que cuentan más de lo que muestran." },
      { titulo: "ESTILO COMIC", descripcion: "Viñeta urbana con sombras duras, perspectiva imposible y mucha actitud." },
      { titulo: "ESTILO ANIME", descripcion: "Inspiración directa de los mangas y animes clásicos: ojos grandes, y mucho dramatismo." },
      { titulo: "ESTILO FANTASÍA", descripcion: "Magia, sofisticación y ojos grandes." },
      { titulo: "ESTILO VECTOR", descripcion: "minimalismo moderno, con colores planos y formas geométricas." },
    ],
  },

  en: {
    nav: {
      galeria: "gallery",
      comoFunciona: "how it works",
      sobre: "about",
      contacto: "contact",
    },
    hero: {
      tagline: "illustration with soul",
      titulo1: "art you",
      titulo2: "can keep",
      sub: "Unique illustrations on posters, mugs, stickers and more.<br/>Pick your style. Pick your format. Take a piece home.",
      cta: "see the gallery",
    },
    galeria: {
      titulo: "the collection",
      filtroTodos: "all",
      ver: "view",
    },
    comoFunciona: {
      etiqueta: "the process",
      titulo: "how it works",
      sub: "From your photo to a unique object in four steps.",
      pasos: [
        { titulo: "pick your style", texto: "Browse the gallery and find the visual style that represents you. Marker, pencil, comic, retro pop or fantasy." },
        { titulo: "pick your gift", texto: "Poster, mug, t-shirt, sticker, keychain or pin. Choose the format where your illustration will live." },
        { titulo: "send me your photo", texto: "A photo of you, someone special, a pet, a place. Any memory worth turning into something tangible." },
        { titulo: "receive it at home", texto: "iaks transforms your photo in the chosen style and sends it ready to surprise. A memory with soul." },
      ],
      cta: "i want mine",
    },
    sobre: {
      etiqueta: "behind iaks",
      titulo1: "drawing",
      titulo2: "always came",
      titulo3: "first",
      p1: "iaks was born from a beautiful contradiction: a web development student who can't put down the pencil. Code by day, illustration by night, with the conviction that both can mix without losing their soul.",
      p2: "Artificial intelligence doesn't replace the eye — it amplifies it. It allows anyone to turn a memory, a face, a moment, into something you can touch, hang, or gift. That's what iaks does.",
      p3: "A tangible memory. With style.",
      dato1: "visual styles",
      dato2: "product formats",
      dato3: "obsession",
    },
    testimonios: {
      etiqueta: "what they say",
      titulo: "real memories",
      sub: "Photos that became something tangible.",
      vacio: "soon the first real memories will appear here.<br/>be the first to share yours.",
      original: "original",
    },
    contacto: {
      titulo: "want something?",
      sub: "Write to me and let's talk.",
      cta: "hola@iaks.art",
    },
    modal: {
      eligeProducto: "pick a product to preview",
      enQueLoQuieres: "what format do you want",
      pedirEste: "add to cart",
      volver: "← back",
      tuNombre: "your name",
      placeholderNombre: "what's your name",
      tuEmail: "your email",
      placeholderEmail: "where should i write you",
      tuFoto: "your photo",
      uploadTexto: "drag your photo or click",
      uploadSub: "jpg, png — max 10mb",
      nota: "note (optional)",
      placeholderNota: "anything i should know about the photo or the order",
      confirmar: "confirm order",
      pedidoRecibido: "order received",
      cerrar: "close",
    },
    carrito: {
      titulo: "your cart",
      vacio: "your cart is empty<br/>browse the gallery and add something",
      verGaleria: "see gallery",
      totalEstimado: "estimated total",
      tramitar: "checkout",
      aviso: "prices are estimates, confirmed upon checkout",
    },
    footer: "© 2025 iaks — made with care and pixels",
    productos: {
      poster: "A3 Poster",
      taza: "Mug",
      camiseta: "T-shirt",
      sticker: "Sticker",
      llavero: "Keychain",
      pin: "Pin",
    },
    ilustraciones: [
      { titulo: "MARKER STYLE", description: "Direct marker, no safety net. The line says it all." },
      { titulo: "PENCIL STYLE", description: "Soft strokes and broken lines that tell more than they show." },
      { titulo: "COMIC STYLE", description: "Urban panel with hard shadows, impossible perspective, and plenty of attitude." },
      { titulo: "ANIME STYLE", description: "Direct inspiration from classic manga and anime: big eyes, and lots of drama." },
      { titulo: "FANTASY STYLE", description: "Magic, sophistication, and big eyes." },
      { titulo: "VECTOR STYLE", description: "Modern minimalism, with flat colors and geometric shapes." },
    ],
  },
};

let idiomaActual = localStorage.getItem('iaks-idioma') || 'es';

function aplicarIdioma(idioma) {
  idiomaActual = idioma;
  localStorage.setItem('iaks-idioma', idioma);
  const t = traducciones[idioma];

  // Toggle visual
  const toggle = document.getElementById('idioma-toggle');
  toggle.className = 'idioma-toggle ' + idioma;

  // Nav
  document.querySelector('[href="#galeria"]').textContent = t.nav.galeria;
  document.querySelector('[href="#como-funciona"]').textContent = t.nav.comoFunciona;
  document.querySelector('[href="#sobre"]').textContent = t.nav.sobre;
  document.querySelector('[href="#contacto"]').textContent = t.nav.contacto;

  // Hero
  document.querySelector('.hero__tagline').textContent = t.hero.tagline;
  document.querySelector('.hero__titulo').innerHTML = t.hero.titulo1 + '<br/><span class="hero__acento">' + t.hero.titulo2 + '</span>';
  document.querySelector('.hero__sub').innerHTML = t.hero.sub;
  document.querySelector('.hero .btn--grande').textContent = t.hero.cta;

  // Galeria
  document.querySelector('.galeria__titulo').textContent = t.galeria.titulo;
  document.querySelector('[data-filtro="todos"]').textContent = t.galeria.filtroTodos;

  // Como funciona
  document.querySelector('.como-funciona__etiqueta').textContent = t.comoFunciona.etiqueta;
  document.querySelector('.como-funciona__titulo').textContent = t.comoFunciona.titulo;
  document.querySelector('.como-funciona__sub').textContent = t.comoFunciona.sub;
  const pasosTitulos = document.querySelectorAll('.paso__titulo');
  const pasosTextos = document.querySelectorAll('.paso__texto');
  t.comoFunciona.pasos.forEach((paso, i) => {
    if (pasosTitulos[i]) pasosTitulos[i].textContent = paso.titulo;
    if (pasosTextos[i]) pasosTextos[i].textContent = paso.texto;
  });
  document.querySelector('.como-funciona__cta .btn--grande').textContent = t.comoFunciona.cta;

  // Sobre
  document.querySelector('.sobre__etiqueta').textContent = t.sobre.etiqueta;
  document.querySelector('.sobre__titulo').innerHTML =
    t.sobre.titulo1 + '<br/><span class="sobre__acento">' + t.sobre.titulo2 + '</span><br/>' + t.sobre.titulo3;
  const sobreParrafos = document.querySelectorAll('.sobre__texto p');
  if (sobreParrafos[0]) sobreParrafos[0].textContent = t.sobre.p1;
  if (sobreParrafos[1]) sobreParrafos[1].textContent = t.sobre.p2;
  if (sobreParrafos[2]) sobreParrafos[2].textContent = t.sobre.p3;
  const datoLabels = document.querySelectorAll('.sobre__dato-label');
  if (datoLabels[0]) datoLabels[0].textContent = t.sobre.dato1;
  if (datoLabels[1]) datoLabels[1].textContent = t.sobre.dato2;
  if (datoLabels[2]) datoLabels[2].textContent = t.sobre.dato3;

  // Testimonios
  document.querySelector('.testimonios__etiqueta').textContent = t.testimonios.etiqueta;
  document.querySelector('.testimonios__titulo').textContent = t.testimonios.titulo;
  document.querySelector('.testimonios__sub').textContent = t.testimonios.sub;

  // Contacto
  document.querySelector('.contacto__titulo').textContent = t.contacto.titulo;
  document.querySelector('.contacto p').textContent = t.contacto.sub;

  // Footer
  document.querySelector('.footer span').textContent = t.footer;

  // Rerenderizar cards con titulos traducidos
  const listaActual = ilustraciones.map((il, i) => ({
    ...il,
    titulo: t.ilustraciones[i]?.titulo || il.titulo,
    descripcion: t.ilustraciones[i]?.descripcion || il.descripcion,
  }));
  renderizarCards(listaActual);
  setTimeout(() => iniciarScrollReveal(), 100);

  // Rerenderizar testimonios
  renderizarTestimonios();

  // Actualizar lang del html
  document.documentElement.lang = idioma;
}

function iniciarToggleIdioma() {
  const toggle = document.getElementById('idioma-toggle');
  toggle.addEventListener('click', () => {
    const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
    aplicarIdioma(nuevoIdioma);
  });
  // Aplicar idioma guardado al cargar
  aplicarIdioma(idiomaActual);
}


/* =============================================
   5. ARRANQUE
   ============================================= */

function init() {
  iniciarCarrusel(); 
  iniciarHeader();  
  renderizarFiltros();
  renderizarCards(ilustraciones);
  iniciarFiltros();
  iniciarModal();
  iniciarCarritoUI(); 
  iniciarScrollReveal();
  renderizarTestimonios();
  iniciarToggleIdioma();
}

document.addEventListener('DOMContentLoaded', init);
