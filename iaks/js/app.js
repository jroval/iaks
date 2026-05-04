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
    titulo: "Cancha y movil",
    estilo: "rotulador",
    descripcion: "Rotulador directo, sin red. Una chica, una camiseta de baloncesto y el movil.",
    imagen: "assets/images/mockups/rotulador/Taza.png",
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
    titulo: "Boceto de Memoria",
    estilo: "lapiz",
    descripcion: "Trazos suaves y lineas quebradas que cuentan mas de lo que muestran.",
    imagen: "assets/images/mockups/lapiz/poster.png",
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
    titulo: "Ciudad Vertical",
    estilo: "comic-realista",
    descripcion: "Vineta urbana con sombras duras, perspectiva imposible y mucha actitud.",
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
    titulo: "Domingo en Yokohama",
    estilo: "comic-anime",
    descripcion: "Paleta de papel reciclado y tipografia que huele a vinilo.",
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
    titulo: "La Guardia del Bosque",
    estilo: "comic-fantasia",
    descripcion: "Magia, pelo imposible y ojos grandes. Siempre hay un bosque y una promesa.",
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
    titulo: "La Guardia del Bosque",
    estilo: "vector",
    descripcion: "Magia, pelo imposible y ojos grandes. Siempre hay un bosque y una promesa.",
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
}

document.addEventListener('DOMContentLoaded', init);
