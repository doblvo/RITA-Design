# Contrato de catálogo

Este repositorio documenta consumo; no redistribuye catálogos privados completos.

## Requisitos

`version`, `updatedAt`, `source`, `items`, código estable, label visible, aliases, compatibilidades y checksum/cambio.

## Fallback seguro

1. catálogo en memoria;
2. cache local de usados;
3. entrada manual;
4. error visible y reintento.

Nunca reemplaces un valor escrito con fallback silencioso. Nunca actives una actualización corrupta: conserva la versión anterior para rollback. Valida JSON, caracteres de control, duplicados y combinaciones imposibles antes de activar.
