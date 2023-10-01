import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const DateTable = (props) =>{
    const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        props.Press(day);
      }}
      style={{backgroundColor:'#5E5E5E'}}
      theme={{backgroundColor:'#5E5E5E'}}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
}
export default DateTable;