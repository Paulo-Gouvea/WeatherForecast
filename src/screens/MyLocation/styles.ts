import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({theme}) => theme.colors.light_background};
`;

export const Loading = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-top: ${getStatusBarHeight() + 15}px;

  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const WeatherIcons = styled.View`
  width: 100%;
  height: ${RFValue(89)}px;

  margin-top: ${getStatusBarHeight() + 15}px;

  background-color: ${({ theme }) => theme.colors.light_weather_icons};
`;

export const Header = styled.View`
  margin: ${RFValue(24)}px 0;

  align-items: center;
`;

export const CurrentLocation = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: ${RFValue(3)}px;
`;

export const CurrentDate = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
`;

export const Weather = styled.View`
  width: ${RFValue(140)}px;
  height: ${RFValue(247)}px;
`;

export const Icon = styled.Image`
  width: 100%;
  height: ${RFValue(155)}px;
`;

export const Temperature = styled.Text`
  font-size: ${RFValue(50)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const WeatherInfoContainer = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(46)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: ${RFValue(30)}px 0;
`;