# Auditoría de fuentes

Snapshot: 31 de agosto de 2026.

## RITA Offline

Referencia revisada: commit `3ee7ea17d1d61e3dd2cc4511964e0b04420edb9d` de [RITA Offline](https://github.com/doblvo/RITA-Offline).

Aporta Flutter Android offline-first, SQLite, cola local, cache, identidad de dispositivo, captura manual de ISO CEDEX, filas compactas, repuestos, máximo cinco fotos por CEDEX, tema Flutter, assets de marca y las fuentes Inter/Manrope/JetBrains Mono.

## RITA Iquique

Referencia revisada: commit `1ad66ad02e5f97f08c5144a5b7ca0c6856e18d41` de [RITA Iquique](https://github.com/doblvo/RITA-Iquique).

Aporta PWA, IndexedDB, D1/R2, búsqueda directa, colaboración entre técnicos, revisiones de concurrencia, login/aislamiento, formularios PTI/CEDEX, campos libres de serie/gas/fabricación, repuestos manuales, fotos por línea y bloqueo al finalizar.

Durante la revisión, `public/catalogs/transdepot-reefer.json` presentaba un carácter de control que rompía `JSON.parse` en pruebas UI. Esta librería define contratos e invariantes sin copiar el catálogo ni datos privados.

## Decisiones resultantes

- conservar la identidad visual anterior y ordenar su uso;
- conservar filas compactas y acciones directas;
- documentar offline como propiedad de cada acción;
- separar Teal/Glacier para CEDEX y Copper para repuestos;
- permitir entrada manual cuando el catálogo no esté disponible;
- hacer que la persona confirme OCR, autocompletado y match de catálogo.

## Fuera de alcance

Credenciales, secretos, endpoints reales, catálogos completos, fotos reales, datos de unidades, publicación en Sites y rediseño drástico del logo.
