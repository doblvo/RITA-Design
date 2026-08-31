import { ritaTokens } from "../tokens/tokens";

export const ritaFocusRing={outline:`3px solid ${ritaTokens.color.focus}`,outlineOffset:"2px"} as const;
export const ritaDomainAccent={cedex:ritaTokens.color.glacier,part:ritaTokens.color.copper,pti:ritaTokens.color.glacierBright} as const;
export const maxPhotoCount=(current:number)=>Math.max(0,5-current);
export const isCorePti=(value:string)=>["RAPS","SHORT","LONG","CA"].includes(value.trim().toUpperCase());
