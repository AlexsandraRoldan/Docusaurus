---
sidebar_position: 1
sidebar_label: 'Elements'
---

# 🧱 Panel Elements: Explorador del DOM y CSS en Tiempo Real

El panel **Elements** es una de las herramientas más utilizadas por los desarrolladores web. Permite inspeccionar, editar y depurar el **HTML** y **CSS** de una página web directamente desde el navegador.

---

## 📄 ¿Qué puedes hacer con el Panel Elements?

- Visualizar y modificar la estructura del DOM.
- Editar estilos CSS en tiempo real.
- Ver las propiedades computadas de un elemento.
- Añadir clases, atributos y estilos inline.
- Ver cómo interactúan los elementos en diferentes estados (`:hover`, `:active`, etc.).
- Identificar rápidamente errores en el diseño, espaciados, alineaciones y herencia de estilos.

---

## 🔍 Secciones principales

### 🧩 Árbol del DOM (HTML)

- Muestra la estructura completa de la página.
- Puedes:
  - Expandir y contraer nodos.
  - Editar el contenido HTML haciendo doble clic.
  - Eliminar o añadir elementos.
  - Copiar rutas XPath o selectores CSS.

### 🎨 Panel de estilos (Styles)

- Muestra las reglas CSS aplicadas al elemento seleccionado.
- Puedes:
  - Activar/desactivar propiedades.
  - Ver qué regla sobrescribe otra.
  - Añadir nuevas propiedades en tiempo real.
  - Detectar errores de sintaxis CSS.
- Las reglas se organizan por orden de especificidad y archivo fuente.

### 📐 Computed

- Muestra el valor final que tiene cada propiedad CSS después de que se aplican todas las reglas, herencias y cascadas.
- Incluye:
  - Estilos calculados.
  - Box model (margen, borde, padding, contenido).
  - Tooltip visual para ver dimensiones.

### ✍️ Event Listeners

- Lista todos los **eventos JavaScript** registrados sobre el elemento seleccionado (como `click`, `mouseenter`, `submit`, etc.).
- Permite ver en qué archivo está definido el evento y qué función se ejecuta.

### 📋 DOM Breakpoints

- Establece puntos de interrupción (breakpoints) para cuando:
  - Un nodo es modificado.
  - Se agregan/eliminen atributos.
  - Cambia el contenido del nodo.
- Útil para depurar cambios dinámicos en la estructura del DOM.

### 🧱 Properties

- Muestra las propiedades JavaScript del nodo DOM como si accedieras desde la consola (`$0`).
- Puedes ver propiedades, métodos, y prototipos relacionados con el objeto DOM.

### 💠 Accessibility

- Ayuda a mejorar la **accesibilidad web** mostrando:
  - Roles y etiquetas ARIA.
  - Si un elemento es navegable con teclado.
  - Problemas potenciales para lectores de pantalla.

---

## 🛠️ Herramientas rápidas del panel

- 🧭 **Selector de elementos (Ctrl + Shift + C)**: Te permite seleccionar visualmente un elemento en la página para inspeccionarlo.
- 🧹 **Clear overlays**: Borra cualquier resaltado visual hecho por herramientas como `:hover` o `:focus`.
- 🎚️ **Toggle element state**: Simula estados como `:hover`, `:focus`, `:active`, etc.
- 📏 **Toggle rulers**: Muestra reglas para medir alineaciones.
- 👁️‍🗨️ **Toggle element visibility**: Puedes ocultar temporalmente un elemento para ver cómo afecta al diseño.

---

## 🧪 Casos de uso reales

- Ajustar márgenes, paddings o fuentes en tiempo real para pruebas rápidas.
- Investigar por qué un estilo no se aplica.
- Comprobar jerarquía de elementos y herencia de estilos.
- Encontrar y editar clases dinámicamente generadas por frameworks.

---

## 💡 Consejos prácticos

- Puedes escribir directamente nuevas etiquetas HTML dentro del DOM para simular elementos.
- El panel recuerda tu selección incluso tras recargar la página si el nodo sigue existiendo.
- Usa `$0` en la consola para referenciar el último nodo seleccionado en Elements.

---

## 📌 Conclusión

El panel **Elements** es esencial para cualquier desarrollador web. Te da un control visual directo sobre el contenido y presentación de tu sitio, acelerando la depuración y el diseño responsivo. Dominarlo es dar un gran paso hacia la excelencia en desarrollo frontend.
