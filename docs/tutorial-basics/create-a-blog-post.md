---
sidebar_position: 4
sidebar_label: 'Sources'
---

# 📂 Panel Sources: Tu Explorador de Archivos y Depurador de Código

El panel **Sources** del navegador (como Chrome DevTools o Firefox Developer Tools) te permite **ver, editar y depurar archivos JavaScript, CSS, HTML y más** que componen una página web. Es como tener un pequeño entorno de desarrollo directamente en el navegador.

---

## 🔍 ¿Para qué sirve?

- Ver y navegar el código fuente cargado por la página
- Establecer **puntos de interrupción** (breakpoints) para detener la ejecución de scripts
- Depurar paso a paso (step-by-step)
- Inspeccionar el **contexto de ejecución**, variables, funciones, call stack, etc.
- Usar **Snippets** para escribir y ejecutar código personalizado

---

## 🗂️ Explorador de archivos

En la parte izquierda del panel verás un **árbol de archivos** que representa los recursos cargados (scripts, hojas de estilo, imágenes, etc.).

Haz clic en cualquier archivo para ver su contenido y depurarlo.

---

## 🐞 Depuración con Breakpoints

Puedes pausar la ejecución del código y analizar qué ocurre línea por línea.

### 🔹 Tipos de breakpoints:

- **Line breakpoint**: haz clic en el número de línea de un archivo `.js`.
- **Event listener breakpoint**: pausa cuando ocurra un evento (click, submit, etc.).
- **XHR/fetch breakpoint**: pausa cuando se realice una petición AJAX/fetch.
- **DOM breakpoint**: pausa cuando un nodo DOM cambie.
- **Exception breakpoint**: pausa cuando ocurra un error.

```js title="Ejemplo básico con breakpoint"
function saludar(nombre) {
  const saludo = "Hola, " + nombre;
  console.log(saludo); // <-- Coloca un breakpoint aquí
}

saludar("Usuario");
```
---

## 🧩 Snippets: tus scripts personalizados

Puedes guardar y ejecutar fragmentos de código JavaScript directamente desde el navegador.

1. Abre la pestaña `Snippets`  
2. Haz clic derecho → "New"  
3. Escribe tu script y haz clic en "▶️ Run"

```js title="Ejemplo de Snippet"
const ahora = new Date();
console.log("Hora actual:", ahora.toLocaleTimeString());
```
---

## 🧠 Casos de uso prácticos

### 🔎 Encontrar errores

- Revisa variables y su valor en el momento exacto del fallo  
- Usa el panel derecho para ver el **Call Stack**, **Scope**, y **Watch**

### ⚙️ Probar funciones en vivo

- Cambia temporalmente funciones sin editar el código fuente  
- Ejecuta código paso a paso y evalúa resultados

### 🧪 Optimizar rendimiento

- Usa breakpoints condicionales para pausar solo cuando se cumpla cierta condición  
- Analiza bucles, condiciones y ejecución costosa

---

## 💡 Pro Tips

- `Ctrl + P`: Buscar cualquier archivo rápidamente  
- `Ctrl + Shift + F`: Buscar dentro de todos los archivos  
- `F8`: Continuar ejecución  
- `F10`: Step over (pasar al siguiente)  
- `F11`: Step into (entrar en función)  
- `Shift + F11`: Step out (salir de función)

📌 **Nota**: Las modificaciones en Sources también son **temporales**. Para hacerlas permanentes, edita el código fuente original en tu proyecto.
