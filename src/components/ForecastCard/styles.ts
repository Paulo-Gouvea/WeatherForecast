import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.custom_light_weather_card};
    width: 100%;
    height: ${RFValue(75)}px;

    border-radius: 20px;
    margin-bottom: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const DayInfo = styled.View`
    align-items: center;
`;

export const WeekDay = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const CalendarDay = styled.Text`
    font-size: ${RFValue(9)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const Temperature = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const IconContainer = styled.View`
    height: 100%;
    width: ${RFValue(75)}px;
    background-color: beige;
`;
