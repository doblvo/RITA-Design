# Sync Queue

Diferencia guardado local de confirmado por servidor.

```
Borrador → Completa → Pendiente de envío → Sincronizada
                                      ↘ Error → Reintentar
```

El botón **Sincronizar ahora** es visible. Reintenta al abrir con conexión, conserva el orden y no borra datos antes de confirmación. Un cambio de revisión abre ConflictPanel.
