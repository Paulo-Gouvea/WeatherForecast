import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface WeatherCardProps {
    color: string;
}

export const Container = styled.View<WeatherCardProps>`
    width: ${RFValue(140)}px;
    height: ${RFValue(60)}px;

    margin: 0 ${RFValue(10)}px;
    border-radius: 20px;

    flex-direction: row;

    background-color: ${({ color }) => color};
`;

export const Icon = styled.View`
    background-color: yellow;
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
`

export const Info = styled.View`
    align-items: center;
    justify-content: center;

    padding-left: ${RFValue(10)}px;
`;

export const Time = styled.Text<WeatherCardProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ color }) => color};
`;

export const Temperature = styled.Text<WeatherCardProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ color }) => color};
`;
