import React from 'react';

const mk1_sema = [
{
 subTitle: '1. Antes de realizar el mantenimiento a la máquina asegúrese de retirar todo el material productivo de las mismas, así como el material productivo cerca de la máquina que pudiese sufrir algún daño al realizar el mantenimiento.(componentes, tablillas, material de uso exclusivo máquina, etc.)',
},
{
 subTitle: '2. Asegúrese de utilizar su equipo de protección personal durante la realización del mantenimiento de este equipo, el uso de guantes protectores, lentes de seguridad, zapatos de seguridad, etc',
},
{
 subTitle: '3. Limpie dentro y fuera de la máquina con un líquido no abrasivo las partes pintadas de la máquina',
},
{
 subTitle: '4. Limpie las ventanas de observación con spray antiestático. Nota: No utilice líquidos abrasivos que pudieran dañar el vidrio.',
},
{
 subTitle: '5. Limpie el Filtro del abanico extractor de aire, localizado en la parte lateral del panel de control eléctrico.',
},
{
 subTitle: '6. Checar interlocks de las puertas, que no se encuentren en bypass.',
},
{
 subTitle: '7. Revision general de mangueras y cables en la seccion de la fluxera y de los pots.',
},
{
 subTitle: '8. Verifique el buen funcionamiento de la extracción. Manualmente en la conexión entre la máquina y el ducto, cheque que no haya ningún defecto o daño visible ni escape de vapores.',
},
{
 subTitle: '9. Cheque el sensor que detecta el nivel de la extracción, removiendo la manguera el interruptor de vacío debe dispararse y alarmar el equipo, checar sensor de fluxera, pots y pcb',
},
{
 subTitle: '10. Corrobore que las conexiones de la extracción no presentan fugas y asegure la limpieza en esta sección',
},
{
 subTitle: '11. REVISIÓN DEL SISTEMA NEUMÁTICO.- Revise el separador de agua, haga una revisión visual general, drene de ser necesario. Verifique el funcionamiento del sistema neumático. Comprobar el ajuste de los reguladores de presión, verifique conexiones y mangueras en general, que no presenten fugas, tirantez ni daños visibles. reemplace de ser necesario',
},
{
 subTitle: '12. Cheque el filtro para reducción de presión. Comprobar el ajuste de la presión y ajustar de ser necesario. Levantar la perilla del ajuste y dé vuelta hacia la derecha (contrario al giro de las manecillas del reloj), hasta que se exhiba la presión deseada. Luego empuje la perilla del ajuste hacia atrás, de regreso a la posición de cerrado. Drene el separador de agua y límpielo de ser necesario. Para ello, libere el tornillo con estrías negro y dejar el líquido correr hacia algún contenedor. Al terminar vuelva a apretar ese tornillo',
},
{
 subTitle: '13. AJUSTES NEUMÁTICOS DE LA PRESIÓN. FUENTE DE NITRÓGENO Verifique los ajustes de los reguladores de presión y los flujómetros de acuerdo a lo especificado en las etiquetas',
},
{
 subTitle: '14. Cheque el flujo del nitrógeno hacia el inyector de soldado esta deberá ser de 1.5m3/h. y verifique el Funcionamiento del sistema del nitrógeno (válvulas, manómetros, etc.) remplace el dispositivo de ser necesario',
},
{
 subTitle: '15. AJUSTES PARA LA PRESIÓN DEL NITRÓGENO. VERIFICACIÓN DEL FUNCIONAMIENTO DE LA FUENTE DE NITRÓGENO. Cheque el filtro para reducción de presión. Comprobar el ajuste de la presión y ajustar de ser necesario. Levantar la perilla del ajuste y dé vuelta hacia la derecha (contrario al giro de las manecillas del reloj), hasta que se exhiba la presión deseada. Luego empuje la perilla del ajuste hacia atrás, de regreso a la posición de cerrado. Drene el separador de agua y límpielo de ser necesario. Para ello, libere el tornillo con estrías negro y dejar el líquido correr hacia algún contenedor. Al terminar vuelva a apretar ese tornillo',
},
{
 subTitle: "16. Verifique el funcionamiento del sistema automático de llenado de soldadura del pot y reporte a su supervisor en caso de que sea necesario reemplazar alguna pieza en este equipo. SISTEMA TRANSPORTADOR."
},
{
  subTitle: "17. Verifique el funcionamiento de conveyor, cadenas, sensores y sistema de stopper, dicho mecanismo deberá encontrarse en condiciones óptimas de operación, notifique a su supervisor en caso de que alguna de estas partes requiera ser reemplazadas."
},
{
  subTitle: "18. Revise el paralelismo de cada sección del conveyor. Limpie y lubrique el sistema de transporte y de ajuste del ancho de este. Utilice aceite de alta temperatura para lubricar las cadenas y grasa de alta temperatura para lubricación de la guía, mueva el conveyor por medio del software hacia adentro y hacia fuera, retire el excedente de grasa y/o aceite."
},
{
  subTitle: "19. MÓDULO DEL FUXER. Limpiar y remover residuos de flux de la cubierta de los cabezales del fluxer. Verificar las mangueras, tuberías y conexiones de la fuente de nitrógeno, así como también la guía plástica móvil de los arneses del eje de “Y”. Revisar estado y proceder con limpieza de"
},
{
  subTitle: "20. Cuidadosamente agite el contenedor de flux y verifique el estado de las conexiones."
},
{
  subTitle: "21. En el módulo de la fluxera, remueva los residuos de flux con una franela humedecida con limpiador."
},
{
  subTitle: "22. Limpiar y aspirar el área de Fluxer (dentro de la máquina) y filtro de extracción."
},
{
  subTitle: "23. Limpie el techo interior de la máquina en donde se encuentra la fluxera."
},
{
  subTitle: "24. Si efectúa algún tipo de conexión de mangueras de plástico, apretar a mano."
},
{
  subTitle: "25. Revise el filtro del tanque, reemplácelo de ser necesario si nota que afecta la funcionalidad del mismo."
},
{
  subTitle: "26. Verifique condiciones de sprayado, pasando un pallet con una hoja de papel de fax."
},
{
  subTitle: "27. Verifique la cantidad dispensada de flux de acuerdo al valor programado para la fluxera."
},
{
  subTitle: "28. Desmontar y limpiar la placa del sensor que detecta el flux durante la prueba del flux (fork sensor). Quite el perno de ala (X) y quite la placa. Remueva los residuos de flux de la ranura con una franela impregnada con limpiador."
},
{
  subTitle: "29. Verificar los ejes X/Y, inspeccione las bandas y remueva los residuos de flux, limpiar las guías laterales y aceitarlas. Limpiar por debajo del área del fluxer y asegúrese de que ambos cabezales funciones correctamente."
},
{
  subTitle: "30. Realice limpieza y purga de la válvula, conductor y filtro del sistema de flux para evitar que se acumulen sedimentos."
},
{
  subTitle: "31. MÓDULO DE LOS PRECALENTADORES. Cheque la posición del termocople. Verifique que el termopar se enfríe normalmente. Limpie la placa de vidrio cuidadosamente. Desarme, aspire y limpie los precalentadores, remueva los componentes caídos dentro de él, tenga cuidado de no dañar el termopar del precalentador."
},
{
  subTitle: "32. Verifique que todas las lámparas enciendan, remplácelas en caso de que alguna de ellas no funcione."
},
{
  subTitle: "33. Verifique igualmente el correcto funcionamiento del precalentador superior."
},
{
  subTitle: "34. MÓDULO DE SOLDADO. POT DE PUNTO A PUNTO. Cheque el monitor de nivel de soldadura. Quitando la manguera en la conexión rápida. En la pantalla se observará el cambio de color en el icono del pot."
},
{
  subTitle: "35. Revise la correcta operación de la fuente de llenado de soldadura. Limpie la cubierta superior. Vea que no exista oxidación en el solder nozzle, de ser así, límpielo. Limpie la conexión y la tubería en la fuente de soldadura. Verifique el sistema de ejes X/Y/Z, limpie y aplique aceite en los mismos."
},
{
  subTitle: "36. Remueva la escoria del pot de soldadura. Limpie la placa de la boquilla. Limpie y verifique el nivel de soldadura. Limpie las conexiones del nitrógeno y la fuente de soldadura. Limpie la cubierta negra de tela. Posteriormente limpie la bomba con una brocha, esta limpieza debe realizarse cuando los componentes del sistema estén calientes todavía para mayor facilidad."
},
{
  subTitle: "37. Verifique la alineación del pin test, altura de acuerdo a como esta en el programa y de ser necesario alinear/ajustar coordenadas con respecto al nozzle/pin test."
},
{
  subTitle: "38. Asegúrese del buen funcionamiento del auto estañado del nozzle."
},
{
  subTitle: "39. DIP SOLDER POT. (MULTIWAVE). Verifique el funcionamiento del monitor de nivel de soldadura. Limpie la cubierta superior. Limpie las boquillas para que estén libres de óxido. Cheque el funcionamiento del eje Z. Remueva la escoria, limpie la placa del nozzle, el monitor de soldadura, las conexiones de nitrógeno y la fuente de soldadura. Limpie la placa de vidrio y los cepillos."
},
{
  subTitle: "40. Aplique grasa antisize (Anti-atorones) a la tornillería del crisol."
},
{
  subTitle: "41. La escoria debe mantenerse en un bote con un llenado máximo de ¾ partes del bote."
},
{
  subTitle: "42. INSPECCIÓN Y MANTENIMIENTO DE PALLETS. Para el mantenimiento de pallets guíese en procedimiento 16 ME30 3000 00056."
},
{
  subTitle: "43. VALIDACIÓN DE MANTENIMIENTO DE ERSA SELECTIVE SOLDER. Pase un pallet a través del conveyor verificando que éste pase libremente a través de todo el conveyor de la máquina, si no pasa libremente, hacer calibración del conveyor y/o ajustes necesarios."
},
{
  subTitle: "44. Verifique el perfil de temperatura contra la tabla de perfiles en la hoja de parámetros."
},
{
  subTitle: "45. Revise que los botones de paro de emergencia de la máquina estén funcionando correctamente y que efectivamente le dé un shut down total a la soldadura y a la máquina en general al estar presionados."
},
{
  subTitle: "46. Haga una limpieza minuciosa en las paredes de la máquina, tanto en interiores como en exteriores, así también como al piso retire residuos que se hallan quedado adheridos a él, limpie con agua y papel los vidrios de la soldadora, no use solvente."
},
{
  subTitle: "47. Después de realizar el mantenimiento proceda a revisar por lo menos 5 tablillas para verificar que el equipo quedo en óptimas condiciones de funcionamiento."
}
];

const mk1_quin=[
      {
        subTitle: "1. Limpie la placa del sensor encargado de realizar prueba de fluxeo (fork sensor). La ranura de la placa deberá de estar libre de residuos de flux, así como el sensor de dicho mecanismo deberá ser limpiado con una franela impregnada con limpiador."
      },
      {
        subTitle: "2. Remover los residuos de flux, limpiar los ejes y aceitar la superficie. Limpiar por debajo del área del fluxer. Revisar que el spray head funcione."
      },
      {
        subTitle: "3. Realizar la calibración usando el Vidrio de calibración para fluxera selectiva, se debe ajustar el ancho del conveyor al ancho del cristal (300mm), poner los Stopper manualmente colocar cuidadosamente el plato en el módulo de la fluxera, al final del conveyor. Se procede a mandar el Flux Head una posición determinada por el usuario, se sprayea a 2% por medio segundo. Se procede a revisar exactitud de sprayeo, en caso de mostrar variación en la coordenada tomar medidas con un vernier e introducir los ajustes necesarios en offset de CNC del módulo de la fluxera. Una vez realizado el ajuste repita la prueba para corroborar que el ajuste sea correcto."
      },
      {
        subTitle: "4. MÓDULO DE SOLDADO 1 MULTIWAVE (N/A para Versaflow).- Retire el plato del pot realizando el procedimiento tal y como se indica en la instrucción 6-ME30-3025-00003."
      },
      {
        subTitle: "5. Cheque el monitor de nivel de soldadura, quitando la manguera en la conexión rápida. En la pantalla se observan los cambios."
      },
      {
        subTitle: "6. Revise la correcta operación del alimentador de soldadura, Revise conectores y mangueras, de ser necesario reemplácelas."
      },
      {
        subTitle: "7. Verifique el adecuado funcionamiento del eje de Z."
      },
      {
        subTitle: "8. Retire la escoria, limpie la sección encargada de monitorear el nivel de soldadura, verifique y limpie las conexiones de nitrógeno."
      },
      {
        subTitle: "9. Revise el funcionamiento, limpie y de ser necesario cambie las conexiones del sistema alimentador de soldadura."
      },
      {
        subTitle: "10. Limpie y revise el estado de la cámara de nitrógeno en general, tomando en cuenta las Cortinas y escobillas."
      },
      {
        subTitle: "11. Verifique el estado de la banda de le bomba y reemplácela de ser necesario."
      },
      {
        subTitle: "12. Revisar que la verificación de la soldadura este vigente, en caso de que la fecha tenga más de 30 días avisar de inmediato al ingeniero responsable."
      },
      {
        subTitle: "13. Limpie la cubierta superior. Vea que no exista oxidación en el solder nozzle, de ser así, límpielo y haga la medición con el vernier del diámetro interno / externo, el cual no deberá exceder de 0.5mm de ambos diámetros dependiendo la medida del nozzle, si no cumple con las especificaciones reemplácelo. Números de Parte: BA06-3116 Nozzle 6/10 TB03-3002 Nozzle 3/6 TB03-3004 Nozzle 4/8 TB03-3003 Nozzle 3/4.5 TLC02-3435 Nozzle 10/14 TLC02-3453 Nozzle 2.5/4 Verifique el sistema de ejes X/Y/Z, limpie y aplique aceite en los mismos."
      },
      {
        subTitle: "14. Revise, limpie y reemplace de ser necesario los tornillos sujetadores del pot."
      },
      {
        subTitle: "15. Verifique la alineación del pin test, altura de acuerdo a como esta en el programa y de ser necesario alinear/ajustar coordenadas con respecto al nozzle/pin test."
      },
      {
        subTitle: "16. De mantenimiento y asegúrese del buen funcionamiento del auto estañado del nozzle."
      },
      {
        subTitle: "17. Verifique el funcionamiento de los componentes neumáticos. Encienda los componentes en la Terminal de operación. Cheque los ajustes de la presión en el panel neumático y ajuste de ser necesario, levantando la perilla de ajuste y girándola hacia la derecha (contrario al giro de las manecillas del reloj) hasta que se registre la presión deseada. Apague los componentes de nuevo en la Terminal de operación, ninguna presión deberá aparecer en los manómetros. Si escucha ruidos en las conexiones, verifique y cierre todo otra vez."
      },
      {
        subTitle: "18. Verifique las condiciones de conectores y mangueras, de existir fugas u otros daños en los mismos proceda a reemplazar dicha sección."
      },
      {
        subTitle: "19. FUENTE DE NITRÓGENO.- Verifique los ajustes de los reguladores de presión y los flujómetros (manómetros)."
      },
      {
        subTitle: "20. Cheque el flujo del nitrógeno hacia el inyector de soldado. Verifique el funcionamiento del sistema del nitrógeno (válvulas, manómetros, etc.)."
      },
      {
        subTitle: "21. Verifique las condiciones de conectores, válvulas y mangueras, de existir fugas u otros daños en los mismos proceda a reemplazar dicha sección."
      },
      {
        subTitle: "22. Verifique los sensores de diferencia de presión MIN y MAX. Al checar MIN, reduzca el caudal usando la perilla hasta que MIN se active (pequeño chasquido). El mensaje de falla MIN flow rate se muestra en la terminal. Incremente el caudal y reconozca (acknowledge) el mensaje en la terminal. Al checar MAX, incremente el caudal usando la perilla de ajuste hasta que MAX se active (se escucha un pequeño chasquido). El mensaje de falla MAX Flow rate se muestra en la Terminal. Reduce el caudal y reconoce el mensaje. Fije el caudal en el valor inicial."
      },
      {
        subTitle: "23. SISTEMA TRANSPORTADOR.- Limpie con cuidado los sensores que detectan las tablillas en cada módulo de la máquina, así como también a la entrada y la salida de esta."
      },
      {
        subTitle: "24. Verifique el paralelismo del conveyor, utilizando el plato de calibración y un nivel deberá de confirmar que ambos lados del riel se encuentran a la misma altura, de lo contrario deberá de realizar el ajuste mecánico en los brackets de los rieles para que ambos extremos tanto móvil como fijo queden debidamente ajustados. Realizar esta operación en cada una de las secciones de la máquina."
      },
      {
        subTitle: "25. Cheque el sistema del conveyor, que funcione correctamente, limpieza y buena operación en general."
      },
      {
        subTitle: "26. Revise funcionamiento de las cubiertas (integridad y buen montaje). Realice la lubricación de los tornillos y sinfines que permiten el movimiento del conveyor móvil. Utilice aceite de alta temperatura, después de realizar la lubricación, mueva el conveyor por medio del software hacia adentro y hacia fuera, retire el excedente de aceite."
      },
      {
        subTitle: "27. Revise el funcionamiento de los mecanismos de los clamps y stoppers de cada uno de los módulos, de ser necesario reemplace mangueras o pistones."
      },
      {
        subTitle: "28. Verifique la tensión en las cadenas y las bandas de cada sección de conveyor de la máquina y de ser necesario realice ajustes."
      },
      {
        subTitle: "29. Meter filtro de la fluxera al ultrasonido y las piedras del difusor de nitrógeno."
      },
      {
        subTitle: "30. Limpiar el abanico del tablero eléctrico."
      },
      {
        subTitle: "31. Verificar auto lubricación."
      },
      {
        subTitle: "32. Verifique los brackets que fijan el conveyor y apriete los tornillos de ser necesario."
      },
      {
        subTitle: "33. Lubrique la cadena de cada sección con aceite de alta temperatura."
      },
      {
        subTitle: "34. Verifique, limpie y lubrique utilizando aceite de alta temperatura el sistema del width (Valeros lineales, Flechas y coples)."
      }      
]

const mk1_mes = [
      {
        subTitle: "1. Verifique cadenas, valeros y guías para cadena y limpie, lubrique y reemplace lo necesario."
      },
      {
        subTitle: "2. Revise todas las conexiones mecánicas y complete la tornillería faltante."
      },
      {
        subTitle: "3. Revise los componentes eléctricos del panel de control y asegúrese de apretar los tornillos que sean necesarios."
      },
      {
        subTitle: "4. Verifique todos los conectores eléctricos y reemplace los que sean necesarios."
      }
]

export {mk1_sema, mk1_quin, mk1_mes};
