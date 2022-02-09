import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    padding: 0 ${RFValue(45)}px;
    background-color: ${({theme}) => theme.colors.custom_color};
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(45)}px;

    align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.custom_white};

  margin-bottom: ${RFValue(10)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.custom_white};

  text-align: center;
`;

export const InputContainer = styled.View`
    flex-direction: row;

    margin-top: ${RFValue(20)}px;
`;

export const InputBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${RFValue(220)}px;
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.colors.custom_light_weather_card};

    border-radius: 20px;
`;

export const Input = styled.TextInput`
    height: 100%;
    width: 80%;

    padding-left: ${RFValue(25)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const SearchIconButton = styled.View`
    height: 100%;
    width: 20%;

    align-items: center;
    justify-content: center;
`;

export const ActualLocationButton = styled.View`
    width: ${RFValue(40)}px;
    height: ${RFValue(50)}px;

    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.custom_light_weather_card};

    border-radius: 20px;
    margin-left: ${RFValue(10)}px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
`;

export const ChosenLocationWeather = styled.View`
    background-color: ${({ theme }) => theme.colors.custom_light_weather_card};
    width: ${RFValue(162)}px;
    height: ${RFValue(200)}px;
    
    align-items: center;
    justify-content: space-evenly;

    border-radius: 20px;
    margin-top: ${RFValue(40)}px;
`;

export const Temperature = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const Icon = styled.View`
    background-color: green;
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
`;

export const ChosenLocation = styled.View`

`;

export const City = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.custom_white};
`;

export const Country = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.custom_white};
    text-align: center;
`;
