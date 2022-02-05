import React from 'react';
import {
   StatusBar
} from 'react-native';
 
import {
   Container,
   WeatherIcons,
   Header,
   Location,
   CurrentDate,
   Weather,
   Icon,
   Temperature,
   WeatherInfoContainer
} from './styles';
 
import { WeatherInfo } from '../../components/WeatherInfo';
import { WeatherCardContainer } from '../../components/WeatherCardContainer';

export function Home(){
   return (
      <Container>
         <StatusBar
            backgroundColor='transparent'
            barStyle='light-content'
            translucent
         />

         <WeatherIcons>

         </WeatherIcons>

         <Header>
            <Location>Lagos Nigeria</Location>
            <CurrentDate>22 de Julho de 2021</CurrentDate>
         </Header>

         <Weather>
            <Icon></Icon>
            <Temperature>26ºC</Temperature>
         </Weather>

         <WeatherInfoContainer>
            <WeatherInfo
               title='Temp'
               value='26ºC'
            />
            <WeatherInfo 
               title='Umidade'
               value='60%'
            />
            <WeatherInfo 
               title='Vento'
               value='10Km/h'
            />
         </WeatherInfoContainer>
         
         <WeatherCardContainer />
      </Container>
   );
}