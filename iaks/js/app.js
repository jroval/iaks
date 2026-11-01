/* =============================================
   APP.JS — el cerebro de iaks
   
   Estructura:
   1. DATOS (ilustraciones y productos)
   2. RENDERIZADO (generar HTML desde datos)
   3. MODAL
   4. ARRANQUE (init)
   ============================================= */


/* =============================================
   1. DATOS
   
   Aquí viven todas tus ilustraciones y productos.
   Para añadir una nueva ilustración: solo añade
   un objeto nuevo al array. El resto se hace solo.
   
   ESTILOS disponibles (carpetas de mockups
   y de assets/images/estilos):
   - "rotulador"
   - "lapiz"
   - "comic-realista"
   - "comic-anime"
   - "comic-fantasia"
   - "vector"
   ============================================= */

const ilustraciones = [

  // --- COMIC ---
  {
    id: 1,
    titulo: "ESTILO CÓMIC",
    estilo: "Cómic",
    descripcion: "Línea entintada, sombras marcadas y color: tu foto convertida en viñeta.",
    ilustracion: "assets/images/estilos/comic-realista.webp",
    mockups: {
      poster:   "assets/images/mockups/comic-realista/poster.png",
      taza:     "assets/images/mockups/comic-realista/taza.png",
      camiseta: "assets/images/mockups/comic-realista/camiseta.png",
      sticker:  "assets/images/mockups/comic-realista/sticker.png",
      llavero:  "assets/images/mockups/comic-realista/llavero.png",
      pin:      "assets/images/mockups/comic-realista/pin.png",
    }
  },

  // --- ROTULADOR ---
  {
    id: 2,
    titulo: "ESTILO ROTULADOR",
    estilo: "Rotulador",
    descripcion: "Rotulador directo, sin red. El trazo lo dice todo.",
    ilustracion: "assets/images/estilos/rotulador.webp",
    // Los mockups de producto eran de la ilustracion anterior: solo queda su cartel para el carrusel del hero
    cartel: "assets/images/mockups/rotulador/poster.png",
    mockups: {}
  },

  // --- LAPIZ DE COLORES --- (sin mockups: la vista previa usa la ilustracion)
  {
    id: 3,
    titulo: "ESTILO LÁPIZ DE COLORES",
    estilo: "Lápiz de colores",
    descripcion: "Capas de lápiz sobre papel, con la textura y la calidez del dibujo a color.",
    ilustracion: "assets/images/estilos/lapiz-colores.webp",
    mockups: {}
  },

  // --- ACUARELA --- (sin mockups: la vista previa usa la ilustracion)
  {
    id: 4,
    titulo: "ESTILO ACUARELA",
    estilo: "Acuarela",
    descripcion: "Manchas de agua y color que se funden con el papel. Ligera, luminosa y delicada.",
    ilustracion: "assets/images/estilos/acuarela.webp",
    mockups: {}
  },
];





/* =============================================
   PRODUCTOS

   Precios PROVISIONALES (propuesta del briefing, sin calcular costes
   reales). Cambia aqui el precio y se actualiza en toda la web.

   mockup: clave de ilustraciones[].mockups que se usa como vista previa.
   null = se ensena la ilustracion sola (retrato digital).
   ============================================= */

const productos = [
  {
    id: "digital",
    nombre: "Retrato digital",
    precio: 19.90,
    mockup: null,
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/></svg>`
  },
  {
    id: "lamina",
    nombre: "Lámina",
    precio: 34.90,
    mockup: "poster",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1"/><line x1="5" y1="17" x2="19" y2="17"/></svg>`
  },
  {
    id: "enmarcado",
    nombre: "Cuadro enmarcado",
    precio: 49.90,
    mockup: "poster",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><rect x="7" y="7" width="10" height="10"/></svg>`
  },
  {
    id: "taza",
    nombre: "Taza",
    precio: 22.90,
    mockup: "taza",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`
  },
  {
    id: "llavero",
    nombre: "Llavero",
    precio: 9.90,
    mockup: "llavero",
    icono: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/></svg>`
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


/* Entradas de "Descubre qué podemos crear". imagen: obra representativa
   (assets/images/categorias/<id>.webp). Mientras sea null se ve un hueco de papel.
   posicion (opcional): object-position si el recorte por defecto corta caras. */
const categorias = [
  { id: "mascotas", imagen: "assets/images/categorias/mascotas.webp" },
  { id: "parejas", imagen: "assets/images/categorias/parejas.webp", posicion: "50% 0%" },
  { id: "familias", imagen: "assets/images/categorias/familias.webp" },
];


/* Parejas reales foto original / resultado para el comparador de la portada.
   Mientras este vacio, la seccion no se muestra. Ejemplo:
   { original: "assets/images/antes-despues/ana-original.jpg",
     resultado: "assets/images/antes-despues/ana-comic.jpg",
     estilo: "comic-realista" }  // carpeta del estilo, para el pie de foto */
const antesDespues = [
  {
    original: "assets/images/antes-despues/sara-original.webp",
    resultado: "assets/images/antes-despues/sara-rotulador.webp",
    estilo: "rotulador",
  },
  {
    original: "assets/images/antes-despues/andrea-original.webp",
    resultado: "assets/images/antes-despues/andrea-comic.webp",
    estilo: "comic-realista",
  },
  {
    original: "assets/images/antes-despues/perro-original.webp",
    resultado: "assets/images/antes-despues/perro-lapiz.webp",
    estilo: "lapiz-colores",
  },
];


/* =============================================
   2. RENDERIZADO
   ============================================= */

function renderizarCards(lista) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  lista.forEach((ilus) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = ilus.id;
    card.dataset.estilo = ilus.estilo;

    card.innerHTML = `
      <div class="card__imagen-wrap card__imagen-wrap--ilustracion">
        ${ilus.ilustracion ? `<img
          class="card__imagen"
          src="${ilus.ilustracion}"
          alt="${tr().ui.altEjemplo(ilus.estilo)}"
          loading="lazy"
        />` : `<span class="card__pronto">${tr().categorias.pronto}</span>`}
      </div>
      <div class="card__info">
        <div>
          <div class="card__info-nombre">${ilus.estilo.replace(/-/g, ' ')}</div>
          <div class="card__formatos" title="${tr().ui.disponibleEn} ${productos.map(p => nombreProducto(p).toLowerCase()).join(', ')}">
            ${productos.map(p => p.icono).join('')}
            <span>${precioMinimo()}</span>
          </div>
        </div>
        ${ilus.ilustracion ? `<span class="card__cta">${tr().ui.elegir}</span>` : ''}
      </div>
    `;

    grid.appendChild(card);
    if (ilus.ilustracion) card.addEventListener('click', () => abrirModal(ilus.id));
    else card.classList.add('card--pronto');
  });

  // Aqui, una sola vez, cuando todas las cards ya estan en el DOM
  iniciarScrollReveal();
}


// Imagen que se ensena al elegir un formato
function vistaPrevia(ilus, prod) {
  return (prod.mockup && ilus.mockups[prod.mockup]) || ilus.ilustracion;
}

function precioMinimo() {
  return tr().ui.desde(Math.min(...productos.map(p => p.precio)));
}


// Atajos para leer los textos del idioma activo
function tr() {
  return traducciones[idiomaActual];
}

function nombreProducto(prod) {
  return tr().productos[prod.id] || prod.nombre;
}

// Devuelve la ilustracion con estilo, titulo y descripcion en el idioma activo
function ilusTraducida(ilus) {
  return { ...ilus, ...tr().ilustraciones[ilustraciones.indexOf(ilus)] };
}


function renderizarProductosModal(ilus) {
  const contenedor = document.getElementById('modal-productos');
  contenedor.innerHTML = '';

  productos.forEach(prod => {
    const tieneMockup = vistaPrevia(ilus, prod);
    const opcion = document.createElement('button');
    opcion.className = 'producto-opcion' + (tieneMockup ? '' : ' sin-mockup');
    opcion.dataset.productoId = prod.id;
    opcion.disabled = !tieneMockup;

    opcion.innerHTML = `
      <span class="producto-opcion__icono">${prod.icono}</span>
      <div class="producto-opcion__nombre">${nombreProducto(prod)}</div>
      <div class="producto-opcion__precio">${tieneMockup ? tr().ui.desde(prod.precio) : tr().ui.proximamente}</div>
    `;

    if (tieneMockup) {
      opcion.addEventListener('click', () => seleccionarProducto(prod.id, nombreProducto(prod), tieneMockup));
    }

    contenedor.appendChild(opcion);
  });
}


/* =============================================
   3. MODAL
   ============================================= */

let productoSeleccionado = null;
let productoPreferido = null; // formato elegido antes que el estilo (entrada por producto)
let previewTimer = null; // fundido del mockup; se cancela al reabrir el modal

function abrirModal(id) {
  const base = ilustraciones.find(il => il.id === id);
  if (!base) return;
  const ilus = ilusTraducida(base);

  document.getElementById('modal').dataset.ilusActual = ilus.id;

  document.getElementById('modal-titulo').textContent = ilus.estilo;
  document.getElementById('modal-descripcion').textContent = ilus.descripcion;

  renderizarProductosModal(ilus);

  // La vista previa arranca con la ilustracion; cambia al mockup al elegir formato
  productoSeleccionado = null;
  clearTimeout(previewTimer);
  const preview = document.getElementById('modal-preview');
  preview.style.opacity = '1';
  preview.src = ilus.ilustracion;
  preview.alt = tr().ui.altEjemplo(ilus.estilo);
  document.getElementById('modal-preview-label').textContent = '';
  document.getElementById('modal-seleccion').textContent = tr().ui.eligeFormato;
  document.getElementById('modal-btn-compra').disabled = true;

  const preferido = productos.find(p => p.id === productoPreferido);
  if (preferido && vistaPrevia(ilus, preferido)) {
    seleccionarProducto(preferido.id, nombreProducto(preferido), vistaPrevia(ilus, preferido));
  }

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
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    preview.src = rutaMockup;
    preview.alt = nombre;
    preview.style.opacity = '1';
  }, 150);

  const prod = productos.find(p => p.id === id);
  document.getElementById('modal-preview-label').textContent = nombre;
  document.getElementById('modal-seleccion').textContent = nombre + ' · ' + tr().ui.desde(prod.precio);
  document.getElementById('modal-btn-compra').disabled = false;
}


function abrirFormularioPedido() {
  const ilusId = Number(document.getElementById('modal').dataset.ilusActual);
  const ilus = ilusTraducida(ilustraciones.find(il => il.id === ilusId));
  const prod = productos.find(p => p.id === productoSeleccionado);
  const ui = tr().ui;

  // Rellenar el resumen con lo elegido
  document.getElementById('modal-pedido-resumen').innerHTML = `
    <div class="resumen__item">
      <span class="resumen__label">${ui.estilo}</span>
      <span class="resumen__valor">${ilus.estilo}</span>
    </div>
    <div class="resumen__item">
      <span class="resumen__label">${ui.formato}</span>
      <span class="resumen__valor">${nombreProducto(prod)}</span>
    </div>
    <div class="resumen__item">
      <span class="resumen__label">${ui.precio}</span>
      <span class="resumen__valor">${ui.desde(prod.precio)}</span>
    </div>
  `;

  // Ocultar layout principal y mostrar formulario
  document.querySelector('.modal__layout').style.display = 'none';
  document.getElementById('modal-pedido').classList.add('activo');

  // Resetear formulario
  document.getElementById('pedido-nombre').value = '';
  document.getElementById('pedido-email').value = '';
  document.getElementById('pedido-nota').value = '';
  document.getElementById('upload-preview').style.backgroundImage = '';
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
    document.getElementById('campo-upload').style.borderColor = 'var(--acento)';
    setTimeout(() => {
      document.getElementById('campo-upload').style.borderColor = '';
    }, 1500);
    return;
  }

  // Simulacion de envio: ocultar campos y mostrar confirmacion
  document.querySelector('.modal__pedido-campos').style.display = 'none';
  document.getElementById('modal-pedido-enviar').style.display = 'none';
  document.querySelector('.modal__pedido-volver').style.display = 'none';

  document.getElementById('confirmacion-texto').textContent = tr().ui.confirmacion(nombre, email);

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
  document.getElementById('modal-btn-compra').addEventListener('click', abrirFormularioPedido);

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
      document.getElementById('upload-preview').style.backgroundImage = `url(${ev.target.result})`;
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
    .filter(il => il.cartel || il.mockups.poster)
    .map(il => ({ src: il.cartel || il.mockups.poster, titulo: il.titulo }));

  if (imagenes.length === 0) return;

  // Crear diapositivas
  imagenes.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero__diapositiva' + (i === 0 ? ' activa' : '');
    slide.style.backgroundImage = `url('${img.src}')`;
    slide.setAttribute('aria-hidden', 'true'); // decorativa
    contenedor.appendChild(slide);

    // Crear punto indicador
    const punto = document.createElement('button');
    punto.className = 'hero__punto' + (i === 0 ? ' activo' : '');
    punto.setAttribute('aria-label', img.titulo); // aplicarIdioma lo traduce
    punto.addEventListener('click', () => irADiapositiva(i));
    contenedorPuntos.appendChild(punto);
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

  // Menú móvil
  document.getElementById('hamburguesa').addEventListener('click', () => {
    const abierto = document.getElementById('header-nav').classList.toggle('abierto');
    document.getElementById('hamburguesa').classList.toggle('abierto', abierto);
    document.getElementById('hamburguesa').setAttribute('aria-expanded', abierto);
  });
}

function cerrarMenu() {
  document.getElementById('header-nav').classList.remove('abierto');
  document.getElementById('hamburguesa').classList.remove('abierto');
  document.getElementById('hamburguesa').setAttribute('aria-expanded', false);
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
    imagen: vistaPrevia(ilus, prod),
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
  btn.style.borderColor = 'var(--acento)';
  btn.style.color = 'var(--acento)';
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
        <p class="carrito-vacio__texto">${tr().carrito.vacio}</p>
        <button class="btn" onclick="cerrarCarrito()">${tr().carrito.verGaleria}</button>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';

  // Los textos salen de los datos actuales, no de lo guardado, para respetar el idioma activo
  contenedor.innerHTML = carrito.map(item => {
    const ilus = ilusTraducida(ilustraciones.find(il => il.id === item.ilusId));
    const prod = productos.find(p => p.id === item.productoId);
    return `
    <div class="carrito-item">
      <img class="carrito-item__imagen" src="${item.imagen}" alt="${ilus.estilo} — ${nombreProducto(prod)}" />
      <div class="carrito-item__info">
        <div class="carrito-item__titulo">${ilus.estilo}</div>
        <div class="carrito-item__detalle">${nombreProducto(prod)}</div>
      </div>
      <div class="carrito-item__precio">${tr().ui.desde(prod.precio)}</div>
      <button class="carrito-item__eliminar" onclick="eliminarDelCarrito(${item.id})" aria-label="${tr().carrito.eliminar}">&#x2715;</button>
    </div>
  `;
  }).join('');

  // Total orientativo
  const total = carrito.reduce((acc, item) => acc + productos.find(p => p.id === item.productoId).precio, 0);
  document.getElementById('carrito-total').textContent = tr().ui.desde(total);
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

function renderizarCategorias() {
  const t = tr().categorias;
  // Sin páginas de colección todavía: cada entrada lleva a los estilos
  document.getElementById('categorias-grid').innerHTML = categorias.map(cat => `
    <a class="categoria" href="#galeria">
      <div class="categoria__papel">
        ${cat.imagen
          ? `<img class="categoria__img" src="${cat.imagen}"${cat.posicion ? ` style="object-position: ${cat.posicion}"` : ''} alt="${t[cat.id]}" loading="lazy" />`
          : `<span class="categoria__pronto">${t.pronto}</span>`}
      </div>
      <h3 class="categoria__nombre">${t[cat.id]}</h3>
      <p class="categoria__texto">${t[cat.id + 'Texto']}</p>
      <span class="categoria__enlace">${t.verEstilos}</span>
    </a>`).join('');
}

// Ilustracion de ejemplo para presentar los formatos
const ilusEjemploFormatos = 1; // comic: sus mockups son de la misma ilustracion

function renderizarFormatos() {
  const t = tr().formatos;
  const ilus = ilusTraducida(ilustraciones.find(il => il.id === ilusEjemploFormatos));
  document.getElementById('formatos-grid').innerHTML = productos.map(prod => `
    <button class="formato" type="button" onclick="elegirFormato('${prod.id}')">
      <span class="formato__papel">
        <img class="formato__img" src="${vistaPrevia(ilus, prod)}" alt="${nombreProducto(prod)}" loading="lazy" />
      </span>
      <span class="formato__nombre">${nombreProducto(prod)}</span>
      <span class="formato__precio">${tr().ui.desde(prod.precio)}</span>
      <span class="formato__enlace">${t.elegirEstilo}</span>
    </button>`).join('');
  document.getElementById('formatos-nota').textContent = t.nota(ilus.estilo);
  pintarAvisoFormato();
}

function elegirFormato(id) {
  productoPreferido = id;
  pintarAvisoFormato();
  document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
}

function pintarAvisoFormato() {
  const aviso = document.getElementById('galeria-aviso');
  const prod = productos.find(p => p.id === productoPreferido);
  aviso.hidden = !prod;
  if (!prod) return;
  const t = tr().formatos;
  aviso.innerHTML = `${t.aviso(nombreProducto(prod))} <button type="button" onclick="productoPreferido = null; pintarAvisoFormato()">${t.quitar}</button>`;
}

function renderizarAntesDespues() {
  const seccion = document.getElementById('antes-despues');
  if (antesDespues.length === 0) {
    seccion.hidden = true;
    return;
  }

  const t = tr().antesDespues;
  // El deslizador es un input range: funciona con raton, teclado y tactil sin codigo extra
  document.getElementById('antes-despues-grid').innerHTML = antesDespues.map(par => {
    const ilus = ilustraciones.find(il => il.ilustracion.includes('/' + par.estilo + '.'));
    const estilo = ilus ? ilusTraducida(ilus).estilo : '';
    return `
    <figure class="comparador" style="--pos: 50%">
      <img class="comparador__img" src="${par.original}" alt="${t.original}" loading="lazy" />
      <img class="comparador__img comparador__img--resultado" src="${par.resultado}" alt="${t.resultado} · ${estilo}" loading="lazy" />
      <span class="comparador__etiqueta comparador__etiqueta--original">${t.original}</span>
      <span class="comparador__etiqueta comparador__etiqueta--resultado">${estilo || t.resultado}</span>
      <input class="comparador__rango" type="range" min="0" max="100" value="50" aria-label="${t.aria}"
        oninput="this.parentElement.style.setProperty('--pos', this.value + '%')" />
    </figure>`;
  }).join('');
}

function renderizarTestimonios() {
  const contenedor = document.getElementById('testimonios-grid');
  if (!contenedor) return;

  // Sin testimonios la sección parece a medio hacer: se oculta hasta tener el primero
  if (testimonios.length === 0) {
    document.getElementById('testimonios').hidden = true;
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
    // Portada (claves usadas en data-i18n="seccion.clave" del HTML)
    nav: {
      estilos: "Estilos",
      comoFunciona: "Cómo funciona",
      historia: "Nuestra historia",
      contacto: "Contacto",
    },
    hero: {
      titulo: 'Tu foto.<br/><span class="hero__acento">Otra forma de arte.</span>',
      sub: "Transformamos tus fotografías favoritas en creaciones artísticas personalizadas, cuidando cada detalle para convertirlas en algo especial.",
      cta: "Explorar estilos",
      cta2: "Empezar por el regalo",
    },
    categorias: {
      titulo: "Descubre qué podemos crear",
      sub: "Personas, parejas, familias y también quien te espera en casa moviendo la cola.",
      verEstilos: "ver estilos →",
      pronto: "muestra en camino",
      mascotas: "Mascotas",
      mascotasTexto: "Su mirada, su pose, su carácter. Convertidos en obra.",
      parejas: "Parejas",
      parejasTexto: "Vuestra foto favorita, contada de otra manera.",
      familias: "Familias",
      familiasTexto: "Todos juntos en una pieza para colgar en casa.",
    },
    formatos: {
      titulo: "Tu creación favorita, en el formato que prefieras",
      sub: "Una misma obra, varios regalos. Si ya sabes qué quieres regalar, empieza por aquí y después elige el estilo.",
      elegirEstilo: "elegir estilo →",
      nota: estilo => `Ejemplo con el estilo ${estilo}. Las imágenes de producto son orientativas.`,
      aviso: producto => `Elige el estilo para tu ${producto.toLowerCase()}.`,
      quitar: "quitar",
    },
    galeria: {
      titulo: "Cuatro formas de reinterpretar tu historia",
      sub: "Elige el estilo que más te guste. Después decides en qué quieres llevarlo.",
    },
    antesDespues: {
      titulo: "El arte está en los detalles",
      sub: "Rostro, expresión, peinado: lo que hace reconocible a cada persona, contado en otro lenguaje. Desliza para comparar.",
      original: "original",
      resultado: "iaks",
      aria: "Comparar la foto original con la transformación",
    },
    como: {
      titulo: "Así funciona",
      sub: "De tu foto a un regalo con personalidad, en cuatro pasos.",
      paso1: "Elige tu estilo",
      paso1Texto: "Descubre las colecciones y quédate con la que mejor cuente tu foto.",
      paso2: "Elige el formato",
      paso2Texto: "Lámina, cuadro, taza, llavero o retrato digital: la misma obra, en el regalo que prefieras.",
      paso3: "Comparte tu fotografía",
      paso3Texto: "Sube la imagen que quieres transformar: una persona, una pareja, tu familia o tu mascota.",
      paso4: "Creamos tu obra",
      paso4Texto: "Trabajamos la transformación con nuestros criterios de calidad y te la enseñamos. Cuando la apruebas, la producimos y te la enviamos.",
      cta: "Crear mi regalo",
    },
    porque: {
      p1: "Dirección artística",
      p1Texto: "Cada imagen sigue una intención estética, no el resultado por defecto de una herramienta.",
      p2: "Identidad reconocible",
      p2Texto: "Rostro, peinado y expresión se respetan en la medida que permite cada estilo.",
      p3: "Estilos seleccionados",
      p3Texto: "Pocos estilos, bien trabajados y coherentes entre sí.",
      p4: "Atención al detalle",
      p4Texto: "Revisamos y corregimos cada resultado antes de darlo por bueno.",
      p5: "Pensado para regalar",
      p5Texto: "Productos elegidos para que la ilustración luzca como lo que es: un regalo.",
    },
    sobre: {
      titulo: 'La tecnología abre posibilidades.<br/><span class="sobre__acento">El criterio marca la diferencia.</span>',
      p1: "Detrás de iaks hay una idea sencilla: una fotografía puede convertirse en algo mucho más especial cuando se trabaja con intención creativa.",
      p2: "Exploramos las posibilidades de la inteligencia artificial desde la dirección artística, cuidando los estilos, los detalles y la identidad de cada imagen.",
      p3: "Porque personalizar no consiste simplemente en añadir una foto a un objeto.",
    },
    testimonios: {
      titulo: "Experiencias reales",
      sub: "Regalos que ya han encontrado su sitio.",
      original: "original",
    },
    condiciones: {
      titulo: "Sin sorpresas",
      sub: "Lo que conviene saber antes de encargar tu obra.",
      c1: "Apruebas tu obra antes de producirla",
      c1Texto: "Te enviamos la creación terminada y no imprimimos, enmarcamos ni estampamos nada hasta que nos des tu confirmación.",
      c2: "Envíos dentro de España",
      c2Texto: "De momento solo enviamos a España. Verás el plazo y el coste del envío antes de pagar.",
      c3: "Materiales de calidad",
      c3Texto: "Buscamos la mejor calidad de impresión para cada formato. En cada producto detallaremos papel, marco y acabados.",
      c4: "Tus fotos son privadas",
      c4Texto: "Solo las usamos para crear tu pedido. No se publican sin tu permiso y las eliminamos cuando el encargo ha terminado.",
      c5: "Si llega dañado, te enviamos otro",
      c5Texto: "Al ser piezas hechas a medida, no se admiten devoluciones por cambio de opinión. Si tu pedido llega dañado, te enviamos uno nuevo.",
    },
    contacto: {
      titulo: "Hay una fotografía que merece convertirse en algo más.",
      cta: "Crear mi regalo",
      dudas: "¿Tienes una idea o una duda? Escríbenos a",
    },
    footer: {
      lema: "Retratos artísticos y regalos personalizados.",
      copy: "© 2026 iaks",
      aria: "pie de página",
    },
    // Textos de la interfaz (modal, cards, accesibilidad)
    ui: {
      titulo: "iaks | Retratos artísticos y regalos personalizados",
      pasoUno: "paso 1 de 2",
      pasoDos: "paso 2 de 2 · tu foto y tus datos",
      eligeEnQue: "elige en qué lo quieres",
      eligeFormato: "elige un formato para verlo",
      preciosOrientativos: "Precios orientativos hasta el lanzamiento.",
      continuar: "continuar →",
      cambiar: "← cambiar formato",
      estilo: "estilo",
      formato: "formato",
      precio: "precio",
      tuNombre: "tu nombre",
      phNombre: "¿cómo te llamas?",
      tuEmail: "tu email",
      phEmail: "¿dónde te escribo?",
      tuFoto: "tu foto",
      uploadTexto: "arrastra tu foto o haz clic",
      uploadSub: "jpg o png · máx. 10 MB",
      nota: "nota (opcional)",
      phNota: "algo que deba saber sobre la foto o el encargo",
      confirmar: "confirmar pedido",
      pedidoRecibido: "pedido recibido",
      cerrar: "cerrar",
      elegir: "elegir →",
      proximamente: "próximamente",
      disponibleEn: "disponible en",
      desde: n => "desde " + n.toFixed(2).replace(".", ",") + " €",
      altEjemplo: estilo => "ejemplo de ilustración en estilo " + estilo.toLowerCase(),
      confirmacion: (nombre, email) => "Gracias, " + nombre + ". He recibido tu pedido y te escribo a " + email + " en menos de 24 h con todos los detalles.",
      ariaMenu: "abrir menú",
      ariaCarrito: "abrir carrito",
      carritoTitulo: "tu carrito",
      totalEstimado: "total estimado",
      tramitar: "tramitar pedido",
      avisoPrecios: "los precios son orientativos, se confirman al tramitar",
      ariaCerrar: "cerrar",
      ariaModal: "elige estilo y formato",
      ariaIrA: estilo => "ir a " + estilo.toLowerCase(),
      altSobre: "ilustración de iaks enmarcada en un salón",
    },
    // Carrito
    carrito: {
      titulo: "tu carrito",
      vacio: "tu carrito está vacío<br/>explora la galería y añade algo",
      verGaleria: "ver galería",
      eliminar: "eliminar",
      totalEstimado: "total estimado",
      tramitar: "tramitar pedido",
      aviso: "los precios son orientativos, se confirman al tramitar",
    },
    // Productos
    productos: {
      digital: "Retrato digital",
      lamina: "Lámina",
      enmarcado: "Cuadro enmarcado",
      taza: "Taza",
      llavero: "Llavero",
    },
    // Ilustraciones
    ilustraciones: [
      { titulo: "ESTILO CÓMIC", estilo: "Cómic", descripcion: "Línea entintada, sombras marcadas y color: tu foto convertida en viñeta." },
      { titulo: "ESTILO ROTULADOR", estilo: "Rotulador", descripcion: "Rotulador directo, sin red. El trazo lo dice todo." },
      { titulo: "ESTILO LÁPIZ DE COLORES", estilo: "Lápiz de colores", descripcion: "Capas de lápiz sobre papel, con la textura y la calidez del dibujo a color." },
      { titulo: "ESTILO ACUARELA", estilo: "Acuarela", descripcion: "Manchas de agua y color que se funden con el papel. Ligera, luminosa y delicada." },
    ],
  },

  en: {
    nav: {
      estilos: "Styles",
      comoFunciona: "How it works",
      historia: "Our story",
      contacto: "Contact",
    },
    hero: {
      titulo: 'Your photo.<br/><span class="hero__acento">Another kind of art.</span>',
      sub: "We turn your favourite photos into personalised works of art, taking care of every detail to turn them into something special.",
      cta: "Explore styles",
      cta2: "Start with the gift",
    },
    categorias: {
      titulo: "Discover what we can create",
      sub: "People, couples, families and whoever is waiting for you at home, tail wagging.",
      verEstilos: "see styles →",
      pronto: "sample on its way",
      mascotas: "Pets",
      mascotasTexto: "Their look, their pose, their character. Turned into art.",
      parejas: "Couples",
      parejasTexto: "Your favourite photo, told in a different way.",
      familias: "Families",
      familiasTexto: "Everyone together in one piece to hang at home.",
    },
    formatos: {
      titulo: "Your favourite creation, in the format you prefer",
      sub: "One artwork, many gifts. If you already know what you want to give, start here and then choose the style.",
      elegirEstilo: "choose style →",
      nota: estilo => `Example in the ${estilo} style. Product images are for guidance only.`,
      aviso: producto => `Choose the style for your ${producto.toLowerCase()}.`,
      quitar: "clear",
    },
    galeria: {
      titulo: "Four ways to reimagine your story",
      sub: "Pick the style you like best. Then choose what you want it on.",
    },
    antesDespues: {
      titulo: "Art is in the details",
      sub: "Face, expression, hair: what makes each person recognisable, told in another language. Slide to compare.",
      original: "original",
      resultado: "iaks",
      aria: "Compare the original photo with the transformation",
    },
    como: {
      titulo: "How it works",
      sub: "From your photo to a gift with personality, in four steps.",
      paso1: "Choose your style",
      paso1Texto: "Explore the collections and pick the one that best tells your photo.",
      paso2: "Choose the format",
      paso2Texto: "Print, framed portrait, mug, keychain or digital portrait: the same artwork, as the gift you prefer.",
      paso3: "Share your photo",
      paso3Texto: "Upload the picture you want to transform: a person, a couple, your family or your pet.",
      paso4: "We create your artwork",
      paso4Texto: "We work on the transformation to our quality standards and show it to you. Once you approve it, we produce it and ship it to you.",
      cta: "Create my gift",
    },
    porque: {
      p1: "Art direction",
      p1Texto: "Every image follows a clear aesthetic intent, not a tool's default output.",
      p2: "Recognisable identity",
      p2Texto: "Face, hair and expression are kept as faithfully as each style allows.",
      p3: "Curated styles",
      p3Texto: "A few styles, carefully developed and consistent with each other.",
      p4: "Attention to detail",
      p4Texto: "We review and refine every result before calling it done.",
      p5: "Made to be given",
      p5Texto: "Products chosen so the illustration looks like what it is: a gift.",
    },
    sobre: {
      titulo: 'Technology opens possibilities.<br/><span class="sobre__acento">Judgement makes the difference.</span>',
      p1: "Behind iaks there is a simple idea: a photograph can become something far more special when it is worked on with creative intent.",
      p2: "We explore what artificial intelligence can do through art direction, taking care of the styles, the details and the identity in every image.",
      p3: "Because personalising isn't simply about putting a photo on an object.",
    },
    testimonios: {
      titulo: "Real experiences",
      sub: "Gifts that have already found their place.",
      original: "original",
    },
    condiciones: {
      titulo: "No surprises",
      sub: "What you should know before ordering your artwork.",
      c1: "You approve your artwork before production",
      c1Texto: "We send you the finished creation and we don’t print, frame or press anything until you confirm it.",
      c2: "Shipping within Spain",
      c2Texto: "For now we only ship within Spain. You’ll see the delivery time and shipping cost before paying.",
      c3: "Quality materials",
      c3Texto: "We look for the best print quality for each format. Each product will detail its paper, frame and finishes.",
      c4: "Your photos stay private",
      c4Texto: "We only use them to create your order. They are never published without your permission and we delete them once the order is complete.",
      c5: "If it arrives damaged, we send another",
      c5Texto: "As every piece is made to order, returns for change of mind are not accepted. If your order arrives damaged, we send you a new one.",
    },
    contacto: {
      titulo: "There's a photo that deserves to become something more.",
      cta: "Create my gift",
      dudas: "Have an idea or a question? Write to us at",
    },
    footer: {
      lema: "Art portraits and personalised gifts.",
      copy: "© 2026 iaks",
      aria: "footer",
    },
    ui: {
      titulo: "iaks | Art portraits and personalised gifts",
      pasoUno: "step 1 of 2",
      pasoDos: "step 2 of 2 · your photo and details",
      eligeEnQue: "choose what to put it on",
      eligeFormato: "choose a format to preview it",
      preciosOrientativos: "Indicative prices until launch.",
      continuar: "continue →",
      cambiar: "← change format",
      estilo: "style",
      formato: "format",
      precio: "price",
      tuNombre: "your name",
      phNombre: "what's your name?",
      tuEmail: "your email",
      phEmail: "where should I write to you?",
      tuFoto: "your photo",
      uploadTexto: "drag your photo here or click",
      uploadSub: "jpg or png · max. 10 MB",
      nota: "note (optional)",
      phNota: "anything I should know about the photo or the order",
      confirmar: "confirm order",
      pedidoRecibido: "order received",
      cerrar: "close",
      elegir: "choose →",
      proximamente: "coming soon",
      disponibleEn: "available as",
      desde: n => "from €" + n.toFixed(2),
      altEjemplo: estilo => "example illustration in " + estilo.toLowerCase() + " style",
      confirmacion: (nombre, email) => "Thank you, " + nombre + ". I've received your order and I'll write to you at " + email + " within 24 hours with all the details.",
      ariaMenu: "open menu",
      ariaCarrito: "open cart",
      carritoTitulo: "your cart",
      totalEstimado: "estimated total",
      tramitar: "checkout",
      avisoPrecios: "prices are estimates and confirmed at checkout",
      ariaCerrar: "close",
      ariaModal: "choose style and format",
      ariaIrA: estilo => "go to " + estilo.toLowerCase(),
      altSobre: "iaks illustration framed in a living room",
    },
    carrito: {
      titulo: "your cart",
      vacio: "your cart is empty<br/>browse the gallery and add something",
      verGaleria: "see gallery",
      eliminar: "remove",
      totalEstimado: "estimated total",
      tramitar: "checkout",
      aviso: "prices are estimates, confirmed upon checkout",
    },
    productos: {
      digital: "Digital portrait",
      lamina: "Art print",
      enmarcado: "Framed portrait",
      taza: "Mug",
      llavero: "Keychain",
    },
    ilustraciones: [
      { titulo: "COMIC STYLE", estilo: "Comic", descripcion: "Inked lines, bold shadows and colour: your photo turned into a comic panel." },
      { titulo: "MARKER STYLE", estilo: "Marker", descripcion: "Direct marker, no safety net. The line says it all." },
      { titulo: "COLOURED PENCIL STYLE", estilo: "Coloured pencil", descripcion: "Layers of pencil on paper, with the texture and warmth of a colour drawing." },
      { titulo: "WATERCOLOUR STYLE", estilo: "Watercolour", descripcion: "Washes of colour that blend into the paper. Light, luminous and delicate." },
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

  // Textos del HTML marcados con data-i18n="seccion.clave" (y sus variantes -html, -placeholder, -aria, -alt)
  const leer = ruta => ruta.split('.').reduce((obj, clave) => obj?.[clave], t);
  document.title = t.ui.titulo;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = leer(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = leer(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = leer(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', leer(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = leer(el.dataset.i18nAlt); });

  // Puntos del carrusel
  const conPoster = ilustraciones.filter(il => il.cartel || il.mockups.poster);
  document.querySelectorAll('.hero__punto').forEach((punto, i) => {
    punto.setAttribute('aria-label', t.ui.ariaIrA(ilusTraducida(conPoster[i]).estilo));
  });

  // Rerenderizar cards en el idioma activo
  renderizarCards(ilustraciones.map(ilusTraducida));
  setTimeout(() => iniciarScrollReveal(), 100);

  // Rerenderizar testimonios
  renderizarTestimonios();
  renderizarAntesDespues();
  renderizarCategorias();
  renderizarFormatos();

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
   4. ARRANQUE
   ============================================= */

function init() {
  iniciarCarrusel(); 
  iniciarHeader();  
  renderizarCards(ilustraciones);
  iniciarModal();
  iniciarCarritoUI(); 
  iniciarScrollReveal();
  renderizarTestimonios();
  iniciarToggleIdioma();
}

document.addEventListener('DOMContentLoaded', init);
