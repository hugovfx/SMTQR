import React from 'react';

const mk3_sema = [
{
  subTitle: "1. SECCION GENERAL.- Antes de iniciar con el mantenimiento verifique el estado físico del cable del trackball este en buena condición, de no estarlo proceda a repararlo. Durante el mantenimiento al equipo, por seguridad desconecte el cable trackball del equipo."
},
{
  subTitle: "2. Inspeccione la unidad de mantenimiento neumático, los depósitos de plástico no deben tener fisuras, ni fugas de aire (en caso reemplácelo), purgue el depósito para eliminar oxido, polvo, humedad acumulada."
},
{
  subTitle: "3. Revise todas las presiones de aire comprimido (presión principal, presión del tanque, presión de atomizadores, sean como la hoja de parámetros). Asegure que todas las tuercas de bloqueo se encuentren apretadas, esto evitará que se desajuste la presión."
},
{
  subTitle: "4. Realice limpieza de conformal de la rejilla del ducto de extracción, verifique mangueras y abrazaderas del ducto se encuentren sin daño. Con una hoja de papel verifique la presencia de extracción, de lo contrario verifique con Ingeniería de planta."
},
{
  subTitle: "5. Retire del equipo cualquier objeto que no pertenezca al equipo o afecte a su correcta operación, material productivo, scrap, objetos personales, basura, etc."
},
{
  subTitle: "6. Realice una limpieza general del equipo, retire del gabinete, estructura, guardas, puertas; cualquier cantidad de polvo, salpicaduras de conformal, residuos de etiquetas. Finalmente Reemplace el papel aluminio que protege el interior de la maquina y conveyor. IMPORTANTE*. Tenga cuidado de no mover de su posición en ningún momento al target de calibración montado en el conveyor."
},
{
  subTitle: "7. SECCION CONVEYOR.- Inspeccione objetos o residuos extraños en la cadena transportadora, verifique los candados de las cadenas se encuentren completos, la cadena no se encuentre floja y el tensor funcione correctamente."
},
{
  subTitle: "8. Limpie los sensores del conveyor con un pañuelo -no usar solventes-, verifique su funcionamiento encendido / apagado con un pallet. La base del sensor no se deberá encontrar floja, ajuste de ser necesario."
},
{
  subTitle: "9. Verifique alineamiento del conveyor de la maquina con el conveyor de entrada y salida, utilice 2 pallets para verificar la alineación, corrija de ser necesario. Revise los motores por sobrecalentamiento y correcta operación."
},
{
  subTitle: "10. Realice limpieza a los depósitos de solvente y purga, utilice cepillo de acero pequeño y solvente Bioact 105 o solvente autorizado. Finalmente rellene los depósitos de solvente con Bioact 105 o solvente autorizado."
},
{
  subTitle: "11. SECCION ROBOT X, Y & Z.- Limpie todos los residuos de conformal y salpicaduras de las válvulas de dispensado, y unidades neumáticas rotador, slide, brackets de montaje. Utilice cepillo de acero pequeño y solvente Bioact 105 o solvente autorizado."
},
{
  subTitle: "12. Inspeccione todas las conexiones neumáticas por fugas de aire, alrededor de las válvulas de dispensado, rotador, slide, y a todo lo largo del arnés."
},
{
  subTitle: "13. Inspeccione todas las conexiones hidráulicas por fugas de conformal, alrededor de las válvulas de dispensado, y a todo lo largo del arnés. Las mangueras hidráulicas no deben tener dobladuras o ahorcamientos que restrinjan el flujo de material."
},
{
  subTitle: "14. Inspeccione todas las líneas eléctricas de los motores, sensores, iluminación, no se encuentren dañadas, cobre expuesto, fojas, alrededor de las válvulas de dispensado, rotador, slide, y a todo lo largo del arnés."
},
{
  subTitle: "15. IMPORTANTE* calibración mecánica. Realice la calibración de las válvulas, instalando la punta de aluminio en la válvula de dispensado y verificándola contra el target de calibración montado en el conveyor, la punta debe coincidir al centro de la cruz. De lo contrario corrija la alineación de la válvula analice y encuentre la parte que afecta la alineación correcta."
},
{
  subTitle: "16. Asegure el correcto funcionamiento de la power supply principal, mediante la realización de un ciclo en seco de la maquina, en caso de que el equipo presente alguna falla deberá de verificar que la power supply cuente con las salidas de 24vcd y 48 vcd."
},
{
  subTitle: "17. SECCION VALVULA DE DISPENSADO.- Realice una inspección minuciosa a la válvula de dispensado, conexiones, tornillería, y reemplace cualquier parte dañada. La válvula no debe tener movimiento, de lo contrario ajuste bracket de montaje."
},
{
  subTitle: "18. Verifique el micrómetro de la válvula de dispensado se encuentre en su posición de cero correctamente, cierre completamente la válvula y ambos “0” ceros de la escala deben coincidir. Ajuste de ser necesario. Finalmente ajuste el micrómetro de acuerdo a la hoja de parámetros del equipo."
},
{
  subTitle: "19. Verifique que al activar la válvula de dispensado, el vástago de la válvula se mueva rápidamente, si se mueve en forma lenta o en pausa es necesario proceder a desarmar y limpiar las partes internas o reemplazarlas –vea sección kit de válvula."
},
{
  subTitle: "20. En el caso de utilizar conformal UV40, retire el capuchón en un ultrasonido y agregue thinner 521 No. Parte TRB03-3028, después cepillar internamente con un cepillo de alambre asegurándose que quede libre de residuo de conformal. En caso de una válvula ultrafina, utilice un pelo de angel Gauge 22 para destapar la punta."
},
{
  subTitle: "21. Lubrique el Packing Nut que se encuentra en la tuerca hexagonal y el vástago de la válvula, agregue algunas gotas de 206-994 LUBRICANT, THROAT SEAL, GRACO, 8 No. Parte EJ04-0016."
},
{
  subTitle: "22. SECCION TANQUES CONFORMAL.- Realice inspección de las conexiones hidráulicas y neumáticas, manómetros, no debiendo tener fugas o daño, reemplace de ser necesario."
},
{
  subTitle: "23. Realice limpieza general del tanque y base charola, retire cualquier cantidad de conformal y salpicaduras. Utilice cepillo de acero pequeño y solvente Bioact 105 o solvente autorizado."
},
{
  subTitle: "24. Verifique el interior del tanque contiene conformal en su interior en un nivel seguro de operación, si el nivel se encuentra bajo realice el cambio de cubeta."
},
{
  subTitle: "25. SECCION KIT DE VALVULA (SOLO SI ES REQUERIDO, VER SECCION VALVULA DE DISPENSADO 4.3) ANTES DE REMOVER LA VALVULA ASEGURE TENER A MANO EL KIT DE REEMPLAZO, POR SI SE LLEGA A DANAR ALGUN COMPONENTE DE LA VALVULA EN EL PROCEDIMEINTO DE LIMPIEZA."
},
{
  subTitle: "26. Para remover la válvula de dispensado siga los siguientes pasos, a) Cierre la válvula de conformal localizada en el tanque, b) cierre la presión principal de aire, c) realice la desconexión de todas las mangueras neumáticas e hidráulicas de la válvula, d) desmonte la válvula del bracket de montaje."
},
{
  subTitle: "27. Desarme el cuerpo de la válvula separando ambas partes fluido y aire, sumerja las partes en solvente Bioact 105 o solvente autorizado para remover todo el conformal acumulado."
},
{
  subTitle: "28. Desarme el cuerpo de la válvula separando ambas partes fluido y aire, sumerja las partes en solvente Bioact 105 o solvente autorizado para remover todo el conformal acumulado. Limpie cada una de las partes y proceda al armado de la válvula nuevamente (si la válvula hexagonal está muy apretada el vástago no se moverá), aplique una pequeñas gotas de 206-994 LUBRICANT, THROAT SEAL, GRACO, 8 No. Parte EJ04-0016. y a los empaque oring aplique una pequeña cantidad de Grasa C/Silicon blanca No. EC01-0031 para facilitar el montaje."
},
{
  subTitle: "29. Coloque cinta teflón a las conexiones de fluido, codo de conexión para línea de conformal y tuerca hexagonal, para eliminar fuga de conformal. Y conecte nuevamente líneas y conexiones de fluidos y aire. Abra nuevamente el suministro principal de conformal y aire comprimido. Purgue la válvula para evacuar el aire del interior."
},
{
  subTitle: "30. Verifique el cero de la válvula -consulte sección válvula de dispensado 2.4."
},
{
  subTitle: "31. SECCION VALIDACION DE EQUIPO.- Pruebe el sistema de seguridad de las guardas, paros de emergencia, este se debe de encontrar en optimas condiciones de funcionamiento, abra una de las guardas y verifique que el sistema interno de funcionamiento de la maquina se pare, al momento de abrir cualquier guarda, si no es así verifique que los sensores no se encuentren en bypass, o dañados, de ser así proceda a la reparación de los mismos o de ser necesario reemplazarlos."
},
{
  subTitle: "32. Prepare un acetato de algún producto y en modo automático introduzca un pallet hasta la salida del horno de curado. Observe el acetato bajo luz blanca y luz negra este debe estar dentro de las condiciones normales, no insuficiencias, excesos, efecto zebra. Finalmente valide el thickness del conformal con el departamento de calidad."
}
];

const mk3_quin=[
{
  subTitle: "1. LUBRICACION DE EJES. Lubrique los slides de las válvulas agregando unas gotas pequeñas gotas de 206-994 LUBRICANT, THROAT SEAL, GRACO, 8 No. Parte EJ04-0016. Si algún slide no se mueve uniformemente en su movimiento hacia arriba o hacia abajo es necesario retirarlo del equipo y colocar un slide en óptimas condiciones. Al slide que retire es necesario sumergirlo en solvente Bioact 105 o solvente autorizado por un tiempo prolongado y realizar su limpieza y sopleteado con aire a presión para retirar el material adherido, lubricar y probarlo nuevamente"
},
{
  subTitle: "2. Lubrique las guias LM y sinfines de los ejes X, Y & Z, aplique una capa fina de grasa NS7 No. Parte EJ04-0010, después de lubricar, realice varios ciclos de la maquina en ciclo seco, y finalmente retire la grasa sobrante, para evitar salpicaduras en el producto."
},
{
  subTitle: "3. Revise la tuerca de union de la bomba con el cilindro del bote de sellador, limpie, lubrique (ISO OIL P/N 217-374) y ajuste correctamente."
},
{
  subTitle: "4. Desarme cuidadosamente el subensamble de la bomba de desplazamiento y limpie, revise Y reemplace en caso de ser necesario."
}
];

const mk3_mes = [
{
subTitle: "1. SECCION CONVEYOR.- Desmonte la cadena del conveyor e inspeccione objetos o residuos extraños en la cadena transportadora, sumerja la cadena en solución solvente, realice la limpieza con cepillo de acero pequeño para retirar cualquier cantidad de conformal adherido. Verifique los candados de las cadenas se encuentren completos, la cadena no se encuentre floja y el tensor funcione correctamente. Finalmente lubrique la cadena con WD-40."
}
];

export {mk3_sema, mk3_quin, mk3_mes};
