import React from 'react';

const mk5_sema = [
{
subTitle: "1. Delimitar el área de trabajo y proceder a poner el equipo en modo Manual/Mantenimiento. Posteriormente, poner paros de emergencia y despresurizar la máquina."
},
{
subTitle: "2. Asegúrese de retirar todo el material productivo dentro de la misma máquina, así como el material productivo cerca de la máquina (componentes, tablillas, material de uso exclusivo de la máquina, etc.)."
},
{
subTitle: "3. Limpiar toda el área interna de la máquina con una aspiradora para remover residuos de polvo y tablilla."
},
{
subTitle: "4. Aspirar el filtro de la aspiradora externa de la router y reemplace el filtro de ser necesario."
},
{
subTitle: "5. Verificar el estado de las bandas transportadoras y reemplazarlas de ser necesario."
},
{
subTitle: "6. Comprobar el buen funcionamiento de los sensores (verificar manualmente en el programa)."
},
{
subTitle: "7. Limpiar los lentes del láser con un trapo sin pelusa y limpiador de cristales."
},
{
subTitle: "8. Quitar paros de emergencia y presurizar la máquina y posteriormente restaurar las fallas."
},
{
subTitle: "9. Mover el Gantry en sus dos ejes (X, Y) para lubricar rieles y sinfines distribuyendo bien la grasa; después retire excesos."
},
{
subTitle: "10. Abrir y cerrar el conveyor para lubricar rieles y sinfines distribuyendo bien la grasa; después retire excesos."
},
{
subTitle: "11. Verificar la presencia de agua condensada en el bulbo de plástico del manómetro principal."
},
{
subTitle: "12. Asegurarse de que la presión del manómetro principal esté ajustada a 5 bar."
},
{
subTitle: "13. Verifique que todo sistema de seguridad del equipo esté funcionando correctamente, como sensores, paros de emergencia, interlocks, cortinas de seguridad, guardas, etc. Abra una de las guardas y verifique que el sistema interno de funcionamiento de la máquina se pare al momento de abrir, y verifique que no esté en bypass o dañados. De ser así, será necesario repararlos o reemplazarlos según sea el caso."
},
{
subTitle: "14. Realice el cambio del filtro de la aspiradora, los números de parte según el modelo de la máquina son: BA06-3082 (Cencorp) o TLC02-16079 (Asys)."
},
{
subTitle: "15. Asegúrese de que la unidad esté encendida y que esté trabajando adecuadamente."
}
];

const mk5_quin=[
{
subTitle: "Realice el cambio del filtro de la aspiradora, números de parte según el modelo de la maquina son: (BA06-3082 Cencorp o TLC02-16079 Asys)"
}
];

const mk5_mes = [
{
subTitle: "1. Limpiar todo el CPU de la computadora de la máquina, revisando que todos los abanicos de la misma funcionen correctamente."
},
{
subTitle: "2. Revisar las mangueras, válvulas, controles de flujo neumáticos, cilindros que tengan buen funcionamiento. De no ser así, repárelas o reemplácelas."
},
{
subTitle: "3. Limpie las cabezas de aire ionizado con brocha, evitando siempre que el polvo entre por los orificios de la boquilla."
},
{
subTitle: "4. Verificar el estado y limpiar el eje (spindle) de la unidad de corte (cabezal)."
},
{
subTitle: "5. Revisar y limpiar el eje porta-brocas (spindle chuck). Para realizar esto, hay que seleccionar Manual Mode > NC Process > Tool Extraction > Tool Out."
},
{
subTitle: "6. Verificar el funcionamiento de los límites de seguridad, paros de emergencia y circuitos de emergencia y los candados de las puertas (interlocks). Verifique el buen funcionamiento de la cortina óptica. Limpie el emisor/sensor y el reflejante con toallas libres de pelusas."
},
{
subTitle: "7. Reemplazar guías lineales y baleros de X y Y."
},
{
subTitle: "8. Revisar y reemplazar, en caso de ser necesario, las luces de señalización defectuosas. Pruebe las luces de la torreta (faro) y los botones en el panel de control mediante la activación de las señales en la ventana Direct IO Control. Anote los números de parte de las piezas que fue necesario reemplazar."
}
];

export {mk5_sema, mk5_quin, mk5_mes};
