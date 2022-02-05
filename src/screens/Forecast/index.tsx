import React from 'react';
 
import {
   Container,
   Title,
   Content,
   ForecastTitle,
   ForecastCardList,
   ForecastCardContainer,
} from './styles';

import { WeatherCardContainer } from '../../components/WeatherCardContainer';
import { ForecastCard } from '../../components/ForecastCard';
 
export function Forecast(){
   return (
      <Container>
          <Title>Forecast Report</Title>

          <WeatherCardContainer />

          <Content>
             <ForecastTitle>Previsão para os próximos dias</ForecastTitle>

             <ForecastCardList
               showsVerticalScrollIndicator={false}
             >
                <ForecastCardContainer>
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                  <ForecastCard />
                </ForecastCardContainer>
             </ForecastCardList>
          </Content>
      </Container>
   );
}