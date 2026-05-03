# iaks — ilustración con alma

## Estructura del proyecto
```
iaks/
├── index.html          ← estructura HTML
├── css/
│   └── styles.css      ← todos los estilos y variables de color
├── js/
│   └── app.js          ← lógica: datos, galería, filtros, modal
└── assets/
    └── images/
        └── placeholder.jpg  ← reemplaza con tus ilustraciones
```

## Cómo añadir una ilustración nueva

En `js/app.js`, busca el array `ilustraciones` y añade:

```js
{
  id: 7,                              // número único
  titulo: "Nombre de tu obra",
  estilo: "rotulador",                // uno de los 5 estilos
  descripcion: "Descripción breve.",
  imagen: "assets/images/mi-obra.jpg", // ruta a tu imagen
  color: "#ff6b35"                    // color acento de la card
}
```

## Cómo añadir un producto nuevo

En `js/app.js`, busca el array `productos` y añade:

```js
{ id: "bolsa", nombre: "Bolsa tote", emoji: "👜", precio: "desde 8€" }
```

## Estilos disponibles
- `rotulador`
- `lapiz`
- `comic-realista`
- `retro-pop`
- `comic-fantasia`
