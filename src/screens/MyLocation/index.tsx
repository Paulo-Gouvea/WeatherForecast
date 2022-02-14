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
import { useDarkMode } from '../../hooks/darkMode';

import { WeatherInfo } from '../../components/WeatherInfo';

export function MyLocation(){
   const { loading, currentLocationWeather, currentLocationInfo } = useLocationInfo();
   const { isDarkModeOn } = useDarkMode();

   const actualDateDay = format(new Date(), 'd', {locale: ptBR});
   const actualDateMonth = format(new Date(), 'MMMM', {locale: ptBR});
   const actualDateYear = format(new Date(), 'yyyy', {locale: ptBR});
   const actualDate = `${actualDateDay} de ${actualDateMonth} de ${actualDateYear}`;

   return (
      <Container
         isDarkModeOn={isDarkModeOn}
      >
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
               <WeatherIcons
                  isDarkModeOn={isDarkModeOn}
               >

               </WeatherIcons>

               <Header>
                  <CurrentLocation>{currentLocationInfo[0].name}</CurrentLocation>
                  <CurrentDate>{ actualDate }</CurrentDate>
               </Header>

               <Weather>
                  <Icon
                     source={{ uri: `http://openweathermap.org/img/wn/${currentLocationWeather.current.weather[0].icon}@2x.png` }}
                  ></Icon>
                  <Temperature>{`${currentLocationWeather.current.temp.toFixed().toString()}ºC`}</Temperature>
               </Weather>

               <WeatherInfoContainer>
                  <WeatherInfo
                     title='Sensação'
                     value={`${currentLocationWeather.current.feels_like.toFixed().toString()}ºC`}
                  />
                  <WeatherInfo 
                     title='Umidade'
                     value={`${currentLocationWeather.current.humidity.toString()}%`}
                  />
                  <WeatherInfo 
                     title='Vento'
                     value={`${(currentLocationWeather.current.wind_speed * 3.6).toPrecision(2).toString()}Km/h`}
                  />
               </WeatherInfoContainer>
            </>
         }
      </Container>
   );
}