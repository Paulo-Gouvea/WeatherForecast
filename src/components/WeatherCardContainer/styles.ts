import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TitleProps{
    color: string;
}

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;
`;

export const Today = styled.View`
    margin-top: ${RFValue(10)}px;

    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text<TitleProps>`
    margin: 0 ${RFValue(24)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ color }) => color};
`

export const WeatherCardScroll = styled.ScrollView``

export const WeatherCardWrapper = styled.View`
    flex: 1;
    flex-direction: row;

    align-items: flex-end;
`