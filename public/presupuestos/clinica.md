---
titulo: "Propuesta Bot Clínica San Martín"
cliente: "Clínica San Martín"
fecha: "2025-10-21"
total: "USD 1,500 + USD 300/mes"
contacto: "Gonzalo Parra · +54 11 2162 5416 · info@skywalking.com"
---
## El Desafío

Clínica pequeña en Buenos Aires con 6 especialidades y 30-50 citas semanales. Actualmente, todo el proceso es manual: el equipo dedica tiempo significativo por cita respondiendo WhatsApp, coordinando horarios, y evitando dobles reservas.

**El problema principal:** El volumen de consultas y coordinaciones supera la capacidad de respuesta, generando mensajes sin atender y citas sin agendar.

**Resultado:** Tiempo valioso perdido en tareas operativas que podrían automatizarse, pacientes frustrados sin respuesta, y pérdida de ingresos por citas no agendadas.

---

## La Solución: Bot Inteligente de Gestión de Citas

Asistente virtual con IA que automatiza el 80% de la gestión de citas vía WhatsApp, liberando tiempo del staff médico para tareas de mayor valor.

**Cómo funciona:**

1. Paciente escribe por WhatsApp
2. Bot identifica intención (reservar, cancelar, reprogramar)
3. Consulta disponibilidad en tiempo real
4. Agenda directamente en Google Calendar
5. Envía confirmación automática
6. Si es complejo → deriva a humano

---

## Beneficios Medibles

- **Ahorro de tiempo:** Reducción significativa en tareas operativas del equipo
- **Disponibilidad 24/7:** Pacientes reservan fuera de horario
- **Cero dobles reservas:** Sistema centralizado sincronizado
- **Respuesta instantánea:** <30 segundos vs horas actuales
- **Mejor experiencia:** NPS objetivo >8/10

---

## Qué Incluye (Fase 1)

### Cobertura

- **6 especialidades médicas** configuradas
- **1 médico por especialidad** (extensible a múltiples médicos en el futuro)
- Gestión completa del ciclo de vida de la cita

### Automatización Inteligente

- Bot conversacional con Claude AI
- Orquestación de flujos con n8n
- Identificación automática de intenciones

### Integraciones Core

- WhatsApp Business API (número nuevo dedicado)
- Google Calendar (sincronización en tiempo real)
- Google Sheets (base de datos de pacientes y citas)
- Supabase (logs y respaldo)

### Funcionalidades

- Reserva de citas automática
- Cancelación y reprogramación
- Consulta de disponibilidad
- Handoff a humano cuando sea necesario
- Notificaciones por email (Gmail API)

---

## Implementación (5 semanas)

### Semanas 1-3: Setup & Desarrollo

- Instalación de infraestructura (n8n, APIs)
- Configuración de WhatsApp Business
- Setup de calendarios y base de datos
- Flujos conversacionales diseñados
- Integraciones con Google Calendar y Sheets
- Sistema de routing con Claude AI

### Semanas 4-5: Testing y Ajustes

- 20+ pruebas de flujos completos
- Edge cases (dobles reservas, datos inválidos)
- Handoff a humano testeado
- Capacitación del staff

---

## Inversión y ROI

### Setup Inicial (Único)

**USD 1,500**

Incluye:

- Desarrollo de workflows n8n
- Diseño de flujos conversacionales + IA
- Integraciones (WhatsApp, Calendar, Sheets)
- Testing completo y capacitación

### Mantenimiento Mensual

**USD 300/mes**

Incluye:

- Hosting n8n y Supabase
- Tokens de IA Claude (~500 conversaciones)
- Soporte y actualizaciones
- Optimización mensual de flujos

### Costos Adicionales (Clínica)

- Google Workspace Basic: USD 6/mes (si no lo tienen)
- WhatsApp Business API: Gratis hasta 1,000 conversaciones/mes. Después: ~USD 0.03-0.05 por conversación adicional

### ROI Estimado

- Reducción significativa de tiempo en tareas operativas
- Incremento en citas agendadas (menos pérdidas por falta de respuesta)
- **Break-even estimado: 3-4 meses**
---
## Próximos Pasos
### 1. Call de validación (30 min)
- Confirmar especialidades y horarios
- Definir flujos prioritarios
- Aclarar dudas
### 2. Firma de propuesta
- 50% adelanto (USD 750)
- Inicio de desarrollo
### 3. Kickoff técnico (Semana 1)
- Setup de cuentas y accesos
