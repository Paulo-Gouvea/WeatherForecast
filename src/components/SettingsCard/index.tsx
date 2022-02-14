import React from 'react';
import { Feather } from '@expo/vector-icons';
 
import {
   Container,
   Title,
   Button,
} from './styles';

interface SettingsCardProps {
    title: string;
    buttonName: React.ComponentProps<typeof Feather>['name'];
    isDarkModeOn: boolean;
    onPress: () => void;
}
 
export function SettingsCard({
    title,
    buttonName,
    isDarkModeOn,
    onPress
}: SettingsCardProps){
   return (
      <Container
        isDarkModeOn={isDarkModeOn}
      >
          <Title>{title}</Title>
          <Button
            onPress={onPress}
            isDarkModeOn={isDarkModeOn}
          >
              <Feather
                name={buttonName}
                color='white'
                size={35}
              />
          </Button>
      </Container>
   );
}