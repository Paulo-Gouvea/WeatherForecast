import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import {
   Container,
   Header,
   Title,
   Description,
   InputContainer,
   InputBox,
   Input,
   SearchIconButton,
   Content,
   ChosenLocationWeather,
   Temperature,
   Icon,
   ChosenLocation,
   Weather,
   Location,
} from './styles';

import { useFocusEffect } from '@react-navigation/native';

import { api } from '../../services/api';
import { GeoLocationDTOS } from '../../interface/GeoLocationDTOS';
import { WeatherDTOS } from '../../interface/WeatherDTOS';

import { useDarkMode } from '../../hooks/darkMode'

import { useTheme } from 'styled-components';

const APP_ID = process.env.APP_ID;
 
export function Search(){
    const [desiredLocation, setDesiredLocation] = useState('');
    const [isInputSubmitted, setIsInputSubmitted] = useState(false);
    const [anotherLocationLoading, setAnotherLocationLoading] = useState(true);
    const [anotherLocationInfo, setAnotherLocationInfo] = useState<GeoLocationDTOS>({} as GeoLocationDTOS);
    const [anotherLocationWeather, setAnotherLocationWeather] = useState<WeatherDTOS>({} as WeatherDTOS);

    const theme = useTheme();
    const { isDarkModeOn } = useDarkMode();

    function handleInputSubmit(){
        setIsInputSubmitted(true);
    }

    useEffect(() => {
        if(isInputSubmitted === false) return;

        let isMounted = true;

        async function getAnotherLocationInfo(){
            try {
                const locationResponse = await api.get(`geo/1.0/direct?q=${desiredLocation}&appid=${APP_ID}`);
                const locationData = locationResponse.data[0];

                const weatherResponse = await api.get(`data/2.5/onecall?lat=${locationData.lat}&lon=${locationData.lon}&lang=pt_br&units=metric&exclude=minutely,hourly,daily,alerts&appid=${APP_ID}`);
                const weatherData = weatherResponse.data;

                if(isMounted){
                    setAnotherLocationInfo(locationData);
                    setAnotherLocationWeather(weatherData);
                    setDesiredLocation('');
                }

                setIsInputSubmitted(false);
            } catch (error) {
                console.log(error);
            } finally {
                if(isMounted){
                    setAnotherLocationLoading(false);
                }
            }
        }

        getAnotherLocationInfo();
        return () => {
            isMounted = false;
        };
    }, [isInputSubmitted]);

    useFocusEffect(useCallback(() => {
        setDesiredLocation('');
        setIsInputSubmitted(false);
        setAnotherLocationLoading(true);
        setAnotherLocationInfo({} as GeoLocationDTOS);
        setAnotherLocationWeather({} as WeatherDTOS);
    }, []));

   return (
       <KeyboardAvoidingView behavior='height' enabled>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container
                    isDarkModeOn={isDarkModeOn}
                >
                        <StatusBar
                            backgroundColor='transparent'
                            barStyle='light-content'
                            translucent
                        />
                    <Header>
                        <Title>Digite uma cidade</Title>
                        <Description>Digite a cidade que você queira saber sobre as informações detalhadas do tempo neste momento.</Description>
                    </Header>

                    <InputContainer>
                        <InputBox
                            isDarkModeOn={isDarkModeOn}
                        >
                            <Input 
                                placeholder='Procurar'
                                placeholderTextColor={theme.colors.white}
                                value={desiredLocation}
                                onChangeText={setDesiredLocation}
                                onSubmitEditing={handleInputSubmit}
                            />
                            <SearchIconButton
                                onPress={handleInputSubmit}
                            >
                                <FontAwesome
                                    name="search"
                                    size={20}
                                    color={theme.colors.white}
                                />
                            </SearchIconButton>
                        </InputBox>
                    </InputContainer>

                        {
                            anotherLocationLoading === false &&
                            <Content>
                                <ChosenLocationWeather
                                    isDarkModeOn={isDarkModeOn}
                                >
                                    <Temperature>{`${anotherLocationWeather.current.temp.toFixed().toString()}ºC`}</Temperature>
                                    
                                    <Icon
                                        source={{ uri: `http://openweathermap.org/img/wn/${anotherLocationWeather.current.weather[0].icon}@2x.png` }}
                                    ></Icon>
                                    
                                    <ChosenLocation>
                                        <Weather>{`${anotherLocationWeather.current.weather[0].description}`}</Weather>
                                        <Location>{`${anotherLocationInfo.name}`}</Location>
                                    </ChosenLocation>
                                </ChosenLocationWeather>
                            </Content>
                        }


                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
   );
}