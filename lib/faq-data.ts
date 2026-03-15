// FAQ data — plain data, no JSX, importable from server components

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategoryData {
  id: string
  title: string
  description: string
  iconName: 'Sparkles' | 'Wrench' | 'DollarSign' | 'Target' | 'Shield'
  faqs: FAQItem[]
}

export const faqData: FAQCategoryData[] = [
  {
    id: 'general',
    title: 'General y Posicionamiento',
    description: 'Quiénes somos y qué hacemos diferente',
    iconName: 'Sparkles',
    faqs: [
      {
        question: '¿Qué es Skywalking.dev y qué hacen exactamente?',
        answer: `<p>Skywalking.dev es una agencia boutique especializada en <strong>automatización de procesos empresariales mediante inteligencia artificial</strong>. Transformamos operaciones manuales repetitivas en flujos automatizados inteligentes.</p>
        <p>Nuestro enfoque:</p>
        <ul>
          <li><strong>No-code first:</strong> Utilizamos n8n, Make y herramientas low-code para velocidad y flexibilidad</li>
          <li><strong>IA aplicada:</strong> Integramos Claude, GPT-4, y modelos especializados para decisiones inteligentes</li>
          <li><strong>ROI medible:</strong> Cada proyecto justificado en ahorro de tiempo y reducción de errores</li>
          <li><strong>Mantenimiento incluido:</strong> Soporte continuo, no te dejamos solo después del deploy</li>
        </ul>`,
      },
      {
        question: '¿En qué se diferencian de otras agencias de IA?',
        answer: `<p>Tres diferencias clave nos distinguen:</p>
        <ol>
          <li><strong>Ejecutamos, no solo consultamos:</strong> Entregamos workflows funcionando en producción, no solo PowerPoints con recomendaciones. Primera automatización en 2-3 semanas, no meses.</li>
          <li><strong>Stack moderno y ágil:</strong> n8n + Supabase + Claude = iteraciones rápidas sin deuda técnica. Cambios en días, no sprints de semanas.</li>
          <li><strong>Transparencia brutal:</strong> Si tu problema no necesita IA, te lo decimos. Presupuestos fijos, no estimaciones infladas. Acceso directo al equipo técnico, sin middlemen.</li>
        </ol>
        <p>Somos <strong>técnicos que hablan negocio</strong>, no vendedores que hablan tecnología.</p>`,
      },
      {
        question: '¿Trabajan solo con empresas grandes o también con startups/pymes?',
        answer: `<p>Trabajamos con <strong>empresas de 10+ empleados</strong> que tienen procesos manuales claros y repetitivos. Nuestro sweet spot:</p>
        <ul>
          <li><strong>Startups B2B (10-50 empleados):</strong> Automatización de onboarding, soporte, y operaciones de ventas</li>
          <li><strong>PYMEs establecidas (50-200 empleados):</strong> Integración de sistemas legacy, workflows interdepartamentales</li>
          <li><strong>Equipos internos de empresas grandes:</strong> Proyectos piloto antes de escalar con IT corporativo</li>
        </ul>
        <p><strong>Red flag:</strong> Si recién estás validando product-market fit, probablemente es muy temprano para automatizar. Primero valida manualmente, luego automatiza.</p>`,
      },
      {
        question: '¿Qué tipos de procesos automatizan típicamente?',
        answer: `<p>Procesos con <strong>alto volumen, bajo juicio humano crítico</strong>. Ejemplos reales de clientes:</p>
        <ul>
          <li><strong>Ventas y Marketing:</strong> Calificación de leads con IA, seguimiento automático post-demo, generación de propuestas personalizadas</li>
          <li><strong>Operaciones:</strong> Onboarding de clientes, procesamiento de facturas, reconciliación de inventarios</li>
          <li><strong>Soporte:</strong> Clasificación de tickets, respuestas automáticas nivel 1, escalamiento inteligente</li>
          <li><strong>Recursos Humanos:</strong> Screening de CVs, programación de entrevistas, onboarding de empleados</li>
        </ul>
        <p>Si tu equipo dedica <strong>+10 horas/semana</strong> a tareas manuales con pasos claros, es candidato para automatización.</p>`,
      },
      {
        question: '¿Cuál es su filosofía de trabajo y valores?',
        answer: `<p>Operamos bajo 4 principios no negociables:</p>
        <ol>
          <li><strong>Velocidad sobre perfección:</strong> Primera versión en 2-3 semanas, iteramos basado en uso real. No esperamos 6 meses para el "sistema perfecto".</li>
          <li><strong>ROI primero, tecnología segundo:</strong> Si no ahorra tiempo o dinero medible, no lo construimos. Matamos features cool que no aportan valor.</li>
          <li><strong>Transparencia radical:</strong> Acceso directo a Gonza (fundador) y al equipo técnico. Reportes semanales de progreso. Si algo va mal, avisamos inmediatamente.</li>
          <li><strong>Ownership compartido:</strong> Tu éxito es nuestro éxito. Pricing con incentivos alineados. Seguimiento post-deployment hasta que domines el sistema.</li>
        </ol>`,
      },
      {
        question: '¿Dónde están ubicados y trabajan con clientes internacionales?',
        answer: `<p>Base en <strong>San Martín de los Andes, Argentina</strong> (UTC-3). Trabajamos con clientes en toda Latinoamérica, España y Estados Unidos.</p>
        <p><strong>Ventajas del timezone argentino:</strong></p>
        <ul>
          <li>Overlap de 4-6 horas con US East Coast (ideal para reuniones)</li>
          <li>Mismo idioma y cultura empresarial que LATAM</li>
          <li>Costos 40-60% menores vs. agencias US/EU sin sacrificar calidad</li>
        </ul>
        <p>Todo el trabajo es <strong>100% remoto</strong>. Reuniones por Zoom/Meet, comunicación asíncrona por Slack, documentación exhaustiva para minimizar fricciones.</p>`,
      },
    ],
  },
  {
    id: 'servicios',
    title: 'Servicios y Tecnología',
    description: 'Cómo trabajamos y qué herramientas utilizamos',
    iconName: 'Wrench',
    faqs: [
      {
        question: '¿Qué es n8n y por qué lo usan en lugar de Zapier/Make?',
        answer: `<p><strong>n8n</strong> es una plataforma de automatización open-source, self-hosted. Es como Zapier pero con superpoderes:</p>
        <ul>
          <li><strong>Sin límites de ejecuciones:</strong> Paga solo por hosting (~USD 50/mes), no por cada automatización</li>
          <li><strong>Control total:</strong> Lógica compleja con JavaScript, acceso a bases de datos, integraciones custom</li>
          <li><strong>Privacidad:</strong> Tus datos nunca salen de tu infraestructura (clave para compliance)</li>
          <li><strong>Escalabilidad:</strong> De 100 a 100,000 ejecuciones/mes sin cambiar de plan</li>
        </ul>
        <p>Usamos <strong>Zapier/Make para prototipos rápidos</strong>, luego migramos a n8n para producción. Mejor de ambos mundos.</p>`,
      },
      {
        question: '¿Qué modelos de IA utilizan? ¿OpenAI, Claude, otros?',
        answer: `<p>Enfoque <strong>multi-modelo</strong> según el caso de uso:</p>
        <ul>
          <li><strong>Claude 3.5 Sonnet (default):</strong> Mejor razonamiento, análisis de documentos largos, menos alucinaciones. Ideal para soporte y análisis de contratos.</li>
          <li><strong>GPT-4 Turbo:</strong> Integraciones maduras, mejor para tareas estructuradas tipo form-filling</li>
          <li><strong>Modelos especializados:</strong> Whisper (transcripción), GPT-4 Vision (OCR/facturas), modelos de embeddings para búsqueda semántica</li>
        </ul>
        <p>No somos fanáticos de un vendor. Evaluamos <strong>costo/beneficio por tarea</strong>: a veces GPT-3.5 es suficiente y es 10x más barato.</p>`,
      },
      {
        question: '¿Construyen software custom o solo automatizan con no-code?',
        answer: `<p><strong>Híbrido estratégico:</strong></p>
        <ul>
          <li><strong>80% no-code/low-code:</strong> n8n workflows para lógica de negocio, Supabase para datos, Vercel para interfaces</li>
          <li><strong>20% código custom:</strong> Cuando no-code se queda corto (ej: algoritmos complejos, integraciones legacy, performance crítico)</li>
        </ul>
        <p><strong>Stack cuando codificamos:</strong> TypeScript + Next.js + Supabase + Edge Functions. Todo serverless, fácil de mantener.</p>
        <p>Filosofía: <strong>Usa no-code hasta que duela</strong>, luego código donde agregue valor real. No codificamos por ego técnico.</p>`,
      },
      {
        question: '¿Qué pasa si necesito integraciones con sistemas legacy o APIs privadas?',
        answer: `<p>Especialidad nuestra. <strong>90% de clientes empresariales</strong> tienen algún sistema legacy (ERP viejo, CRM custom, bases de datos SQL on-premise).</p>
        <p><strong>Nuestro approach:</strong></p>
        <ol>
          <li><strong>API wrapper:</strong> Creamos una capa REST moderna sobre tu sistema legacy (con autenticación segura)</li>
          <li><strong>n8n connect:</strong> Nodos custom en n8n para interactuar con tu API privada</li>
          <li><strong>Sincronización bidireccional:</strong> Supabase como "single source of truth" con syncs periódicos</li>
        </ol>
        <p>Tiempo típico: <strong>1-2 semanas</strong> para la integración inicial, luego es plug-and-play para nuevas automatizaciones.</p>`,
      },
      {
        question: '¿Ofrecen capacitación para que nuestro equipo mantenga las automatizaciones?',
        answer: `<p><strong>Sí, es parte del servicio estándar.</strong> Incluye:</p>
        <ul>
          <li><strong>Documentación exhaustiva:</strong> Video walkthroughs, diagramas de flujo, troubleshooting guides</li>
          <li><strong>Sesiones de training:</strong> 2-3 sesiones de 1 hora con tu equipo técnico/operativo</li>
          <li><strong>Handoff gradual:</strong> Primeros 30 días nosotros monitoreamos 24/7, luego transición a tu equipo con nuestro soporte</li>
          <li><strong>Soporte reactivo:</strong> Slack channel compartido, respuesta en <24hs para bugs críticos</li>
        </ul>
        <p><strong>Opción "Managed Service":</strong> Si no tienes equipo técnico, podemos mantener todo nosotros por un retainer mensual.</p>`,
      },
      {
        question: '¿Cómo manejan la seguridad y el cumplimiento normativo (GDPR, HIPAA, etc.)?',
        answer: `<p>Seguridad y compliance dependen del <strong>nivel de sensibilidad de tus datos</strong>:</p>
        <ul>
          <li><strong>Nivel 1 - Datos públicos/marketing:</strong> Infraestructura cloud estándar (Vercel, Supabase) con encriptación en tránsito</li>
          <li><strong>Nivel 2 - Datos internos/PII:</strong> Self-hosted n8n en tu VPC, bases de datos con encriptación at-rest, logs auditables</li>
          <li><strong>Nivel 3 - Datos regulados (salud, finanzas):</strong> Arquitectura zero-trust, BAAs/DPAs firmados, servidores en regiones específicas (ej: EU para GDPR)</li>
        </ul>
        <p><strong>No somos un compliance shop</strong>, pero trabajamos con tu equipo legal/IT para cumplir requisitos. Surcharge de 20-30% para setups nivel 3.</p>`,
      },
      {
        question: '¿Qué diferencia hay entre un workflow, un agente IA y un copilot?',
        answer: `<p>Términos confusos en el marketing, acá la distinción real:</p>
        <ul>
          <li><strong>Workflow (automatización básica):</strong> Pasos predefinidos, sin decisiones inteligentes. Ej: "Cuando llega email, crea ticket en Jira". <em>Valor: elimina copy-paste manual</em></li>
          <li><strong>Agente IA (semi-autónomo):</strong> Workflow + IA que toma decisiones basadas en contexto. Ej: "Clasifica ticket por urgencia, asigna al equipo correcto, redacta respuesta inicial". <em>Valor: elimina juicio humano repetitivo</em></li>
          <li><strong>Copilot (asistente):</strong> Herramienta que ayuda a humanos a hacer tareas más rápido, pero no las hace sola. Ej: "Sugiere respuestas, el agente elige cuál enviar". <em>Valor: aumenta productividad sin eliminar control</em></li>
        </ul>
        <p><strong>80% de nuestros proyectos son "agentes IA"</strong> - automatización completa con supervisión humana para casos edge.</p>`,
      },
      {
        question: '¿Pueden ayudarnos a mejorar/optimizar automatizaciones existentes?',
        answer: `<p><strong>Sí, ofrecemos auditorías y refactoring.</strong> Escenarios comunes:</p>
        <ul>
          <li><strong>Zapier/Make caro:</strong> Migramos a n8n, reducimos costos 70-90% manteniendo funcionalidad</li>
          <li><strong>Workflows frágiles:</strong> Se rompen constantemente, nadie sabe cómo arreglarlos. Refactorizamos con error handling y monitoreo</li>
          <li><strong>Performance malo:</strong> Automatización que tarda horas, la optimizamos a minutos</li>
        </ul>
        <p><strong>Proceso:</strong> Auditoría inicial (1 semana, ~USD 1,500), luego propuesta de refactor con ROI proyectado. Solo procedes si el business case es claro.</p>`,
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Precios, ROI y Tiempos',
    description: 'Inversión y retornos esperados',
    iconName: 'DollarSign',
    faqs: [
      {
        question: '¿Cuánto cuesta típicamente un proyecto de automatización?',
        answer: `<p><strong>Rangos típicos por tipo de proyecto:</strong></p>
        <ul>
          <li><strong>Quick Win (2-3 semanas):</strong> USD 3,000 - 8,000 | Ej: Automatizar un proceso manual específico (calificación de leads, generación de reportes)</li>
          <li><strong>Proyecto Estándar (1-2 meses):</strong> USD 10,000 - 25,000 | Ej: Integrar 3-5 sistemas, múltiples workflows interdependientes</li>
          <li><strong>Transformación Completa (3-6 meses):</strong> USD 30,000 - 80,000 | Ej: Rediseñar operaciones end-to-end, migrar de legacy a modern stack</li>
        </ul>
        <p><strong>Factores que afectan el precio:</strong> Complejidad de integraciones, cantidad de sistemas legacy, nivel de customización, requisitos de compliance.</p>
        <p><strong>Pricing fijo</strong>, no time & materials. Sabes el costo total antes de empezar.</p>`,
      },
      {
        question: '¿Cómo calculan el ROI? ¿Cuándo se paga sola la inversión?',
        answer: `<p><strong>Fórmula simple de ROI:</strong></p>
        <p><code>ROI = (Ahorro Anual - Costo Proyecto) / Costo Proyecto × 100</code></p>
        <p><strong>Ejemplo real (cliente SaaS B2B):</strong></p>
        <ul>
          <li>Problema: 2 personas dedican 20 hs/semana a calificar leads manualmente</li>
          <li>Solución: Agente IA que analiza formularios + LinkedIn + website</li>
          <li>Costo proyecto: USD 8,000</li>
          <li>Ahorro: 15 hs/semana × USD 25/hora × 52 semanas = USD 19,500/año</li>
          <li><strong>ROI: 143%</strong> | Payback en <strong>5 meses</strong></li>
        </ul>
        <p>Típicamente el <strong>payback es 3-9 meses</strong>. Si es más de 12 meses, probablemente no es el momento correcto.</p>`,
      },
      {
        question: '¿Ofrecen planes de pago o solo upfront?',
        answer: `<p><strong>3 modalidades de pago:</strong></p>
        <ol>
          <li><strong>Upfront (50/50):</strong> 50% al inicio, 50% al deploy. <em>Descuento 10% sobre precio de lista</em></li>
          <li><strong>Milestones (33/33/34):</strong> Pago por hitos (kickoff / MVP / producción). <em>Precio estándar</em></li>
          <li><strong>Retainer mensual:</strong> Para proyectos largos o mejora continua. Ej: USD 5,000/mes por 6 meses. <em>Incluye ajustes y soporte</em></li>
        </ol>
        <p><strong>No ofrecemos:</strong> Revenue share ni equity. Somos agencia, no co-founders.</p>`,
      },
      {
        question: '¿Cuánto tiempo toma ver resultados reales?',
        answer: `<p><strong>Timeline típico de un proyecto estándar:</strong></p>
        <ul>
          <li><strong>Semana 1-2:</strong> Discovery y mapeo de procesos actuales</li>
          <li><strong>Semana 3-4:</strong> MVP funcional en ambiente de prueba (puedes testearlo con datos reales)</li>
          <li><strong>Semana 5-6:</strong> Iteración basada en feedback + integración con sistemas reales</li>
          <li><strong>Semana 7-8:</strong> Deploy a producción + monitoreo intensivo + training</li>
        </ul>
        <p><strong>Primera automatización corriendo: 3-4 semanas.</strong> ROI medible: 2-3 meses (una vez que el proceso está estabilizado).</p>
        <p>No es magia instantánea, pero tampoco un proyecto de 18 meses estilo consultoría tradicional.</p>`,
      },
      {
        question: '¿Qué incluye el precio del proyecto y qué es extra?',
        answer: `<p><strong>Incluido en el precio base:</strong></p>
        <ul>
          <li>Discovery y diseño de workflows</li>
          <li>Desarrollo e integración de automatizaciones</li>
          <li>Testing y debugging</li>
          <li>Deploy a producción</li>
          <li>Documentación y training (2-3 sesiones)</li>
          <li>30 días de soporte post-deploy (bugs y ajustes menores)</li>
        </ul>
        <p><strong>Extras (cotizados por separado):</strong></p>
        <ul>
          <li>Infraestructura cloud (típicamente USD 50-200/mes según volumen)</li>
          <li>Licencias de terceros (APIs de OpenAI, Make, etc.) - usas tus propias cuentas</li>
          <li>Soporte extendido post-30 días (retainer de USD 1,000-3,000/mes)</li>
          <li>Features nuevas fuera del scope original</li>
        </ul>`,
      },
      {
        question: '¿Hay costos recurrentes después del proyecto? ¿Cuánto?',
        answer: `<p><strong>Costos recurrentes típicos:</strong></p>
        <ul>
          <li><strong>Infraestructura:</strong> USD 50-300/mes (servidores n8n, Supabase, Vercel)</li>
          <li><strong>APIs de IA:</strong> USD 100-500/mes (depende de volumen de ejecuciones)</li>
          <li><strong>Mantenimiento opcional:</strong> USD 1,000-3,000/mes (monitorio, ajustes, nuevas features)</li>
        </ul>
        <p><strong>Comparado con alternativas:</strong></p>
        <ul>
          <li><em>Zapier Enterprise:</em> USD 800-2,000/mes solo en licencias</li>
          <li><em>Contratar developer in-house:</em> USD 4,000-8,000/mes en salario</li>
        </ul>
        <p><strong>Con nosotros: USD 150-800/mes en infra + soporte opcional.</strong> 70-90% más barato que alternativas.</p>`,
      },
    ],
  },
  {
    id: 'proceso',
    title: 'Proceso y Metodología',
    description: 'Cómo es trabajar con nosotros',
    iconName: 'Target',
    faqs: [
      {
        question: '¿Cómo es el proceso desde el primer contacto hasta el deploy?',
        answer: `<p><strong>Roadmap de 8 semanas (proyecto estándar):</strong></p>
        <ol>
          <li><strong>Semana 0 - Discovery Call (gratis):</strong> 45 min para entender tu proceso actual, pain points, y expectativas. Determinamos si hay fit.</li>
          <li><strong>Semana 1 - Process Mapping:</strong> Shadowing de tu equipo, documentamos el flujo actual, identificamos bottlenecks.</li>
          <li><strong>Semana 2 - Diseño de Solución:</strong> Proponemos arquitectura, estimamos ROI, definimos scope exacto. Apruebas antes de desarrollar.</li>
          <li><strong>Semana 3-5 - Desarrollo Iterativo:</strong> Builds semanales, testeas con datos reales, feedback rápido.</li>
          <li><strong>Semana 6 - Integración:</strong> Conectamos con tus sistemas reales, migramos datos si aplica.</li>
          <li><strong>Semana 7 - UAT & Training:</strong> Tu equipo testea end-to-end, capacitación formal.</li>
          <li><strong>Semana 8 - Deploy & Handoff:</strong> Go-live controlado, monitoreo 24/7, ajustes inmediatos.</li>
        </ol>`,
      },
      {
        question: '¿Qué necesitan de nosotros para empezar? ¿Mucho tiempo de nuestro equipo?',
        answer: `<p><strong>Tiempo requerido de tu lado:</strong></p>
        <ul>
          <li><strong>Semana 1 (Process Mapping):</strong> 4-6 horas | Necesitamos shadowing de la persona que hace el proceso hoy</li>
          <li><strong>Semana 2-6 (Desarrollo):</strong> 1-2 horas/semana | Feedback en demos semanales</li>
          <li><strong>Semana 7 (Testing):</strong> 4-6 horas | UAT intensivo antes de producción</li>
        </ul>
        <p><strong>Total: ~15-20 horas en 8 semanas.</strong> No necesitamos que nos dediques 100% de tu tiempo.</p>
        <p><strong>Red flag:</strong> Si tu equipo no puede dedicar ese tiempo, probablemente el proyecto no es prioridad real y va a fallar.</p>`,
      },
      {
        question: '¿Cómo manejan cambios de scope durante el proyecto?',
        answer: `<p><strong>Change management pragmático:</strong></p>
        <ul>
          <li><strong>Buffer del 15%:</strong> Todos los proyectos tienen un buffer para ajustes menores sin re-cotizar</li>
          <li><strong>Cambios mayores:</strong> Si el scope crece >15%, hacemos addendum al contrato con costo y timeline nuevos</li>
          <li><strong>Decisión conjunta:</strong> Priorizamos juntos qué es must-have vs nice-to-have</li>
        </ul>
        <p><strong>Filosofía:</strong> Preferimos <strong>iterar en v2</strong> que retrasar v1. Better done than perfect.</p>`,
      },
      {
        question: '¿Qué pasa si no funciona o no estamos satisfechos?',
        answer: `<p><strong>Garantía de satisfacción:</strong></p>
        <ul>
          <li><strong>Money-back en Semana 2:</strong> Si después del process mapping decides que no es lo que esperabas, devolvemos el 50% del primer pago (menos gastos incurridos)</li>
          <li><strong>Hitos aprobados:</strong> No pasamos a la siguiente fase hasta que apruebes la actual. Control total.</li>
          <li><strong>Post-deploy:</strong> Si hay bugs críticos en los primeros 30 días, los arreglamos sin costo. Si es un problema de diseño (no hace lo que necesitas), re-trabajamos hasta que funcione.</li>
        </ul>
        <p><strong>Disclaimers:</strong> No podemos garantizar ROI específico (depende de tu ejecución). No podemos hacer magia si tu proceso base está roto (garbage in, garbage out).</p>`,
      },
      {
        question: '¿Con quién voy a interactuar durante el proyecto?',
        answer: `<p><strong>Equipo típico en un proyecto:</strong></p>
        <ul>
          <li><strong>Gonza (Founder & Tech Lead):</strong> Discovery, arquitectura, y revisión final. Acceso directo por Slack.</li>
          <li><strong>Automation Engineer:</strong> Desarrollo de workflows, integraciones, testing. Tu contacto día a día.</li>
          <li><strong>Product Manager (proyectos >USD 25K):</strong> Coordinación, seguimiento de hitos, comunicación con stakeholders.</li>
        </ul>
        <p><strong>Comunicación:</strong> Slack compartido (async), demos semanales por Zoom (30 min), documentación en Notion.</p>
        <p>No hay "account manager" que te manda emails genéricos. Hablas directo con quien está construyendo.</p>`,
      },
    ],
  },
  {
    id: 'tecnica',
    title: 'Técnica y Seguridad',
    description: 'Detalles técnicos para equipos IT',
    iconName: 'Shield',
    faqs: [
      {
        question: '¿Dónde se hospedan las automatizaciones? ¿Tenemos control?',
        answer: `<p><strong>3 opciones de deployment:</strong></p>
        <ul>
          <li><strong>Managed by Skywalking (default):</strong> Nosotros administramos servidores (Hetzner/DigitalOcean), tú tienes acceso read-only. <em>Más simple, menos control.</em></li>
          <li><strong>Self-hosted en tu cloud:</strong> Deployamos en tu AWS/GCP/Azure, tú tienes acceso root. <em>Control total, más complejo.</em></li>
          <li><strong>Hybrid:</strong> Workflows en tu infra, base de datos compartida en Supabase. <em>Balance entre control y simplicidad.</em></li>
        </ul>
        <p><strong>Recomendación:</strong> Opción 1 para empresas <200 empleados, opción 2 para corporativos con compliance estricto.</p>`,
      },
      {
        question: '¿Qué pasa si Skywalking desaparece? ¿Nos quedamos sin servicio?',
        answer: `<p><strong>No hay lock-in:</strong></p>
        <ul>
          <li><strong>Código abierto:</strong> n8n es open-source, los workflows son exportables (JSON). Puedes migrar a otro provider o mantener in-house.</li>
          <li><strong>Documentación:</strong> Diagramas de arquitectura, guías de troubleshooting, credenciales de acceso. Todo tuyo.</li>
          <li><strong>Escrow arrangement (proyectos >USD 50K):</strong> Copia de código y credenciales en escrow, liberada si dejamos de operar.</li>
        </ul>
        <p>Dicho esto, <strong>llevamos 3+ años operando</strong> y creciendo consistentemente. No vamos a ningún lado.</p>`,
      },
      {
        question: '¿Cómo manejan los errores y el monitoreo? ¿Nos avisan si algo falla?',
        answer: `<p><strong>Estrategia de error handling:</strong></p>
        <ul>
          <li><strong>Retry logic:</strong> 3 intentos automáticos con backoff exponencial antes de alertar</li>
          <li><strong>Alertas en Slack:</strong> Notificaciones inmediatas para errores críticos</li>
          <li><strong>Logs centralizados:</strong> Cada ejecución trackeada con timestamps, inputs/outputs</li>
          <li><strong>Health checks:</strong> Monitoreo 24/7, alertamos si algo está caído >5 minutos</li>
        </ul>
        <p><strong>Durante primeros 30 días:</strong> Nosotros monitoreamos y arreglamos proactivamente. Post-30 días: alertas van a tu equipo, nosotros soporte reactivo.</p>`,
      },
      {
        question: '¿Los datos pasan por servidores de terceros (OpenAI, etc.)? ¿Es seguro?',
        answer: `<p><strong>Depende del nivel de sensibilidad:</strong></p>
        <ul>
          <li><strong>Datos públicos/marketing:</strong> Sí, usamos OpenAI/Claude APIs (encriptado en tránsito, no retenido para training según ToS)</li>
          <li><strong>PII/datos internos:</strong> Opción de anonimización antes de enviar a LLMs (reemplazamos nombres/emails con tokens)</li>
          <li><strong>Datos regulados:</strong> Self-hosted LLMs (ej: Llama 3 en tu infra) o APIs con BAAs (OpenAI Enterprise, Anthropic Enterprise)</li>
        </ul>
        <p><strong>Disclaimer:</strong> Si tus datos son ultra-sensibles (salud, finanzas), el costo y complejidad aumentan 2-3x.</p>`,
      },
      {
        question: '¿Qué tan escalable es la solución? ¿Funciona con 100 ejecuciones/día? ¿Y 10,000?',
        answer: `<p><strong>Benchmarks reales:</strong></p>
        <ul>
          <li><strong>100 ejecuciones/día:</strong> Servidor básico (USD 50/mes), latencia <5 seg. No problem.</li>
          <li><strong>1,000 ejecuciones/día:</strong> Servidor medium (USD 150/mes), posible queue para evitar rate limits de APIs. Still easy.</li>
          <li><strong>10,000+ ejecuciones/día:</strong> Arquitectura distribuida con workers múltiples (USD 500-1,000/mes), caching agresivo. Requiere más ingeniería.</li>
        </ul>
        <p><strong>Diseñamos para 10x tu volumen actual</strong> desde día 1. Si creces más que eso (buen problema), re-arquitecturamos.</p>`,
      },
    ],
  },
]
