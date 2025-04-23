---
sidebar_position: 7
sidebar_label: 'Network'
---

# 🌐 **Network: Análisis de tráfico de red en tiempo real**

La pestaña **Network** del Inspector de Chrome te permite observar todo el tráfico de red entre tu navegador y el servidor. Es vital para **depurar peticiones HTTP**, revisar el rendimiento de carga de tu sitio y optimizar la entrega de recursos como imágenes, scripts y estilos.

---

## 🧭 **¿Para qué sirve la herramienta Network?**

- Inspeccionar **todas las solicitudes y respuestas** realizadas por una página web (HTML, CSS, JS, imágenes, fuentes, JSON, etc.).
- Verificar **códigos de estado HTTP**, **tiempos de carga**, **cabeceras**, y **tamaños de archivos**.
- Analizar la **carga inicial de la página**, **comportamiento dinámico** (fetch, AJAX), y **problemas de red** (404, 500, CORS).
- Detectar **cuellos de botella**, optimizar tiempos de carga y hacer pruebas de conexión lenta o sin caché.

---

## 🛠️ **Componentes clave del panel Network**

### 🔄 **Barra de herramientas**
- **Preserve log**: Conserva el historial de solicitudes al navegar entre páginas o hacer recargas.
- **Disable cache**: Desactiva la caché del navegador para mostrar peticiones “reales” desde el servidor.
- **Online/Offline/Throttling**: Simula conexiones lentas como 3G o sin conexión para ver cómo responde la web.
- **Filtro de tipos**: Permite filtrar por tipo de archivo: `All`, `XHR`, `JS`, `CSS`, `Img`, `Media`, `Font`, `Doc`, `WS`, etc.
- **Buscar (`Ctrl + F`)**: Busca texto dentro de cabeceras, contenido o nombres de recursos.

---

## 📊 **Columnas principales en la tabla de solicitudes**

| Columna | Descripción |
|--------|-------------|
| **Name** | Nombre del archivo o recurso solicitado |
| **Status** | Código de estado HTTP (ej. 200, 404, 500) |
| **Type** | Tipo de recurso (`document`, `script`, `xhr`, etc.) |
| **Initiator** | Indica qué parte del código solicitó el recurso (HTML, JS, etc.) |
| **Size** | Tamaño transferido y tamaño real del archivo |
| **Time** | Tiempo total en completarse la solicitud |
| **Waterfall** | Diagrama visual del tiempo de cada fase de carga |

---

## 📂 **Pestañas de detalle (al hacer clic en un recurso)**

### 🧾 **Headers**
- **General**: Muestra el método (`GET`, `POST`), URL, código de estado y tamaño total.
- **Response Headers**: Cabeceras enviadas por el servidor (como `Content-Type`, `Cache-Control`).
- **Request Headers**: Cabeceras enviadas por el navegador (como `User-Agent`, `Authorization`).
- **Query String Parameters**: Parámetros enviados por la URL.
- **Form Data / Payload**: Datos enviados en el cuerpo de la solicitud (como formularios o JSON).

---

### 💬 **Preview**
- Muestra el contenido visual del recurso si es un HTML, JSON o imagen.

---

### 📄 **Response**
- Muestra el contenido **crudo** de la respuesta (código fuente, JSON, HTML, texto).

---

### 🛠️ **Initiator**
- Indica qué línea de código disparó la solicitud.
- Muy útil para rastrear solicitudes automáticas o fetchs generados por JS.

---

### ⏱️ **Timing**
- Desglose detallado del tiempo de la solicitud:
  - **Queueing**: Tiempo en cola antes de iniciar.
  - **Stalled**: Espera por una conexión disponible.
  - **DNS Lookup**: Resolución del nombre de dominio.
  - **Initial connection / SSL**: Establecer conexión TCP/SSL.
  - **Request sent**: Envío de la solicitud.
  - **Waiting (TTFB)**: Esperando la primera respuesta.
  - **Content Download**: Descarga del contenido.

---

## 🌩️ **Otras funcionalidades útiles**

### 📡 **WebSockets**
- Visualiza la conexión WebSocket activa y cada mensaje enviado/recibido.
- Útil en apps de tiempo real como chats o juegos.

### 📤 **XHR / Fetch**
- Inspecciona llamadas AJAX modernas con `fetch` o `XMLHttpRequest`.
- Revisa los datos enviados, cabeceras, y respuestas JSON en tiempo real.

### 🗃️ **Exportar tráfico**
- Puedes hacer clic derecho > **Save all as HAR with content** para guardar todas las solicitudes y analizarlas más tarde.

---

## 🧪 **Casos de uso comunes**

1. 🔍 **Detectar errores 404/500**: Encontrar recursos que no se están cargando o están fallando.
2. 🚫 **Depurar problemas de CORS**: Ver si se están bloqueando peticiones por políticas de origen cruzado.
3. ⚡ **Optimizar tiempos de carga**: Medir cuánto tarda en cargarse la web, qué recursos son más pesados o lentos.
4. 🔐 **Ver cabeceras de autenticación**: Ver si se están enviando correctamente los tokens, cookies o cabeceras.
5. 📦 **Revisar peticiones AJAX**: Observar cómo y cuándo la página envía datos al servidor y qué respuestas recibe.

---

## 📢 **Conclusión**

La herramienta **Network** es fundamental para cualquier desarrollador web que quiera garantizar una buena experiencia de usuario. Permite monitorear, analizar y depurar todos los aspectos de la comunicación entre cliente y servidor, desde la carga inicial hasta el tráfico dinámico y en tiempo real. Una comprensión profunda de esta herramienta te dará el control total sobre la eficiencia de tu aplicación.

