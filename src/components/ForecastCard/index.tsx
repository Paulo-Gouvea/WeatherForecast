import React from 'react';
 
import {
   Container,
   DayInfo,
   WeekDay,
   CalendarDay,
   Temperature,
   IconContainer,
} from './styles';
 
export function ForecastCard(){
   return (
      <Container>
          <DayInfo>
              <WeekDay>Wednesday</WeekDay>
              <CalendarDay>25 de Novembro</CalendarDay>
          </DayInfo>

          <Temperature>32ºC</Temperature>

          <IconContainer></IconContainer>
      </Container>
   );
}