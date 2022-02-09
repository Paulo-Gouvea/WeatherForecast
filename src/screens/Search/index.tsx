import React from 'react';
import {
    StatusBar
} from 'react-native';

import { FontAwesome, Ionicons } from '@expo/vector-icons';

import {
   Container,
   Header,
   Title,
   Description,
   InputContainer,
   InputBox,
   Input,
   SearchIconButton,
   ActualLocationButton,
   Content,
   ChosenLocationWeather,
   Temperature,
   Icon,
   ChosenLocation,
   City,
   Country,
} from './styles';

import { useTheme } from 'styled-components';
 
export function Search(){
    const theme = useTheme();

   return (
      <Container>
            <StatusBar
                backgroundColor='transparent'
                barStyle='light-content'
                translucent
            />
          <Header>
            <Title>Digite uma localização</Title>
            <Description>Digite a área ou cidade que você queira saber sobre as informações detalhadas do tempo neste momento.</Description>
          </Header>

          <InputContainer>
            <InputBox>
                <Input 
                    placeholder='Search'
                    placeholderTextColor={theme.colors.custom_white}
                />
                <SearchIconButton>
                    <FontAwesome
                        name="search"
                        size={20}
                        color={theme.colors.custom_white}
                    />
                </SearchIconButton>
            </InputBox>

            <ActualLocationButton>
                <Ionicons
                    name="location-sharp"
                    size={24}
                    color={theme.colors.custom_white}
                />
            </ActualLocationButton>
          </InputContainer>

            <Content>
                <ChosenLocationWeather>
                    <Temperature>32ºC</Temperature>
                    
                    <Icon></Icon>
                    
                    <ChosenLocation>
                        <City>Rio de Janeiro</City>
                        <Country>Brasil</Country>
                    </ChosenLocation>
                </ChosenLocationWeather>
            </Content>
      </Container>
   );
}