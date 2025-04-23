---
sidebar_position: 7
sidebar_label: 'Application'
---

# 📦 Panel Application: Gestiona Almacenamiento y Recursos Web

El panel **Application** en las DevTools te permite inspeccionar, modificar y depurar los diferentes tipos de almacenamiento y recursos que utiliza una aplicación web. Es fundamental para trabajar con **PWA**, **cookies**, **tokens**, **bases de datos locales** y otros recursos que persisten entre sesiones.

---

## 🎯 ¿Para qué sirve?

- Ver y modificar **cookies** y **almacenamiento local**
- Revisar recursos como **manifiestos**, **archivos de servicio** (Service Workers) y **cachés**
- Gestionar almacenamiento offline
- Depurar **PWA (Progressive Web Apps)**

---

## 🧰 Herramientas del Panel Application

### 🍪 **Cookies**
- Las cookies son pequeños archivos de texto que los sitios web utilizan para almacenar información en el navegador del usuario.
- Puedes ver su **nombre**, **valor**, **fecha de expiración**, **dominio**, **ruta** y **flags** (`Secure`, `HttpOnly`, `SameSite`).
- Ideal para validar **sesiones de usuario**, **autenticación** y **seguimiento de usuarios**.

---

### 📇 **Private State Tokens** 
- Una nueva técnica para autenticar usuarios sin el uso de cookies.
- Sirve para que los servicios puedan verificar la identidad de los usuarios sin usar **cookies de terceros** o **cookies de seguimiento**.
  
---

### 🌍 **Interest Groups**
- Tecnología emergente que permite a los sitios web crear y participar en "grupos de interés" para mejorar la personalización sin comprometer la privacidad.
- Usado principalmente en publicidad y personalización de contenido.

---

### 📂 **IndexedDB**
- Es una base de datos NoSQL local que permite almacenar grandes cantidades de datos estructurados de manera asíncrona.
- Soporta **transacciones**, **índices**, y **objetos complejos**.
- Comúnmente utilizado para almacenar **datos offline** en aplicaciones web.

---

### 💾 **Local Storage**
- Almacenamiento local en el navegador sin fecha de expiración.
- Puedes almacenar datos clave-valor usando `localStorage.getItem()` y `setItem()`.
- Útil para guardar configuraciones del usuario, preferencias y pequeños datos de sesión.

---

### 🗂️ **Session Storage**
- Similar a Local Storage, pero con la diferencia de que se borra al cerrar la pestaña del navegador.
- Es útil para almacenar información temporal que solo se necesita durante una sesión de navegación.

---

### 📑 **Extension Storage**
- Proporciona almacenamiento a las extensiones de navegador.
- Permite que las extensiones guarden datos entre sesiones y accesos de usuario.

---

### 🗃️ **Storage Buckets**
- Una manera de organizar y manejar grandes cantidades de datos almacenados.
- Permite segmentar el almacenamiento para diferentes funcionalidades de la aplicación (por ejemplo, para diferentes módulos de una PWA).

---

### 🗃️ **Shared Storage**
- Almacenamiento compartido que permite a las aplicaciones guardar y acceder a datos comunes entre distintos orígenes o aplicaciones.
  
---

### ⚙️ **Service Workers**
- Un **Service Worker** es un script que tu navegador ejecuta en segundo plano, separado de la página web, lo que permite gestionar **caché**, **notificaciones push**, y **funcionamiento offline**.
- Puedes inspeccionar su estado: si está **instalado**, **activado** o **controlando** la página.

---

### 📃 **Manifest**
- El archivo **manifest.json** es crucial en las **Progressive Web Apps (PWA)**. Define las características de la aplicación, como **nombre**, **iconos**, **tema** y **pantalla de inicio**.
- Se utiliza para permitir que una página web sea instalada en la pantalla de inicio del dispositivo móvil, similar a una aplicación nativa.

---

### 📦 **Cache Storage**
- Almacena respuestas de red para que estén disponibles offline.
- Es utilizado principalmente por los **Service Workers** para gestionar el contenido en caché y mejorar la experiencia offline.
  
---

### 🔄 **Background Services**
- Permiten a las aplicaciones realizar tareas en segundo plano, incluso cuando la aplicación no está activa.
- Incluye:
  - **Background Fetch**: Permite realizar descargas largas sin interrupciones, incluso si la pestaña se cierra.
  - **Background Sync**: Sincroniza datos cuando la aplicación vuelve a estar en línea.
  - **Periodic Background Sync**: Permite que ciertas tareas se sincronicen de forma periódica.
  
---

### ↩️ **Back/Forward Cache (bfcache)**
- Cache especial que almacena el estado completo de la página web, permitiendo que la página se recargue instantáneamente cuando el usuario navega hacia atrás o adelante en el navegador.

---

### 🚚 **Background Fetch**
- Permite a las aplicaciones realizar descargas largas o de gran tamaño, incluso cuando el usuario cambia de pestaña o cierra la aplicación.
- Se usa principalmente en aplicaciones que requieren la descarga de archivos grandes o muchos archivos a la vez.

---

### 🔄 **Background Sync**
- Una técnica que permite sincronizar datos en segundo plano cuando el usuario vuelve a estar en línea.
- Esto es útil para aplicaciones que necesitan **sincronizar cambios** sin interrumpir la experiencia del usuario.

---

### 🛑 **Bounce Tracking Mitigation**
- Se utiliza para mitigar los efectos del **bounce tracking**, que es el seguimiento de usuarios en múltiples páginas, para proteger la privacidad del usuario.

---

### 🔔 **Notifications**
- Los **push notifications** permiten enviar notificaciones al usuario, incluso si no están activos en la página o aplicación web.
- Se pueden configurar y controlar mediante los **Service Workers**.

---

### 💳 **Payment Handler**
- Permite integrar sistemas de pago web directamente en el navegador.
- Los usuarios pueden realizar pagos sin necesidad de salir de la aplicación.

---

### 🕰️ **Periodic Background Sync**
- Permite a la aplicación realizar tareas de sincronización programadas, incluso cuando el navegador no está activo.
  
---

### ⚡ **Speculative Loads**
- Permite que el navegador **cargue** recursos **anticipadamente** (especulativamente) antes de que se necesiten, mejorando la **velocidad de carga**.

---

### 📲 **Push Messaging**
- Permite enviar mensajes al navegador del usuario en tiempo real.
- Es una característica importante para aplicaciones que desean enviar notificaciones importantes incluso cuando la aplicación no está abierta.

---

### 📊 **Reporting API**
- Permite a las aplicaciones enviar informes sobre problemas de rendimiento o errores que ocurren durante la ejecución de la aplicación.

---

### 📂 **Frames**
- Aquí se puede ver información acerca de los **frames** de la página web, como si se están cargando correctamente y cuáles son sus estados.

---

## 💡 Pro Tips

- **Limpiar almacenamiento**: Puedes usar el botón **Clear Storage** para borrar cookies, almacenamiento local, caché y demás datos persistentes en un solo clic.
- **Inspeccionar datos de Service Workers**: Usa la opción **Update** para forzar la actualización de un Service Worker.
- **Depurar PWA**: Revisa el estado del **Manifest** y verifica que todos los iconos y configuraciones estén correctamente cargados.
- **Sync y Fetch**: Utiliza las herramientas de **Background Sync** y **Background Fetch** para mejorar el rendimiento de tu aplicación, especialmente en condiciones de red lenta.

📌 **Nota**: Los cambios realizados en el panel **Application** afectan los recursos del navegador directamente, pero no modifican el código fuente del proyecto.

