import React, {
   useState,
   useEffect,
} from 'react';

import { WeatherDTOS } from '../../interface/WeatherDTOS';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as Location from 'expo-location';
import { api } from '../../services/api';
 
import {
   Container,
   Title,
   Content,
   ForecastTitle,
   ForecastCardList,
   ForecastCardContainer,
} from './styles';

import { ForecastCard } from '../../components/ForecastCard';

const APP_ID = process.env.APP_ID;
 
export function Forecast(){
   const [loading, setLoading] = useState(true);
   const [weatherInfo, setWeatherInfo] = useState<WeatherDTOS>({} as WeatherDTOS);

   function formatDate(date: number){
      let actualDateDay = format(date, 'd', {locale: ptBR});
      let actualDateMonth = format(date, 'MM', {locale: ptBR});
      let actualDateYear = format(date, 'yyyy', {locale: ptBR});
      let actualDate = `${actualDateDay}/${actualDateMonth}/${actualDateYear}`;

      return actualDate;
   }

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

            if(isMounted){
               setWeatherInfo(weatherData);
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
            <Title>Carregando...</Title>
            :
            <>
               <Title>Forecast Report</Title>

            <Content>
               <ForecastTitle>Previsão para os próximos dias:</ForecastTitle>

               <ForecastCardList
                  showsVerticalScrollIndicator={false}
               >
                  <ForecastCardContainer>
                     {
                        weatherInfo.daily.slice(1).map((item) => {
                           return(
                              <ForecastCard
                                 key={item.dt} 
                                 weekDay={format((item.dt * 1000), 'EEEE', {locale:ptBR})}
                                 fullDate={formatDate(item.dt * 1000)}
                                 temperature={item.temp.day.toPrecision(2).toString()}
                                 icon={item.weather[0].icon}
                              />
                           )
                        })


                     }
                  </ForecastCardContainer>
               </ForecastCardList>
            </Content>
            </>
         }
      </Container>
   );
}