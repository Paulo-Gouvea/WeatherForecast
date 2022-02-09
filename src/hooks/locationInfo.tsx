import React, {
    ReactNode,
    createContext,
    useState,
    useEffect,
    useContext,
} from 'react';

import * as Location from 'expo-location';
import { api } from '../services/api';
import { WeatherDTOS } from '../interface/WeatherDTOS';
import { GeoLocationDTOS } from '../interface/GeoLocationDTOS';

interface LocationInfoProviderProps {
    children: ReactNode;
}

interface LocationInfoContextData {
    loading: boolean;
    weatherInfo: WeatherDTOS;
    geoLocationInfo: GeoLocationDTOS;
}

const APP_ID = process.env.APP_ID;

const LocationInfoContext = createContext({} as LocationInfoContextData);

function LocationInfoProvider({ children }: LocationInfoProviderProps){
    const [loading, setLoading] = useState(true);
    const [weatherInfo, setWeatherInfo] = useState<WeatherDTOS>({} as WeatherDTOS);
    const [geoLocationInfo, setGeoLocationInfo] = useState<GeoLocationDTOS>({} as GeoLocationDTOS);

    useEffect(() => {
        let isMounted = true;
  
        async function getAPIInfo(){
           try {
              let { status } = await Location.requestForegroundPermissionsAsync();
              if(status !== 'granted') return;
  
              let location = await Location.getCurrentPositionAsync({});
              let latitude = location.coords.latitude.toString();
              let longitude = location.coords.longitude.toString();
  
              const weatherResponse = await api.get(`data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${APP_ID}`);
              const weatherData = weatherResponse.data;
              
              const geoLocationResponse = await api.get(`geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`)
              const geoLocationData = geoLocationResponse.data;
  
              if(isMounted){
                 setWeatherInfo(weatherData);
                 setGeoLocationInfo(geoLocationData);
              }
           } catch (error) {
              console.log(error);
           } finally {
              if(isMounted){
                 setLoading(false);
              }
           }
        }
  
        getAPIInfo();
        return () => {
           isMounted = false;
        };
     }, []);

     return (
         <LocationInfoContext.Provider
            value={{
                loading, weatherInfo, geoLocationInfo
            }}
         >
             { children }
         </LocationInfoContext.Provider>
     )
}

function useLocationInfo(){
    const context = useContext(LocationInfoContext);

    return context;
}

export { LocationInfoProvider, useLocationInfo };