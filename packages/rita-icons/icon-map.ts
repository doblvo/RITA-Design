export type RitaIconName =
  | "plus"|"search"|"edit"|"save"|"sync"|"camera"|"image"|"trash"|"close"
  | "unit"|"reefer"|"cedex"|"pti"|"part"|"serial"|"gas"|"calendar"
  | "cloud"|"cloud-off"|"clock"|"check"|"alert-triangle"|"x-circle"|"info"
  | "user"|"users"|"lock"|"unlock";

export const ritaIconLabels: Record<RitaIconName,string> = {
  plus:"Agregar",search:"Buscar",edit:"Editar",save:"Guardar",sync:"Sincronizar",
  camera:"Agregar foto",image:"Abrir evidencia",trash:"Eliminar",close:"Cerrar",
  unit:"Unidad reefer",reefer:"Equipo reefer",cedex:"ISO Code / CEDEX",pti:"PTI",
  part:"Repuesto",serial:"Serie / placa",gas:"Carga de gas",calendar:"Fabricación",
  cloud:"Nube","cloud-off":"Sin conexión",clock:"Pendiente",check:"Completo",
  "alert-triangle":"Revisión necesaria","x-circle":"Error",info:"Información",
  user:"Técnico",users:"Técnicos",lock:"Bloqueado",unlock:"Volver a progreso"
};
