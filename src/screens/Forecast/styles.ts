import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    background-color: ${({theme}) => theme.colors.custom_color};
`;

export const Title = styled.Text`
    margin: ${getStatusBarHeight() + RFValue(45)}px 0 ${RFValue(10)}px 0;

    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.custom_white};
    text-align: center;
`;

export const Content = styled.View`
    flex: 1;

    padding: 0 ${RFValue(18)}px;
`;

export const ForecastTitle = styled.Text`
    margin: ${RFValue(15)}px 0;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const ForecastCardList = styled.ScrollView`

`;

export const ForecastCardContainer = styled.View`

`;
