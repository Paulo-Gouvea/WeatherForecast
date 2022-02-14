import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface SettingsCardStyleProps {
    isDarkModeOn: boolean;
}

export const Container = styled.View<SettingsCardStyleProps>`
    background-color: ${({theme, isDarkModeOn}) => 
    isDarkModeOn ? theme.colors.dark_weather_card : theme.colors.light_weather_card};
    width: 100%;
    height: ${RFValue(75)}px;

    border-radius: 20px;
    margin-bottom: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.TouchableOpacity<SettingsCardStyleProps>`
    background-color: ${({theme, isDarkModeOn}) => 
    isDarkModeOn ? theme.colors.light_background : theme.colors.dark_background};
    height: 80%;
    width: ${RFValue(60)}px;
    border-radius: 20px;

    align-items: center;
    justify-content: center;
`;
