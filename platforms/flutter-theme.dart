import 'package:flutter/material.dart';
import '../tokens/tokens.dart';

ThemeData buildRitaTheme() {
  final scheme=ColorScheme.fromSeed(seedColor:RitaTokens.glacier,brightness:Brightness.light,primary:RitaTokens.glacier,secondary:RitaTokens.copper,surface:RitaTokens.white,error:RitaTokens.danger);
  return ThemeData(
    useMaterial3:true,colorScheme:scheme,scaffoldBackgroundColor:RitaTokens.ice,fontFamily:'Inter',
    textTheme:const TextTheme(
      displaySmall:TextStyle(fontFamily:'Manrope',fontWeight:FontWeight.w800,color:RitaTokens.ink),
      headlineMedium:TextStyle(fontFamily:'Manrope',fontWeight:FontWeight.w800,color:RitaTokens.ink),
      titleLarge:TextStyle(fontFamily:'Manrope',fontWeight:FontWeight.w800,color:RitaTokens.ink),
      titleMedium:TextStyle(fontFamily:'Manrope',fontWeight:FontWeight.w700,color:RitaTokens.ink),
      bodyLarge:TextStyle(color:RitaTokens.ink,height:1.35),bodyMedium:TextStyle(color:RitaTokens.slate,height:1.35),
    ),
    cardTheme:CardThemeData(elevation:0,color:RitaTokens.white,shape:RoundedRectangleBorder(borderRadius:BorderRadius.circular(RitaTokens.cardRadius),side:const BorderSide(color:RitaTokens.border))),
    inputDecorationTheme:InputDecorationTheme(filled:true,fillColor:RitaTokens.white,contentPadding:const EdgeInsets.symmetric(horizontal:16,vertical:15),border:OutlineInputBorder(borderRadius:BorderRadius.all(Radius.circular(RitaTokens.controlRadius)),borderSide:const BorderSide(color:RitaTokens.border))),
  );
}
