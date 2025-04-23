---
sidebar_position: 8
sidebar_label: 'Sources'
---

# 📁 **Sources: Exploración y depuración del código fuente**

La pestaña **Sources** del Inspector de Chrome permite **navegar**, **ver**, y **depurar** todos los archivos JavaScript, HTML, CSS y otros recursos de una página web. Es esencial para desarrolladores que necesitan entender cómo funciona una aplicación en el navegador, así como para solucionar errores paso a paso.

---

## 🧭 **¿Para qué sirve la pestaña Sources?**

- Inspeccionar todos los archivos cargados por una página.
- Establecer **breakpoints** (puntos de interrupción) para depurar código JavaScript.
- Ver el código fuente original o transpilado (TypeScript, Webpack, etc.).
- Ejecutar código en tiempo real con la **consola contextual**.
- Editar archivos sobre la marcha usando **Workspaces**.
- Usar herramientas como **Snippets** para ejecutar fragmentos personalizados de código.

---

## 🧱 **Secciones principales de Sources**

### 🗂️ **File Navigator (Navegador de archivos)**
- A la izquierda se muestra una estructura de archivos dividida por orígenes (pestañas como `top`, `file://`, `webpack://`, etc.).
- Puedes buscar archivos con `Ctrl + P` (o `Cmd + P` en Mac) por nombre.

---

### 🧬 **Editor de código**
- En el centro, puedes ver el contenido del archivo seleccionado.
- Admite resaltado de sintaxis, número de línea, edición temporal y navegación por funciones.

---

### 📌 **Breakpoints**
- Puedes hacer clic en el número de línea para establecer un **breakpoint**.
- El navegador pausará la ejecución cuando se alcance esa línea, permitiendo inspeccionar el estado de la app.

---

## 🛠️ **Tipos de Breakpoints disponibles**

| Tipo | Descripción |
|------|-------------|
| **Line breakpoint** | Detiene la ejecución en una línea específica de código |
| **Conditional breakpoint** | Igual al anterior, pero con una condición (ej. `x > 10`) |
| **DOM Breakpoints** | Se activa cuando un nodo del DOM es modificado |
| **XHR Breakpoints** | Se activa cuando se realiza una solicitud XHR o fetch a una URL específica |
| **Event Listener Breakpoints** | Pausa cuando se dispara un evento (ej. `click`, `keydown`) |
| **Exception Breakpoints** | Pausa la ejecución si ocurre una excepción (error) |

---

## 🧪 **Herramientas de depuración**

### 🐛 **Debugger**
- Una vez que la ejecución se detiene, puedes usar:
  - **Call Stack**: ver el historial de funciones que llevaron hasta ese punto.
  - **Scope**: ver variables locales, closures y contexto global.
  - **Watch**: seguir el valor de variables personalizadas.
  - **Step Over (F10)**, **Step Into (F11)**, **Step Out (Shift + F11)** para navegar el código paso a paso.

---

### 🧪 **Snippets**
- Fragmentos de JavaScript reutilizables que puedes ejecutar manualmente.
- Puedes crear tus propios scripts para automatizar tareas como limpiar la consola, manipular el DOM, o generar datos.

---

### 📝 **Overrides y Workspaces**
- Puedes vincular archivos locales a archivos cargados remotamente para editar y guardar cambios directamente en tu equipo.
- Esto es ideal para pruebas rápidas sin necesidad de volver a hacer deploy.

---

## 🔐 **WebAssembly**
- Si tu sitio usa WebAssembly, también puedes ver y depurar código `.wasm` desde aquí, con herramientas específicas.

---

## ⚡ **Accesos rápidos**

| Atajo | Función |
|-------|--------|
| `Ctrl + P` | Buscar archivo |
| `Ctrl + Shift + F` | Buscar en todos los archivos |
| `Ctrl + O` | Navegar funciones |
| `Ctrl + Shift + P` | Comandos rápidos (como la paleta de comandos de VS Code) |
| `Esc` | Abrir consola en la parte inferior |

---

## 🎯 **Casos de uso comunes**

1. 🐞 Depurar errores JavaScript pausando en la línea exacta donde ocurren.
2. 👁️‍🗨️ Inspeccionar variables y estructuras en tiempo de ejecución.
3. ⚙️ Probar funciones sin actualizar la página gracias a los Snippets.
4. 🧪 Editar y probar cambios directamente en archivos CSS o JS.
5. 🧠 Comprender cómo funciona una app compleja sin tener el código fuente original.

---

## 📢 **Conclusión**

La pestaña **Sources** es una de las herramientas más potentes del navegador para desarrolladores. Va mucho más allá de simplemente ver código: permite pausar, inspeccionar, probar y editar en tiempo real. Dominar esta herramienta te permitirá encontrar y resolver errores más rápido, así como entender mejor cualquier proyecto web.

