import React from 'react';
 
import {
   Container,
   WeatherInfoTitle,
   WeatherInfoValue,
} from './styles';

interface WeatherInfoProps {
    title: string;
    value: string;
}
 
export function WeatherInfo({
    title,
    value
}: WeatherInfoProps){
   return (
      <Container>
          <WeatherInfoTitle>{title}</WeatherInfoTitle>
          <WeatherInfoValue>{value}</WeatherInfoValue>
      </Container>
   );
}