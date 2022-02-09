import React from 'react';
 
import {
   Container,
   DayInfo,
   WeekDay,
   CalendarDay,
   Temperature,
   IconContainer,
} from './styles';

interface ForecastCardProps {
   weekDay: string;
   fullDate: string;
   temperature: string;
   icon: string;
}
 
export function ForecastCard({
   weekDay,
   fullDate,
   temperature,
   icon
}: ForecastCardProps){
   return (
      <Container>
          <DayInfo>
              <WeekDay>{weekDay}</WeekDay>
              <CalendarDay>{fullDate}</CalendarDay>
          </DayInfo>

          <Temperature>{`${temperature}ºC`}</Temperature>

          <IconContainer
            source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
          ></IconContainer>
      </Container>
   );
}