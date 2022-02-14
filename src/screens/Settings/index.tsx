import React from 'react';
import { 
    StatusBar
} from 'react-native';
 
import {
   Container,
   Title,
   Content,
} from './styles';
 
import { useDarkMode } from '../../hooks/darkMode';

import { SettingsCard } from '../../components/SettingsCard';

export function Settings(){
    const { isDarkModeOn, handleDarkMode } = useDarkMode();

   return (
      <Container
        isDarkModeOn={isDarkModeOn}
      >
        <StatusBar
            backgroundColor='transparent'
            barStyle='light-content'
            translucent
        />

        <Title>Configurações</Title>

        <Content>
            <SettingsCard
                title='Modo Noturno'
                buttonName={ isDarkModeOn ? 'sun' : 'moon' }
                isDarkModeOn={isDarkModeOn}
                onPress={handleDarkMode}
            />
        </Content>
      </Container>
   );
}