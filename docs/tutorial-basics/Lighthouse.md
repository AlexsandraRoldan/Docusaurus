# 🚦 Lighthouse - Herramienta de Auditoría de Páginas Web

**Lighthouse** es una herramienta automatizada de código abierto para mejorar la calidad de las páginas web. Desarrollada por Google, permite realizar auditorías en cinco áreas clave: **rendimiento**, **accesibilidad**, **mejores prácticas**, **SEO** y **PWA (Progressive Web Apps)**. Lighthouse genera un informe detallado con recomendaciones para optimizar las páginas web y asegurar que sean más rápidas, accesibles y estén bien optimizadas para los motores de búsqueda.

---

## 🛠️ **¿Qué Evalúa Lighthouse?**

Lighthouse realiza auditorías en los siguientes aspectos:

### 1️⃣ **Performance (Rendimiento)**
Evalúa la rapidez de carga y la capacidad de respuesta de la página. Los aspectos medidos incluyen el **First Contentful Paint (FCP)**, el **Largest Contentful Paint (LCP)**, el **Time to Interactive (TTI)**, entre otros.

- **First Contentful Paint (FCP)**: Mide el tiempo que tarda en aparecer el primer elemento visible en la página.
- **Largest Contentful Paint (LCP)**: Mide el tiempo que tarda en cargarse el contenido más grande visible.
- **Time to Interactive (TTI)**: Mide el tiempo hasta que la página es completamente interactiva para el usuario.
- **Total Blocking Time (TBT)**: Mide el tiempo durante el cual el hilo principal está bloqueado y no puede responder a la interacción del usuario.
  
#### Ejemplo de métrica de rendimiento:
Lighthouse te puede decir si una página carga en menos de 2 segundos, si los elementos son interactivos de inmediato, y te sugiere cómo mejorar esos tiempos.

---

### 2️⃣ **Accessibility (Accesibilidad)**
Lighthouse evalúa qué tan accesible es tu página para personas con discapacidades. Evalúa el uso de las mejores prácticas de accesibilidad como el uso correcto de etiquetas `aria`, contrastes de color adecuados, navegación con teclado, etc.

- **Color Contrast**: Verifica que el contraste entre texto y fondo sea suficiente para que las personas con deficiencia visual puedan leer la página.
- **Alt Text for Images**: Verifica que las imágenes en la página tengan texto alternativo (`alt`) que las describa para los usuarios con discapacidades visuales.
- **Focusable Elements**: Asegura que los elementos interactivos como enlaces y botones sean accesibles para la navegación mediante el teclado.

---

### 3️⃣ **Best Practices (Mejores Prácticas)**
Lighthouse también evalúa las mejores prácticas de desarrollo web. Aquí se revisan aspectos de seguridad, como el uso de HTTPS, y el manejo de cookies de manera segura.

- **Uso de HTTPS**: Verifica que la página esté sirviendo todo su contenido a través de HTTPS.
- **Avoiding Vulnerabilities**: Detecta problemas de seguridad como el uso de dependencias desactualizadas o vulnerabilidades conocidas en bibliotecas.
- **No Mixed Content**: Asegura que todo el contenido cargado sea seguro y no haya recursos no cifrados (HTTP) en una página segura (HTTPS).

---

### 4️⃣ **SEO (Optimización para Motores de Búsqueda)**
El informe de SEO evalúa qué tan bien está optimizada tu página para motores de búsqueda. Lighthouse verifica elementos cruciales como la correcta estructuración de metadatos, etiquetas `title`, `meta description`, `hreflang`, y la existencia de un archivo `robots.txt`.

- **Meta Tags**: Asegura que tu página tenga etiquetas de título, descripción y otros metadatos importantes para SEO.
- **Mobile-Friendly**: Verifica que la página esté optimizada para dispositivos móviles, lo cual es un factor crucial para el SEO.
- **Desempeño en móviles**: Evalúa cómo la página se comporta en dispositivos móviles, ya que Google utiliza el **mobile-first indexing**.

---

### 5️⃣ **PWA (Progressive Web App)**
Lighthouse también evalúa si tu página está configurada como una **Progressive Web App (PWA)**, lo que implica que la página funciona como una aplicación nativa en el dispositivo.

- **Manifest File**: Asegura que la página tenga un archivo `manifest.json` que permita que la página sea "añadida al inicio" en dispositivos móviles.
- **Service Workers**: Verifica que tu página utilice Service Workers para permitir la funcionalidad offline y el almacenamiento en caché.
- **App-like Experiences**: Evalúa si la página proporciona una experiencia similar a la de una aplicación nativa, con tiempos de carga rápidos y funcionalidad incluso sin conexión.

---

## 📊 **Cómo Ejecutar una Auditoría en Lighthouse**

1. **Accede al Inspector de Chrome**: Abre las herramientas de desarrollo de Chrome (F12 o clic derecho y selecciona "Inspeccionar").
2. **Selecciona la pestaña Lighthouse**: Navega a la pestaña **Lighthouse** dentro de las herramientas de desarrollo.
3. **Configura la auditoría**: Puedes elegir los dispositivos que deseas emular (como móvil o escritorio), así como las áreas que deseas auditar (rendimiento, accesibilidad, SEO, etc.).
4. **Genera el informe**: Haz clic en "Generar informe" y Lighthouse ejecutará una serie de pruebas en tu página web. Después de unos momentos, se mostrará un informe con los resultados.

---

## 📑 **Informe de Lighthouse**

El informe de Lighthouse se divide en varias secciones, cada una con una puntuación que va de 0 a 100:

- **Performance**: Muestra las métricas de rendimiento y cómo se puede mejorar la carga de la página.
- **Accessibility**: Muestra los problemas de accesibilidad y sugiere mejoras.
- **Best Practices**: Analiza las mejores prácticas de seguridad y desarrollo.
- **SEO**: Proporciona detalles sobre la optimización de SEO de tu página.
- **PWA**: Si es una Progressive Web App, te dirá cómo mejorar la experiencia del usuario móvil.

Cada sección también proporciona recomendaciones detalladas sobre cómo mejorar la puntuación en cada área. Por ejemplo, si tu página tiene un tiempo de carga lento, Lighthouse sugerirá técnicas como el **lazy loading** de imágenes o la mejora del **Time to Interactive (TTI)**.

---

## 💡 **Consejos para Mejorar tu Puntuación en Lighthouse**

1. **Optimiza las imágenes**: Usa formatos modernos como WebP y asegúrate de que las imágenes no sean demasiado grandes.
2. **Implementa un sistema de caché adecuado**: Usa **Service Workers** para almacenar recursos clave y mejorar la velocidad de carga, incluso sin conexión.
3. **Minimiza JavaScript**: Elimina o retrasa el JavaScript no esencial para mejorar los tiempos de carga y la interactividad.
4. **Usa HTTPS**: Asegúrate de que todas las conexiones sean seguras.
5. **Mejora la accesibilidad**: Añade texto alternativo a las imágenes, usa colores de alto contraste y garantiza la navegación mediante teclado.
6. **Revisa las dependencias de seguridad**: Mantén tus bibliotecas y dependencias actualizadas para evitar vulnerabilidades.

---

## 🧑‍💻 **Conclusión**

**Lighthouse** es una herramienta fundamental para mejorar la calidad de las aplicaciones web. Ofrece una auditoría exhaustiva de rendimiento, accesibilidad, seguridad, SEO y características de PWA. Usar Lighthouse regularmente te permite identificar áreas de mejora y optimizar tu sitio para brindar una mejor experiencia al usuario, mejorar el rendimiento y cumplir con las mejores prácticas de desarrollo web.

