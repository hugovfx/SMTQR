import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calendario = ({valor}) => {
  const markedDates = {};

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();

  const secondWeekLastDay = Math.min(8, lastDayOfMonth);
  const quincenaLastDay = Math.min(15, lastDayOfMonth);
  const thirdWeekLastDay = Math.min(22, lastDayOfMonth);
  
  markedDates[`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${secondWeekLastDay.toString().padStart(2, '0')}`] = {
    selected: true,
    marked: true,
    selectedColor: '#E1C3A8',
  };

  markedDates[`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${quincenaLastDay.toString().padStart(2, '0')}`] = {
    selected: true,
    marked: true,
    selectedColor: '#BBE1A8',
  };

  markedDates[`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${thirdWeekLastDay.toString().padStart(2, '0')}`] = {
    selected: true,
    marked: true,
    selectedColor: '#E1C3A8',
  };

  markedDates[`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${lastDayOfMonth.toString().padStart(2, '0')}`] = {
    selected: true,
    marked: true,
    selectedColor: '#A8E1D1',
  };

  
  return(
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 40, justifyContent:'space-between', backgroundColor:"#EAEAEA"}}>
      <View style={{marginTop:50}}>
      <Calendar markedDates={markedDates}/>
      </View>
      {valor}
    </View>
  );
}


export { Calendario };
