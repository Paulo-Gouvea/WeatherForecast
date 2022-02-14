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
}
 
export function SettingsCard({
    title,
    buttonName
}: SettingsCardProps){
   return (
      <Container>
          <Title>{title}</Title>
          <Button>
              <Feather
                name={buttonName}
                color='white'
                size={35}
              />
          </Button>
      </Container>
   );
}