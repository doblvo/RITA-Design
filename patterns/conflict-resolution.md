# Conflict resolution

Dos o tres técnicos pueden trabajar en la misma unidad.

```mermaid
flowchart TD
  A["Guardar con revisión N"] --> B{"¿Servidor en N?"}
  B -->|Sí| C["Aceptar N+1"]
  B -->|No| D["Mostrar conflicto"]
  D --> E["Revisar / fusionar"]
```

Muestra cambios locales y remotos; ofrece conservar local, usar servidor o fusionar. Nunca resuelvas por último-guardado sin avisar. Fotos y líneas conservan identificadores.
