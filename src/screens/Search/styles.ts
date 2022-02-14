import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface SearchStyleProps {
    isDarkModeOn: boolean;
}

export const Container = styled.View<SearchStyleProps>`
    height: 100%;
    align-items: center;

    padding: 0 ${RFValue(45)}px;
    background-color: ${({theme, isDarkModeOn}) => 
    isDarkModeOn ? theme.colors.dark_background : theme.colors.light_background};
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(45)}px;

    align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: ${RFValue(10)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
`;

export const InputContainer = styled.View`
    flex-direction: row;

    margin-top: ${RFValue(20)}px;
`;

export const InputBox = styled.View<SearchStyleProps>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${RFValue(220)}px;
    height: ${RFValue(50)}px;
    background-color: ${({ theme, isDarkModeOn }) => 
    isDarkModeOn ? theme.colors.dark_weather_card : theme.colors.light_weather_card};

    border-radius: 20px;
`;

export const Input = styled.TextInput`
    height: 100%;
    width: 80%;

    padding-left: ${RFValue(25)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.white};
`;

export const SearchIconButton = styled.TouchableOpacity`
    height: 100%;
    width: 20%;

    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    align-items: center;
`;

export const ChosenLocationWeather = styled.View<SearchStyleProps>`
    background-color: ${({ theme, isDarkModeOn }) => 
    isDarkModeOn ? theme.colors.dark_weather_card : theme.colors.light_weather_card};
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
    color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
`;

export const ChosenLocation = styled.View``;

export const Weather = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

export const Location = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;