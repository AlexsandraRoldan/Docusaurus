---
sidebar_position: 3
sidebar_label: 'Console'
---

# 💻 Panel Console: Tu Terminal de JavaScript en el Navegador

El panel **Console** de Chrome DevTools permite a los desarrolladores ver registros (logs), advertencias, errores, interactuar con el DOM, depurar código JavaScript en tiempo real y evaluar expresiones directamente desde el navegador.

---

## 🎯 ¿Qué puedes hacer en la consola?

- Ejecutar y probar JavaScript sin modificar tu archivo fuente.
- Ver mensajes generados por `console.log`, `console.warn`, `console.error`, etc.
- Interactuar con el DOM.
- Depurar errores al instante.
- Utilizar herramientas para medir rendimiento, rastrear errores y monitorear procesos.

---

## 🛠️ Funciones y métodos importantes de `console`

### 🟢 `console.log()`
- Muestra mensajes informativos.
- Útil para mostrar el valor de variables y confirmar la ejecución de bloques de código.
```js
console.log("El código se ejecutó correctamente");
```
---
### 🟡 `console.warn()`
- Muestra advertencias (ícono amarillo).
- Se utiliza para alertar al desarrollador sobre prácticas no recomendadas.

```js
console.warn("Cuidado: este valor puede ser null");
```
---

### 🔴 `console.error()`
- Muestra errores críticos (ícono rojo).
- Muy útil para capturar y mostrar errores personalizados.

```js
console.error("¡Error crítico en la carga de datos!");
```

---

### 🧮 console.table()
- Muestra arrays y objetos como tablas interactivas.
- Útil para visualizar datos estructurados.

```js
console.table([
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 }
]);
```
---

### 📦 console.dir()
- Muestra las propiedades de un objeto como una lista desplegable.

```js
console.dir(document.body);
```
---

### ⏱️ console.time() y console.timeEnd()
- Mide el tiempo de ejecución de un bloque de código.

```js
console.time("carga");
// Código
console.timeEnd("carga");
```
### 📚 console.group() y console.groupEnd()
- Agrupa múltiples mensajes en bloques colapsables para organizarlos.

```js
console.group("Usuario");
console.log("Nombre: Alex");
console.log("Edad: 22");
console.groupEnd();
```

### 🔁 console.count() y console.countReset()
- Cuenta cuántas veces se ejecuta un bloque.

```js
console.count("Click");
```
---

### ❗ console.assert()
- Muestra un error solo si la condición es falsa.

```js
console.assert(2 + 2 === 5, "Esto es falso");
```
---
### 🔄 console.clear()
- Limpia todo el contenido de la consola.

## 👀 Elementos especiales y referencias automáticas

| Elemento         | Descripción                                                             |
|------------------|-------------------------------------------------------------------------|
| `$0`             | Último elemento seleccionado en el panel Elements                       |
| `$1`, `$2`, etc. | Elementos anteriores seleccionados                                      |
| `$_`             | Último valor evaluado                                                   |
| `$$("selector")` | Selecciona múltiples elementos del DOM (como `document.querySelectorAll`) |
| `$x("//div")`    | Búsqueda usando XPath                                                   |
| `copy(obj)`      | Copia un objeto al portapapeles                                         |

---

## 📋 Funcionalidades visuales de la pestaña Console

- 🔍 **Filtro de logs**: Puedes filtrar los mensajes por tipo: All, Errors, Warnings, Info, Logs.
- 🧹 **Botón de limpiar consola**: Elimina todos los mensajes mostrados.
- 🔄 **Botón de mantener logs**: Evita que los registros se borren al recargar la página.
- 🧭 **Botón de pausado en excepciones**: Detiene la ejecución si ocurre una excepción (opcional).
- 🧪 **Input de comandos**: Ejecuta código JavaScript directamente, puedes probar funciones, modificar el DOM o inspeccionar objetos.

---

## 📦 Casos de uso reales

- Depurar errores sin tocar el código fuente.
- Inspeccionar estructuras de datos recibidas por API.
- Verificar condiciones y flujos de eventos en tiempo real.
- Interactuar con elementos del DOM dinámicamente.
- Medir tiempos de respuesta o renderizado de componentes.

---

## 💡 Tips útiles

- Usa `↑` y `↓` para navegar por el historial de comandos ejecutados.
- Puedes acceder a objetos del DOM fácilmente usando `$` y `$0`.
- Si necesitas limpiar: `console.clear()` o `Ctrl + L`.

---

## 🚨 Precauciones

⚠️ **No pegues código desconocido en la consola.**  
Algunas técnicas de ingeniería social intentan engañar a los usuarios para ejecutar scripts maliciosos que roban datos o manipulan el sitio.

---

## 📌 Conclusión

El panel **Console** es más que un simple lugar donde aparecen errores.  
Es una herramienta poderosa para interactuar con tu aplicación web en tiempo real. Aprender a dominarla puede agilizar enormemente tu flujo de trabajo de desarrollo y ayudarte a encontrar y corregir errores más eficientemente.
