# PTI + CEDEX

```mermaid
flowchart TD
  A["Elegir PTI"] --> B["Resolver mapping"]
  B --> C{"¿Conocido?"}
  C -->|Sí| D["Mostrar ISO Code"]
  C -->|No| E["Guardar como manual"]
  D --> F["Editar daño + método"]
  E --> F
```

Set operativo: RAPS, SHORT, LONG y CA. RUNNING y SUPER FREEZER no aparecen. La ubicación y método se consultan desde Grimorio; sin catálogo se permite entrada manual marcada para revisión.
