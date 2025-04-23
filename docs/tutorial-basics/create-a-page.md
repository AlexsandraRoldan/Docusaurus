---
sidebar_position: 3
sidebar_label: 'Console'
---

# 💻 Panel Console: Tu Terminal de JavaScript en el Navegador

El panel **Console** es una herramienta poderosa del navegador que permite a los desarrolladores interactuar directamente con JavaScript, depurar errores, registrar mensajes y ejecutar pruebas en tiempo real.

---

## 🔍 Funciones clave

### 1️⃣ Registro de mensajes (`console.log()`)

Imprime datos o mensajes en la consola.  
Ideal para depurar valores de variables o confirmar que se ejecuta un bloque de código.

```js title="Ejemplo simple"
console.log("Funciona bien este bloque!");
```
---

### 2️⃣ Advertencias y errores

Utiliza diferentes métodos según el nivel de severidad del mensaje:

```js title="Mensajes de advertencia y error"
console.warn("Advertencia: acción no recomendada");
console.error("¡Error: algo salió mal!");
```

- `console.warn()`: Muestra advertencias (🟡 ícono amarillo).
- `console.error()`: Muestra errores (🔴 ícono rojo).

---

### 3️⃣ Visualización de datos
La consola puede mostrar estructuras complejas como tablas para facilitar la lectura:

```js title="Visualización de datos"
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 }
];
```
- `console.table(personas)`;

---

### 4️⃣ Tiempos y grupos
Agrupa mensajes y mide el tiempo de ejecución de bloques de código:

```js title="tiempos y grupos"
console.group("Bloque de tareas");

console.time("Proceso");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Proceso");

console.groupEnd();
```
---

## 🛠️ Casos de uso prácticos

### 🔧 Debuggear código

- Verifica si un evento se dispara correctamente  
- Muestra valores dinámicos en tiempo real  
- Evalúa expresiones y funciones sin modificar el archivo fuente

### 🧪 Experimentación

- Ejecuta pruebas rápidas sin necesidad de recargar la página  
- Modifica variables o funciones temporalmente  
- Accede al DOM con comandos como `document.querySelector()`

---

## 💡 Pro Tips

- `Ctrl + L`: Limpia la consola  
- `$0`, `$1`, etc.: Referencia a los últimos elementos seleccionados en el panel Elements  
- `$_`: Último valor evaluado  
- Usa `↑ / ↓`: Navega por el historial de comandos

📌 **Nota**: Los cambios hechos desde la consola son **temporales** y no afectan el código fuente real.
