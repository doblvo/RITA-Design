export const ritaTokens = {
  color: {
    glacier:"#075F62", glacierBright:"#129A9A", glacierDark:"#0A4A4D",
    copper:"#B96D3D", ink:"#101718", slate:"#526061", ice:"#F6F8F8",
    white:"#FFFFFF", border:"#DCE3E3", borderStrong:"#BAC5C5",
    success:"#148A62", warning:"#A96708", danger:"#C73B4A", focus:"#67D2CF"
  },
  font:{display:'"Manrope","Segoe UI",sans-serif',ui:'"Inter","Segoe UI",sans-serif',mono:'"JetBrains Mono",Consolas,monospace'},
  space:{1:4,2:8,3:12,4:16,5:20,6:24,8:32,10:40,12:48,16:64},
  radius:{control:8,row:12,card:16,hero:24,modal:20,pill:999},
  motion:{micro:120,control:180,panel:260},
  domain:{maxPhotosPerCedex:5,ptiCore:["RAPS","SHORT","LONG","CA"] as const}
} as const;
export type RitaTokens=typeof ritaTokens;
