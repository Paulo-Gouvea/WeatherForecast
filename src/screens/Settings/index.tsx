import React from 'react';
import { 
    StatusBar
} from 'react-native';
 
import {
   Container,
   Title,
   Content,
} from './styles';
 
import { SettingsCard } from '../../components/SettingsCard';

export function Settings(){
   return (
      <Container>
        <StatusBar
            backgroundColor='transparent'
            barStyle='light-content'
            translucent
        />

        <Title>Configurações</Title>

        <Content>
            <SettingsCard
                title='Modo Noturno'
                buttonName='moon'
            />
        </Content>
      </Container>
   );
}