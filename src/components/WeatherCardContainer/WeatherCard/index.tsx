import React from 'react';
 
import {
    Container,
    Icon,
    Info,
    Time,
    Temperature,
} from './styles';

import { useTheme } from 'styled-components';
 
export function WeatherCard(){
    const theme = useTheme();

   return (
      <Container color={theme.colors.custom_light_weather_card} >
          <Icon></Icon>
          <Info>
              <Time color={theme.colors.custom_white} >10:00 am</Time>
              <Temperature color={theme.colors.custom_white} >24ºC</Temperature>
          </Info>
      </Container>
   );
}