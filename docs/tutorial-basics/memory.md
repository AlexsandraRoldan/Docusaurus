---
sidebar_position: 6
sidebar_label: 'Memory'
---

# 🧠 Panel Memory: Analiza el Uso de Memoria en tu Sitio

El panel **Memory** de las herramientas de desarrollo del navegador te permite inspeccionar y entender cómo tu aplicación usa la memoria. Es esencial para identificar **fugas de memoria**, **referencias innecesarias** y **consumo excesivo** que puede afectar el rendimiento general del sitio.

---

## 🎯 ¿Para qué sirve?

- Detectar **fugas de memoria** (objetos que no se liberan)
- Evaluar el uso de memoria en tiempo real
- Inspeccionar objetos en el heap de JavaScript
- Ver cómo cambian las asignaciones con el tiempo
- Encontrar retenciones de objetos no utilizados

---

## 🧪 ¿Cómo usarlo?

1. Abre el panel **Memory**
2. Selecciona uno de los modos:
   - **Heap Snapshot**: Toma una "foto" del heap (estructura de memoria de JS)
   - **Allocation instrumentation on timeline**: Mide asignaciones en un periodo de tiempo
   - **Allocation sampling**: Muestra estimaciones rápidas de uso de memoria

3. Haz clic en **Take snapshot** o inicia una grabación
4. Explora los resultados: tipos de objetos, retenciones, referencias, tamaños, etc.

---

## 🔍 Tipos de análisis

| Tipo                         | ¿Qué muestra?                                                                 |
|------------------------------|------------------------------------------------------------------------------|
| **Heap Snapshot**            | Vista detallada de todos los objetos en la memoria y sus relaciones         |
| **Allocation Timeline**      | Actividad de asignación de memoria con el tiempo                            |
| **Allocation Sampling**      | Muestreo estadístico de asignaciones para una visión rápida                 |

---

## 🧪 Ejemplo práctico

Tienes una app que, al cambiar de vista, empieza a volverse lenta. Tomas dos **snapshots**: antes y después del cambio.

Descubres que hay **listeners** y objetos aún en memoria que no se eliminaron. Puedes rastrear esas referencias y liberar memoria manualmente (o corregir el código).

---

## 💡 Pro Tips

- Repite snapshots para comparar y ver qué objetos persisten
- Filtra por tipo (DOM nodes, closures, arrays, etc.)
- Haz clic derecho en un objeto → **Retainers** para ver qué lo mantiene en memoria
- Usa `window.gc()` en la consola (solo en modo Dev Tools abierto con bandera especial) para forzar un Garbage Collection manual

📌 **Nota**: Estas herramientas requieren cuidado y experiencia. No toda retención es una fuga, algunas son necesarias por diseño.

