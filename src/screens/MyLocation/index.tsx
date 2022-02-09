import React from 'react';
import {
   StatusBar
} from 'react-native';
 
import {
   Container,
   Loading,
   WeatherIcons,
   Header,
   CurrentLocation,
   CurrentDate,
   Weather,
   Icon,
   Temperature,
   WeatherInfoContainer
} from './styles';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useLocationInfo } from '../../hooks/locationInfo';
 
import { WeatherInfo } from '../../components/WeatherInfo';

export function MyLocation(){
   const { loading, weatherInfo, geoLocationInfo } = useLocationInfo();

   const actualDateDay = format(new Date(), 'd', {locale: ptBR});
   const actualDateMonth = format(new Date(), 'MMMM', {locale: ptBR});
   const actualDateYear = format(new Date(), 'yyyy', {locale: ptBR});
   const actualDate = `${actualDateDay} de ${actualDateMonth} de ${actualDateYear}`;

   return (
      <Container>
         <StatusBar
            backgroundColor='transparent'
            barStyle='light-content'
            translucent
         />
         {
            loading 
            ?
               <Loading>Carregando...</Loading>
            :
            <>
               <WeatherIcons>

               </WeatherIcons>

               <Header>
                  <CurrentLocation>{geoLocationInfo[0].name}</CurrentLocation>
                  <CurrentDate>{ actualDate }</CurrentDate>
               </Header>

               <Weather>
                  <Icon
                     source={{ uri: `http://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}@2x.png` }}
                  ></Icon>
                  <Temperature>{`${weatherInfo.current.temp.toFixed().toString()}ºC`}</Temperature>
               </Weather>

               <WeatherInfoContainer>
                  <WeatherInfo
                     title='Sensação'
                     value={`${weatherInfo.current.feels_like.toFixed().toString()}ºC`}
                  />
                  <WeatherInfo 
                     title='Umidade'
                     value={`${weatherInfo.current.humidity.toString()}%`}
                  />
                  <WeatherInfo 
                     title='Vento'
                     value={`${(weatherInfo.current.wind_speed * 3.6).toPrecision(2).toString()}Km/h`}
                  />
               </WeatherInfoContainer>
            </>
         }
      </Container>
   );
}