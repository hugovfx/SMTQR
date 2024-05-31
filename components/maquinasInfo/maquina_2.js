import React from 'react';

const mk2_sema = [
  {
    subTitle: "1. Retire el proflow y squeegees de la cabeza de impresión según sea el caso, proceda a dar limpieza y revise el estado de las squeegees, si se encuentran dañadas reemplácelas, instale el proflow o squeegees de nuevo, limpie el dispensador de pasta."
  },
  {
    subTitle: "2. Limpie todo residuo de pasta o pegamento, así como el polvo o componentes de desperdicio de las superficies internas y externas de la máquina, utilice una aspiradora de ser necesario."
  },
  {
    subTitle: "3. Revise el estado de las navajas de los clamps para fijar la tablilla, si están dañadas reemplácelas."
  },
  {
    subTitle: "4. Limpie las bandas transportadoras de tablilla, así como el riel de estas mismas, si se encuentra alguna banda dañada reemplácela, también revise el estado de los sensores de entrada y salida."
  },
  {
    subTitle: "5. Limpie los excesos de grasa e inyecte grasa no. de parte 141146 a los baleros de las guías lineales de los ejes x-y, así como al mecanismo del board stop de la cámara de visión. Utilice para inyectar grasa la boquilla correspondiente."
  },
  {
    subTitle: "6. Valide que el eje lineal x esté paralelo a las navajas del clamp de no ser así favor de notificar al ingeniero de mantenimiento."
  },
  {
    subTitle: "7. Revise la tensión y el estado de las bandas de los ejes x-y de la cámara de visión."
  },
  {
    subTitle: "8. Con una toalla libre de pelusa limpie el lente superior e inferior de la cámara y también el sensor del board stop."
  },
  {
    subTitle: "9. Limpie los excesos de grasa e inyecte grasa no. De parte 141146 a los baleros de las guías lineales del board width (ancho de tablilla), así como al sinfín del mismo mecanismo. Utilice para inyectar grasa la boquilla correspondiente."
  },
  {
    subTitle: "10. Limpie los excesos de grasa e inyecte grasa no. de Parte 141146 a los baleros de las guías lineales del eje z de rising table, así como al sinfín de este mismo mecanismo. Utilice para inyectar grasa la boquilla correspondiente."
  },
  {
    subTitle: "11. Limpie la mesa de impresión y revise que los pines de soporte se coloquen en el lugar correspondiente, si cuenta con sistema de gridlock reemplace las pastas de los pines si se encuentran dañadas. Retire y desarme cada una de las barras del gridlock y límpielas con alcohol (C00-0002-TES) y limpiapipas. Verifique que cada uno de los o´rings se encuentre en buenas condiciones y de ser necesario reemplácelos, arme de nuevo la barra y pruebe que funcione adecuadamente. Repita lo mismo con cada una de las barras."
  },
  {
    subTitle: "12. Limpie los excesos de grasa e inyecte grasa no. De parte 141146 a los baleros de las guías lineales de los ejes de y-z del cabezal de impresión, así como al sinfín de este mecanismo, también lubrique el balero lineal del dispensador de pasta o pegamento. Utilice para inyectar grasa la boquilla correspondiente."
  },
  {
    subTitle: "13. Revise la tensión y el estado de las bandas del eje y del cabezal de impresión."
  },
  {
    subTitle: "14. Revise que el contacto del proflow y el Stencil sea el correcto de lo contrario proceda a ajustarlo."
  },
  {
    subTitle: "15. Revise el funcionamiento de los filtros para alcohol (C00-0002-TES) y de vacío del sistema de limpieza del Stencil, si es necesario reemplácelos."
  },
  {
    subTitle: "16. Realice un ciclo de limpieza (w/v/d) para revisar el correcto funcionamiento del sistema."
  },
  {
    subTitle: "17. Revise que el mecanismo de alimentación de papel funcione correctamente."
  },
  {
    subTitle: "18. Revise las condiciones de los squeegees para limpieza del Stencil, si se encuentran dañados o desgastados reemplácelos."
  },
  {
    subTitle: "19. Realice la calibración de los squeegees."
  },
  {
    subTitle: "20. Revise que al dispensar el solvente moje uniformemente el papel."
  },
  {
    subTitle: "21. Revise el buen estado de mangueras y conexiones del sistema."
  },
  {
    subTitle: "22. Revise que la bomba de vacío al prenderla y apagarla corte y active el vacío en la navaja de limpieza."
  },
  {
    subTitle: "23. Revise que todas las luces de la torreta de la máquina y del TCM funcionen adecuadamente."
  },
  {
    subTitle: "24. Inspeccione que el manómetro de alimentación neumática principal indique de 80 a 90 psi, también revise fugas de aire en el sistema."
  },
  {
    subTitle: "25. Limpie el exterior del TCM, desarme las tapas y limpie la suciedad dentro del equipo, reemplace filtros de los ventiladores. Retire y vacíe el contenedor con agua."
  },
  {
    subTitle: "26. Revise el funcionamiento correcto del indicador de temperatura, cambie a una temperatura diferente y espere a que se estabilice, si no se estabiliza repare la falla y regrese a la temperatura original."
  },
  {
    subTitle: "27. Revise que el interlock de la guarda y los e-stop de la máquina funcionen correctamente."
  },
  {
    subTitle: "28. Proceda a iniciar ciclo de prueba con el Stencil y tablilla para programa 265test1 por 15 minutos."
  },
  {
    subTitle: "29. Retire los excesos de grasa que al lubricar los puntos de mantenimiento (7, 11, 12, 16) se produjeron después del ciclo de prueba."
  },
  {
    subTitle: "30. Después del mantenimiento valide con una dummy en al menos 3 ocasiones."
  }  
];

const mk2_quin=[
  {
    subTitle: "1. Verificar que el parámetro de Board Stop Retract Delay tenga 1seg en máquinas que corran de izquierda a derecha. RUTINA DE CALIBRACION."
  },
  {
    subTitle: "2. Utilizando los manuales de referencia técnicos como guía, mida las posiciones iniciales de cada eje y complete los detalles a continuación."
  },
  {
    subTitle: "Print Carriage mm Valor 610 mm a 614 mm Medida desde Conveyor fijo al Parte interna del cabezal ajustado por."
  },
  {
    subTitle: "Rising Table mm Valor 208 mm a 210 mm Medida desde Mesa al Parte inferior del estencil ajustado por."
  },
  {
    subTitle: "Rail mm Valor 250.15 mm a 250.25 mm Medida desde Riel fijo al Riel movil ajustado por."
  },
  {
    subTitle: "3. Revisar los ajustes de los clamps (Navajas) de la tablilla. Herramienta: Plato de aluminio. Actividad: Ajusta los reguladores de presión para tener una operación suave. Revisa la condición de las navajas de tablilla y verifica que no tengan daños."
  },
  {
    subTitle: "4. Revisar las bandas del conveyor. Remover y revisar la condición de las bandas. Asegurarse que no estén dañadas o se encuentren estiradas."
  },
  {
    subTitle: "5. Ajustar la altura de visión. Llevado a cabo en el diagnóstico: distancia en milímetros de la posición home de la mesa NOTA: 78 MM (-0 mm, 0.2 mm)."
  },
  {
    subTitle: "6. Revisar el offset del BOARD STOP en X Llevado a cabo en el diagnóstico: Una medida en milímetros que se ingresa en Maintenance/Machine Setup para permitir la compatibilidad de archivo del tablero. La distancia debe estar entre 43 mm y 44 mm, verificar que físicamente la distancia coincida con el parámetro en Maintenance/Machine Setup."
  },
  {
    subTitle: "7. Ajustar altura de impresión. Llevado a cabo en el diagnóstico: Distancia en milímetros desde la posición home del Rasing Table, se trata del contacto de los rieles con el esténcil, este contacto debe ser suavizado, es decir, no debe de haber deformación del esténcil."
  },
  {
    subTitle: "8. Ajusta la posición de referencia de la cámara. Llevado a cabo en el diagnóstico: Distancia en milímetros en X y Y de la posición Home de la cámara (Utilizado para todas las medidas y distancias de la cámara). Ajuste del fiducial de referencia de X y Y."
  },
  {
    subTitle: "9. Calibrar el offset de visión Llevado a cabo en la función de mantenimiento: calcula el offset de la cámara para su uso durante la alineación."
  },
  {
    subTitle: "10. Calibrar la altura de las navajas. Calcular la distancia en milímetros desde la posición inicial de la navaja hasta la parte superior del riel para cada navaja. Luego calcula los pasos/kilogramos del factor de presión. (steps/kilogram pressure factor)."
  }
  
];

const mk2_mes = [
  {
    subTitle: "1. Corra el programa para obtener la medición del qc calc utilizando el Stencil y la tablilla correspondiente."
  }  
];

export {mk2_sema, mk2_quin, mk2_mes};
