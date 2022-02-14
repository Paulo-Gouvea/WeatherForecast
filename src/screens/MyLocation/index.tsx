import React from 'react';
import {
   StatusBar, View
} from 'react-native';
 
import {
   Container,
   WeatherIconList,
   WeatherIcon,
   WeatherIconImage,
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
import { LoadAnimation } from '../../components/LoadAnimation';

export function MyLocation(){
   const { loading, currentLocationWeather, currentLocationInfo } = useLocationInfo();
   const { isDarkModeOn } = useDarkMode();

   const actualDateDay = format(new Date(), 'd', {locale: ptBR});
   const actualDateMonth = format(new Date(), 'MMMM', {locale: ptBR});
   const actualDateYear = format(new Date(), 'yyyy', {locale: ptBR});
   const actualDate = `${actualDateDay} de ${actualDateMonth} de ${actualDateYear}`;

   const weatherIconsIdentifier = ['01d', '01n', '02d', '02n', '03d', '04d', '09d', '10d', '10n', '11d', '13d', '50d'];

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
               <LoadAnimation />
            :
            <>
               <View style={{ height: 150 }}>
                  <WeatherIconList
                     isDarkModeOn={isDarkModeOn}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                  >
                     {
                        weatherIconsIdentifier.map((item) => {
                           return (
                              <WeatherIcon key={item} >
                                 <WeatherIconImage
                                    source={{ uri: `http://openweathermap.org/img/wn/${item}@2x.png` }}
                                 />
                              </WeatherIcon>
                           )
                        })
                     }
                  </WeatherIconList>
               </View>

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