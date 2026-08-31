# Tokens

`design-tokens.json` es la fuente estructurada. `tokens.css`, `tokens.ts` y `tokens.dart` son adaptadores de consumo.

Usa primero tokens semánticos (`action.primary`, `domain.cedex`, `domain.part`, `status.offline`) y deja los raw para assets o casos documentados. Una app puede mapear un token a su tema, pero no cambiar su intención silenciosamente.
