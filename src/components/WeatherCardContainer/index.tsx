import React from 'react';
 
import {
   Container,
   Today,
   Title,
   WeatherCardScroll,
   WeatherCardWrapper
} from './styles';

import { useTheme } from 'styled-components';

import { WeatherCard } from './WeatherCard';
 
export function WeatherCardContainer(){
   const theme = useTheme();

   return (
      <Container>
         <Today>
            <Title color={theme.colors.custom_white} >Hoje</Title>
            <Title color={theme.colors.custom_white} >22 de Julho de 2021</Title>
         </Today>
         <WeatherCardScroll
            horizontal={true}
            showsHorizontalScrollIndicator={false}
         >
            <WeatherCardWrapper>
               <WeatherCard />
               <WeatherCard />
               <WeatherCard />
            </WeatherCardWrapper>
         </WeatherCardScroll>
      </Container>
   );
}