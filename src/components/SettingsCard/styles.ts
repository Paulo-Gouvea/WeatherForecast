import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.light_weather_card};
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

export const Button = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.dark_mode_button};
    height: 80%;
    width: ${RFValue(60)}px;
    border-radius: 20px;

    align-items: center;
    justify-content: center;
`;
