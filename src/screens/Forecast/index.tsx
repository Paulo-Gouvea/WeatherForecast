import React from 'react';
import {
   StatusBar
} from 'react-native';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
 
import {
   Container,
   Title,
   Content,
   ForecastTitle,
   ForecastCardList,
   ForecastCardContainer,
} from './styles';

import { useLocationInfo } from '../../hooks/locationInfo';
import { useDarkMode } from '../../hooks/darkMode';

import { ForecastCard } from '../../components/ForecastCard';
 
export function Forecast(){
   const { loading, currentLocationWeather } = useLocationInfo();
   const { isDarkModeOn } = useDarkMode();

   function formatDate(date: number){
      let actualDateDay = format(date, 'd', {locale: ptBR});
      let actualDateMonth = format(date, 'MM', {locale: ptBR});
      let actualDateYear = format(date, 'yyyy', {locale: ptBR});
      let actualDate = `${actualDateDay}/${actualDateMonth}/${actualDateYear}`;

      return actualDate;
   }

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
            <Title>Carregando...</Title>
            :
            <>
               <Title>Previsão do Tempo</Title>

               <Content>
                  <ForecastTitle>Previsão para os próximos dias:</ForecastTitle>

                  <ForecastCardList
                     showsVerticalScrollIndicator={false}
                  >
                     <ForecastCardContainer>
                        {
                           currentLocationWeather.daily.slice(1).map((item) => {
                              return(
                                 <ForecastCard
                                    key={item.dt} 
                                    isDarkModeOn={isDarkModeOn}
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