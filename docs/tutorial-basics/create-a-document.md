---
sidebar_position: 2
sidebar_label: 'Elements'
---

# 🛠️ Panel Elements: Tu Inspector de HTML/CSS

El panel **Elements** (o **Inspector** en Firefox) es la herramienta principal para analizar y modificar la estructura y estilos de cualquier página web en tiempo real.

## 🔍 Funciones clave

# 1 Inspección de elementos

- Selecciona cualquier elemento de la página haciendo clic en el ícono de flecha (`Ctrl+Shift+C`).
- Navega el DOM como un árbol interactivo.

```html title="Ejemplo de estructura DOM"
<div class="header">
    <h1 id="title">Mi Sitio</h1> <!-- ¡Selecciona esto para editarlo! -->
</div>
```

---

## 2 Edición en vivo
Modifica HTML directamente (doble clic en cualquier elemento).

Ajusta CSS en el panel Styles:

```css title="Ejemplo de edición CSS"
/* Cambia estos valores en vivo */
#title {
    color: red; /* ¡Pruébalo! */
    font-size: 2em;
}
```

## 3 Visualización del Box Model
Ve márgenes, bordes, padding y contenido:

```
┌───────────────────────┐
│       Margin          │
│  ┌─────────────────┐  │
│  │     Border      │  │
│  │  ┌───────────┐  │  │
│  │  │  Padding  │  │  │
│  │  │  ┌─────┐  │  │  │
│  │  │  │Content│  │  │  │
│  │  │  └─────┘  │  │  │
│  │  └───────────┘  │  │
│  └─────────────────┘  │
└───────────────────────┘
```
# 🛠️ Casos de uso prácticos
Debuggear estilos
Busca un elemento que no se vea como esperas

Verifica qué reglas CSS se aplican

Identifica propiedades anuladas (tachadas)

Responsive Design
Usa el Device Toolbar (Ctrl+Shift+M) junto con Elements:

``` 
js
// Ejemplo: Oculta elementos en móvil
@media (max-width: 768px) {
  .desktop-only { display: none; }
}
```
# 💡 Pro Tips
Undo cambios: Ctrl+Z (los cambios se pierden al refrescar)

Guardar modificaciones: Usa Workspaces para persistir cambios

Acceso rápido:

Alt+Click en un elemento para expandir todo el árbol

H para ocultar elementos temporalmente

📌 Nota: Los cambios solo son locales. Para modificaciones permanentes, debes actualizar tu código fuente.

