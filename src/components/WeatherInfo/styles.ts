import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
`;

export const WeatherInfoTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const WeatherInfoValue = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.custom_white};
`;
