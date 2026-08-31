# Offline + sync

Offline-first es una propiedad de cada acción.

```mermaid
flowchart TD
  A["Acción local"] --> B["Persistir SQLite/IndexedDB"]
  B --> C["Marcar pendiente"]
  C --> D{"¿Hay conexión?"}
  D -->|No| E["Continuar"]
  D -->|Sí| F["Enviar y confirmar"]
```

Persistir antes de red. Mostrar local/pendiente/confirmado/error. Reintentar al abrir y con **Sincronizar ahora**. No borrar antes de confirmación.
