# RITA Design System

Fuente central de diseño y librería operativa para **RITA / FIELD OPERATIONS**. Reúne lo que comparten [RITA Offline](https://github.com/doblvo/RITA-Offline) y [RITA Iquique](https://github.com/doblvo/RITA-Iquique): identidad visual, tokens, iconos, componentes, patrones de captura reefer y contratos de dominio.

Este sistema vive en GitHub. **No depende de Sites**.

> Diseñar para el trabajo real: poca señal, guantes, presión de tiempo y datos técnicos trazables.

## Incluye

- marca y uso del símbolo original dragón/R o térmico-industrial;
- paleta Glacier / Glacier Bright / Copper / Ink / Slate / Ice;
- tokens CSS, TypeScript y Dart;
- iconografía canónica por acciones, dominio, evidencia, estados y sincronización;
- componentes de UI de producto, no solo controles genéricos;
- patrones Search First, captura de unidad, PTI/CEDEX, repuestos, fotos, offline y conflictos;
- contratos de unidad, ISO 6346, ISO Code/CEDEX, PTI, PN, fotos y estados;
- adaptadores web/PWA y Flutter;
- showcase estático, ejemplos y validación automática.

## Reglas de producto preservadas

- El inicio prioriza **buscar una unidad**, no listar toda la base.
- Una unidad nueva empieza limpia: no hereda placa, CEDEX, fotos, PN, serie, fabricación ni gas.
- La interfaz usa **ISO Code / CEDEX**, no “STS” como etiqueta visible.
- Daño + método permanecen juntos y deben ser compatibles con el Grimorio/catálogo.
- Los PN se agregan manualmente con **AGREGAR ESTE REPUESTO**; jamás se asignan automáticamente desde CEDEX.
- Cada línea admite máximo cinco fotos, agrupadas por ISO Code.
- Estados visibles: Borrador, Completa, Pendiente de envío, Sincronizada y Error.
- “Sincronizar ahora” es explícito y no se borra lo local antes de confirmar servidor.
- PTI operativo: RAPS, SHORT, LONG y CA. RUNNING y SUPER FREEZER no se ofrecen.
- Serie, carga de gas y fabricación son campos libres y parten vacíos.
- CEDEX usa Teal/Glacier; repuestos usan Copper/Naranjo.
- La identidad anterior se conserva: no copos, flechas, sombras, contornos ni degradados como sustitutos del logo.

## Mapa

1. [Auditoría](docs/source-audit.md)
2. [Fundaciones](docs/foundations.md)
3. [Tokens](tokens/README.md)
4. [Marca](brand/brand-guidelines.md)
5. [Iconos](icons/README.md)
6. [Componentes](components/README.md)
7. [Patrones](patterns/README.md)
8. [Dominio reefer](domain/README.md)
9. [Plataformas](platforms/README.md)
10. [Contribución](CONTRIBUTING.md)

## Consumo rápido

```html
<link rel="stylesheet" href="tokens/tokens.css">
```

```css
.panel {
  color: var(--rita-color-text-primary);
  background: var(--rita-color-surface-default);
  border: 1px solid var(--rita-color-border-default);
  border-radius: var(--rita-radius-card);
  padding: var(--rita-space-4);
}
```

```bash
npm run validate
```

No se almacenan aquí credenciales, datos de unidades, fotografías reales ni catálogos propietarios completos.
