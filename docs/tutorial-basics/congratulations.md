---
sidebar_position: 5
sidebar_label: 'Performance'
---

# ⚡ Panel Performance: Analiza el Rendimiento de tu Sitio

El panel **Performance** te permite grabar, analizar y visualizar en detalle cómo se comporta tu sitio web durante su ejecución. Es fundamental para detectar cuellos de botella, optimizar la carga de recursos y mejorar la experiencia del usuario.

---

## 🎯 ¿Para qué sirve?

- Medir el tiempo de carga de una página
- Identificar procesos que bloquean el hilo principal (main thread)
- Ver cómo se ejecutan los scripts y se pintan los elementos
- Analizar eventos de usuario y su impacto en el rendimiento
- Evaluar uso de recursos: CPU, memoria, repaints y más

---

## 🧪 ¿Cómo usarlo?

1. Abre el panel **Performance** (`Ctrl+Shift+E`)
2. Haz clic en **"Record"**
3. Interactúa con tu página (scroll, clics, navegación, etc.)
4. Detén la grabación para analizar el perfil de rendimiento

---

## 📈 ¿Qué se puede analizar?

| Sección            | Qué muestra                                                  |
|--------------------|--------------------------------------------------------------|
| **Frames**         | Cuántos cuadros por segundo (FPS) está renderizando la página |
| **Main**           | Tareas en el hilo principal (JS, layout, paint, etc.)        |
| **Timings**        | Eventos como `DOMContentLoaded`, `load`, `first paint`, etc. |
| **Interactions**   | Eventos del usuario y su duración (clics, scrolls, etc.)     |
| **Network**        | Solicitudes de recursos durante la sesión                    |
| **Screenshots**    | Capturas visuales del sitio durante la grabación             |

---

## 🔍 Ejemplo de uso

Quieres saber por qué tu sitio tarda en cargar:

1. Abres el panel y grabas una sesión completa desde la carga
2. Identificas un **script grande** que bloquea el hilo principal por 200 ms
3. Lo optimizas dividiéndolo en partes más pequeñas o cargándolo asincrónicamente

---

## 💡 Pro Tips

- Usa la opción **"Screenshots"** para correlacionar acciones visuales con eventos de rendimiento
- Activa **"Web Vitals"** para ver métricas como LCP, FID y CLS
- Analiza el uso del **CPU**: bloques grandes en el hilo principal indican tareas pesadas
- Usa la herramienta en combinación con **Lighthouse** para sugerencias automatizadas

📌 **Nota**: Este análisis es local y en tiempo real, útil tanto en desarrollo como en producción (con cuidado).

