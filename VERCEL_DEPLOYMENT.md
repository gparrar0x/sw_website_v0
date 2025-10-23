# Guía de Deployment a Vercel - Skywalking.dev

## Repositorio GitHub

Tu sitio está en: https://github.com/gparrar0x/sw_website_v0

## Opción 1: Deployment desde Vercel Dashboard (Recomendado)

### Paso 1: Crear cuenta en Vercel (si no la tienes)

1. Ve a https://vercel.com
2. Haz clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza Vercel para acceder a tu cuenta de GitHub

### Paso 2: Importar el proyecto

1. En el dashboard de Vercel, haz clic en **"Add New..." → "Project"**
2. Busca el repositorio: **sw_website_v0**
3. Haz clic en **"Import"**

### Paso 3: Configurar el proyecto

Vercel debería detectar automáticamente que es un proyecto Next.js. Verifica:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (la raíz)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

**IMPORTANTE:** Si tienes problemas con dependencias por React 19, configura:
- **Install Command:** `npm install --legacy-peer-deps`

### Paso 4: Variables de entorno

Este proyecto NO requiere variables de entorno secretas porque:

- ✅ Google Sheets URL ya está en el código (`contact-form.tsx`)
- ✅ Google Apps Script es público (deployed como "Anyone can access")
- ✅ No hay API keys privadas

**Sin embargo**, si en el futuro quieres externalizar la Google Script URL:

1. En "Environment Variables", agrega:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwy_oxRPTKkUwwdBcBfIZK9HRukiVENiJrs7yvQL8W-oazSoUK9-TaWqyyiXmFJUJT3/exec
   ```

2. En `components/contact-form.tsx`, cambia:
   ```typescript
   const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/...'
   ```

### Paso 5: Deploy

1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel:
   - Clona el repositorio
   - Instala dependencias con `--legacy-peer-deps`
   - Construye el proyecto
   - Despliega a CDN global

### Paso 6: ¡Listo!

Vercel te dará una URL como: `https://sw-website-v0.vercel.app`

## Opción 2: Deployment desde CLI

Si prefieres usar la terminal:

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy a producción
vercel --prod
```

## Configurar dominio skywalking.dev

### IMPORTANTE: Transferir dominio del deployment anterior

Si ya tienes `skywalking.dev` apuntando a otro proyecto Vercel:

#### Opción A: Remover dominio del proyecto anterior

1. Ve al proyecto **sw_website_next** en Vercel
2. **Settings → Domains**
3. Encuentra `skywalking.dev` y `www.skywalking.dev`
4. Haz clic en **"Remove"** para cada uno

#### Opción B: Mantener ambos proyectos (staging + producción)

- `skywalking.dev` → sw_website_v0 (nuevo, producción)
- `staging.skywalking.dev` → sw_website_next (anterior, staging)

### Agregar dominio al nuevo proyecto

1. En el dashboard de **sw_website_v0** en Vercel, ve a **Settings → Domains**
2. Haz clic en **"Add"**
3. Ingresa: `skywalking.dev`
4. Repite para: `www.skywalking.dev`

### Configurar DNS (si aplica)

Si tu dominio NO está en Vercel (está en otro proveedor):

**Para dominio principal (skywalking.dev):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Para www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Si el dominio ya está en Vercel:** No necesitas hacer nada, Vercel lo configurará automáticamente.

## Deployments automáticos

Vercel configuró automáticamente deployments en cada push:

- **Commits a `main`** → Deploy a producción (skywalking.dev)
- **Pull Requests** → Deploy preview (URL única para testing)
- **Commits a otras branches** → Deploy preview

### Workflow recomendado

```bash
# Desarrollo local
git checkout -b feature/nueva-funcionalidad
# Hacer cambios...
git add .
git commit -m "feat: nueva funcionalidad"

# Push para preview deployment
git push origin feature/nueva-funcionalidad

# Crear PR en GitHub
gh pr create --title "Nueva funcionalidad" --body "Descripción"

# Vercel automáticamente crea URL preview
# Pruebas en preview URL

# Merge a main → Deploy automático a producción
gh pr merge --squash
```

## Verificar Analytics

Este proyecto tiene `@vercel/analytics` instalado:

1. Ve a tu proyecto en Vercel
2. Click en la pestaña **"Analytics"**
3. Verás métricas de:
   - Page views
   - Visitantes únicos
   - Top pages (presupuestos, manual de marca, etc.)
   - Dispositivos
   - Ubicaciones geográficas

## Monitoreo y Performance

En el dashboard de Vercel:

- **Speed Insights**: Core Web Vitals (LCP, FID, CLS)
- **Function Logs**: Si usas API routes
- **Build Logs**: Historial de deploys
- **Deployment Status**: Éxito/fallo de cada deploy

## Rollback (volver a versión anterior)

Si algo sale mal después de un deploy:

1. Ve a **Deployments**
2. Encuentra el deployment anterior que funcionaba
3. Haz clic en los 3 puntos **"..."**
4. Selecciona **"Promote to Production"**

## Testing antes de producción

### Preview deployments automáticos

Cada vez que hagas un commit a una branch que NO es `main`:

```bash
git checkout -b test/presupuestos-fix
# Hacer cambios...
git add .
git commit -m "fix: ajuste en presupuestos"
git push origin test/presupuestos-fix
```

Vercel creará automáticamente:
- URL preview única (ej: `sw-website-v0-git-test-presupuestos-fix-gparrar0x.vercel.app`)
- Comentario en el commit con el link
- Build status visible en GitHub

### Local testing

Siempre prueba localmente primero:

```bash
# Desarrollo
npm run dev

# Build production localmente
npm run build

# Probar build localmente
npm start
```

## Troubleshooting

### Build falla con error de dependencias

**Problema:** React 19 peer dependency conflicts

**Solución:**
1. Ve a **Settings → General** en Vercel
2. Cambia **Install Command** a: `npm install --legacy-peer-deps`
3. Re-deploy

### Build falla: "Cannot find module gray-matter"

**Problema:** Dependencias no instaladas correctamente

**Solución:**
```bash
# Local
npm install gray-matter react-markdown rehype-raw remark-gfm html2canvas jspdf @vercel/analytics --legacy-peer-deps

# Commit package.json actualizado
git add package.json package-lock.json
git commit -m "fix: update dependencies"
git push
```

### 404 en rutas de presupuestos

**Problema:** Rutas dinámicas no generadas

**Verificar:**
- Existe `app/[cliente]/presupuesto/page.tsx`
- Existe `generateStaticParams()` en el archivo
- Archivos markdown existen en `public/presupuestos/*.md`

**Fix:**
```typescript
// app/[cliente]/presupuesto/page.tsx
export async function generateStaticParams() {
  const slugs = getAllPresupuestosSlugs()
  return slugs.map((slug) => ({ cliente: slug }))
}
```

### Formulario no envía a Google Sheets

**Problema:** CORS o URL incorrecta

**Verificar:**
1. Google Apps Script está deployed como "Anyone can access"
2. URL en `contact-form.tsx` es correcta (termina en `/exec`)
3. Modo `no-cors` está configurado en el fetch

**Debugging:**
```typescript
// En contact-form.tsx, agregar console.logs:
console.log('Enviando a:', GOOGLE_SCRIPT_URL)
console.log('Datos:', data)
```

### Animaciones no funcionan en producción

**Problema:** CSS no cargado o JavaScript deshabilitado

**Verificar:**
1. `globals.css` tiene las clases `.gradient-orb`, `.typing-cursor`, etc.
2. Componentes tienen `'use client'` al inicio
3. useEffect está correctamente implementado

### Variables de entorno no funcionan

Si externalizaste la Google Script URL:

1. Variables deben tener prefijo `NEXT_PUBLIC_` para cliente
2. Deben estar en Vercel **Settings → Environment Variables**
3. Requieren **re-deploy** después de agregar/modificar

```bash
# Forzar re-deploy
git commit --allow-empty -m "chore: force redeploy"
git push
```

## Archivos importantes para Vercel

Vercel usa estos archivos automáticamente:

```
sw_website_v0/
├── package.json          # Dependencias
├── next.config.js        # Configuración Next.js
├── .gitignore           # Archivos ignorados
└── vercel.json          # (Opcional) Config avanzada
```

Si necesitas configuración avanzada, crea `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

## Checklist final pre-deploy

- [ ] `npm run build` funciona localmente sin errores
- [ ] Todas las rutas funcionan en `npm run dev`
- [ ] Presupuestos se visualizan correctamente
- [ ] Formulario envía datos a Google Sheets
- [ ] Animaciones del hero funcionan
- [ ] Footer con WhatsApp funciona
- [ ] Manual de marca se visualiza correctamente
- [ ] No hay console.errors en DevTools
- [ ] Responsive funciona en mobile/tablet/desktop

## Enlaces útiles

- **Repositorio GitHub**: https://github.com/gparrar0x/sw_website_v0
- **Dashboard Vercel**: https://vercel.com/gparrar0x/sw-website-v0 (después del primer deploy)
- **Documentación Vercel**: https://vercel.com/docs
- **Next.js on Vercel**: https://vercel.com/docs/frameworks/nextjs
- **Vercel CLI Docs**: https://vercel.com/docs/cli

## Próximos pasos después del deploy

1. ✅ Verificar que skywalking.dev carga correctamente
2. ✅ Probar formulario de contacto end-to-end
3. ✅ Verificar que presupuestos se generan correctamente
4. ✅ Configurar alertas de uptime (opcional)
5. ✅ Configurar Google Analytics (opcional)
6. ✅ Agregar Sentry para error tracking (opcional)

---

**Última actualización:** 2025-01-22
**Maintainer:** Mentat @ Skywalking.dev
