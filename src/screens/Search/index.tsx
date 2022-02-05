import React from 'react';
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
} from './styles';

import { useTheme } from 'styled-components';
 
export function Search(){
    const theme = useTheme();

   return (
      <Container>
          <Header>
            <Title>Pick a location</Title>
            <Description>Type the area or city you want to know the detailed weather information at this time.</Description>
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
      </Container>
   );
}