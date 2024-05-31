import React, { useState } from 'react';
import {mk1_sema, mk1_quin, mk1_mes} from './maquinasInfo/maquina_1';
import {mk2_sema, mk2_quin, mk2_mes} from './maquinasInfo/maquina_2';
import {mk3_sema, mk3_quin, mk3_mes} from './maquinasInfo/maquina_3';
import {mk4_sema, mk4_quin, mk4_mes} from './maquinasInfo/maquina_4';
import {mk5_sema, mk5_quin, mk5_mes} from './maquinasInfo/maquina_5';

const datos =[
  {
    qrData: 1,
  }
];

const maquinas = [
  {
    id: 1,
    nombre:'SOLDADORA ERZA',
    semanal: mk1_sema,
    quincenal: mk1_quin,
    mensual: mk1_mes,
  },
  {
    id: 2,
    nombre:'DEK',
    semanal: mk2_sema,
    quincenal: mk2_quin,
    mensual: mk2_mes,
  },
  {
    id: 3,
    nombre:'DISPENSADORA PVA',
    semanal: mk3_sema,
    quincenal: mk3_quin,
    mensual: mk3_mes,
  },
  {
    id: 4,
    nombre:'FUJI',
    semanal: mk4_sema,
    quincenal: mk4_quin,
    mensual: mk4_mes,
  },
  {
    id: 5,
    nombre:'ROUTER',
    semanal: mk5_sema,
    quincenal: mk5_quin,
    mensual: mk5_mes,
  },
];
export {maquinas, datos};