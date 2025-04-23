---
sidebar_position: 4
sidebar_label: 'Network'
---

# 🌐 Panel Network: Monitorea las Solicitudes Web

El panel **Network** permite observar todas las solicitudes y respuestas que realiza tu página web, como peticiones a servidores, carga de imágenes, archivos CSS, scripts, fuentes, y mucho más.

Es una herramienta esencial para analizar el rendimiento, depurar errores de red y entender el flujo de recursos entre cliente y servidor.

---

## 🔍 ¿Para qué sirve?

- Ver qué archivos carga una página y en qué orden
- Medir tiempos de carga de recursos (TTFB, duración, etc.)
- Detectar errores de conexión (404, 500, etc.)
- Analizar solicitudes AJAX / Fetch en tiempo real
- Ver cabeceras (headers) y cuerpos (body) de respuestas
- Revisar cookies y caché utilizadas

---

## 📂 Tipos de archivos visibles

| Tipo        | Descripción                              |
|-------------|------------------------------------------|
| **Document** | El archivo HTML principal                |
| **Script**   | Archivos `.js` cargados por la página    |
| **Stylesheet** | Archivos `.css` aplicados               |
| **XHR / Fetch** | Solicitudes hechas con JavaScript     |
| **Media**    | Archivos de imagen, video o audio        |
| **Font**     | Tipografías web                          |
| **Other**    | WebSockets, iframes, blobs, etc.         |

---

## 🧪 Ejemplos prácticos

### 1️⃣ Ver solicitud Fetch / XHR

```js title="Ejemplo con fetch"
fetch("https://api.ejemplo.com/productos")
  .then(res => res.json())
  .then(data => console.log(data));
```
---
### 2️⃣ Revisar un error 404

Si un recurso no se encuentra, lo verás en rojo en la lista de solicitudes con un código **404**. Puedes hacer clic sobre esa solicitud para ver detalles como:

- **URL solicitada**  
- **Respuesta del servidor**  
- **Cabeceras de respuesta (Headers)**  
- **Pila de origen (Initiator)**  

---

### 3️⃣ Analizar tiempos de carga

Haz clic en cualquier recurso cargado y abre la pestaña **Timing** para ver una desglose detallado del proceso:

- `Queueing`: Tiempo esperando turno  
- `Stalled`: Espera por disponibilidad de conexión  
- `DNS Lookup`: Tiempo en resolver el dominio  
- `Initial connection`: Tiempo en establecer la conexión  
- `TTFB`: Tiempo hasta recibir el primer byte  
- `Content Download`: Tiempo en descargar el recurso completo  

---

## 💡 Pro Tips

- `Ctrl + R` (o F5): Recarga la página y captura todas las solicitudes desde cero  
- Activa **Disable cache** para evitar que se carguen archivos almacenados localmente  
- Usa los filtros (JS, CSS, XHR, Img, etc.) para inspeccionar tipos específicos de recursos  
- Haz clic derecho en cualquier solicitud y elige **Copy > Copy as cURL** para replicar la petición desde terminal o Postman

📌 **Nota**: El panel Network muestra datos **en tiempo real** que se reinician con cada recarga de página.
