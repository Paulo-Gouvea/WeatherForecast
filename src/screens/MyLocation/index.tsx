import React, {
   useState,
   useEffect,
} from 'react';
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
import * as Location from 'expo-location';

import { WeatherDTOS } from '../../interface/WeatherDTOS';
import { GeoLocationDTOS } from '../../interface/GeoLocationDTOS';
import { api } from '../../services/api';
 
import { WeatherInfo } from '../../components/WeatherInfo';

const APP_ID = process.env.APP_ID;

export function MyLocation(){
   const [loading, setLoading] = useState(true);
   const [weatherInfo, setWeatherInfo] = useState<WeatherDTOS>({} as WeatherDTOS);
   const [geoLocationInfo, setGeoLocationInfo] = useState<GeoLocationDTOS>({} as GeoLocationDTOS);

   const actualDateDay = format(new Date(), 'd', {locale: ptBR});
   const actualDateMonth = format(new Date(), 'MMMM', {locale: ptBR});
   const actualDateYear = format(new Date(), 'yyyy', {locale: ptBR});
   const actualDate = `${actualDateDay} de ${actualDateMonth} de ${actualDateYear}`;

   useEffect(() => {
      let isMounted = true;

      async function getAPIInfo(){
         try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') return;

            let location = await Location.getCurrentPositionAsync({});
            let latitude = location.coords.latitude.toString();
            let longitude = location.coords.longitude.toString();

            const weatherResponse = await api.get(`data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${APP_ID}`);
            const weatherData = weatherResponse.data;
            
            const geoLocationResponse = await api.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`)
            const geoLocationData = geoLocationResponse.data;

            if(isMounted){
               setWeatherInfo(weatherData);
               setGeoLocationInfo(geoLocationData);
            }
         } catch (error) {
            console.log(error);
         } finally {
            if(isMounted){
               setLoading(false);
            }
         }
      }

      getAPIInfo();
      return () => {
         isMounted = false;
      };
   }, []);

   return (
      <Container>
         {
            loading 
            ?
               <Loading>Carregando...</Loading>
            :
            <>
               <StatusBar
                  backgroundColor='transparent'
                  barStyle='light-content'
                  translucent
               />

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