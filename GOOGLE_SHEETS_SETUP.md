# Configuración de Google Sheets para Formulario de Contacto

## Paso 1: Preparar Google Sheets

1. Abre tu spreadsheet: https://docs.google.com/spreadsheets/d/1dFrnhv-WnwnSnqYKUX3L0DJIq3c-XSRqMDSRStQU6rc/edit

2. En la primera fila (encabezados), agrega:
   - **A1:** Fecha
   - **B1:** Nombre
   - **C1:** Email
   - **D1:** WhatsApp
   - **E1:** Proceso
   - **F1:** Descripción

## Paso 2: Crear Google Apps Script

1. En el spreadsheet, ve a **Extensiones → Apps Script**

2. Borra todo el código existente y pega este:

```javascript
function doPost(e) {
  try {
    // Log para debugging
    Logger.log('Received data: ' + e.postData.contents);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Agregar fila con los datos del formulario
    sheet.appendRow([
      new Date(), // Fecha
      data.nombre || '',
      data.email || '',
      data.whatsapp || '',
      data.proceso || '',
      data.descripcion || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Datos guardados correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para testing (opcional)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Script funcionando correctamente' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto (Ctrl+S o Cmd+S)

## Paso 3: Implementar el Script

1. Haz clic en **Implementar → Nueva implementación**

2. Haz clic en el ícono de engranaje ⚙️ junto a "Seleccionar tipo"

3. Selecciona **Aplicación web**

4. Configura:
   - **Descripción:** Formulario de contacto Skywalking.dev
   - **Ejecutar como:** Tu cuenta (tu email)
   - **Quién tiene acceso:** Cualquier persona

5. Haz clic en **Implementar**

6. **IMPORTANTE:** Autoriza los permisos cuando te lo pida
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta de Google
   - Haz clic en "Avanzado"
   - Haz clic en "Ir a [nombre del proyecto] (no seguro)"
   - Haz clic en "Permitir"

7. **COPIA LA URL** que aparece (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

## Paso 4: Configurar en el Código

1. Abre el archivo: `components/contact-form.tsx`

2. Busca la línea:
```typescript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
```

3. Reemplázala con tu URL:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_URL_AQUI/exec'
```

4. Guarda el archivo

## Paso 5: Probar

1. Recarga la página web
2. Llena el formulario de contacto
3. Haz clic en "Agendar Consulta Gratuita"
4. Revisa que los datos aparezcan en tu Google Sheet

## Troubleshooting

### El formulario no envía datos

- Verifica que la URL del script esté correcta
- Asegúrate de que el script esté implementado como "Cualquier persona" puede acceder
- Revisa la consola del navegador (F12) para ver errores

### Los datos no llegan a Google Sheets

- Verifica que los encabezados en la hoja coincidan exactamente
- Asegúrate de haber autorizado los permisos del script
- Revisa los logs del Apps Script: En Apps Script, ve a Ejecuciones (ícono de reloj ⏱️)

### Necesitas actualizar el script

1. Ve a Apps Script
2. Haz los cambios necesarios
3. Ve a **Implementar → Administrar implementaciones**
4. Haz clic en el ícono de lápiz ✏️ en tu implementación
5. Cambia la versión a "Nueva versión"
6. Haz clic en **Implementar**

## Notificaciones por Email (Opcional)

Si quieres recibir un email cada vez que alguien llena el formulario, agrega esto al final de la función `doPost`:

```javascript
// Enviar notificación por email
MailApp.sendEmail({
  to: 'info@skywalking.dev',
  subject: 'Nuevo contacto desde la web',
  body: `
    Nuevo mensaje de contacto:

    Nombre: ${data.nombre}
    Email: ${data.email}
    WhatsApp: ${data.whatsapp}
    Proceso: ${data.proceso}
    Descripción: ${data.descripcion || 'No especificada'}

    Fecha: ${new Date().toLocaleString('es-AR')}
  `
});
```
