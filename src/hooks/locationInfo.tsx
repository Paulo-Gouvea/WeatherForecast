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
   currentLocationWeather: WeatherDTOS;
   currentLocationInfo: GeoLocationDTOS;
}

const APP_ID = process.env.APP_ID;

const LocationInfoContext = createContext({} as LocationInfoContextData);

function LocationInfoProvider({ children }: LocationInfoProviderProps){
   const [loading, setLoading] = useState(true);
   const [currentLocationWeather, setCurrentLocationWeather] = useState<WeatherDTOS>({} as WeatherDTOS);
   const [currentLocationInfo, setCurrentLocationInfo] = useState<GeoLocationDTOS>({} as GeoLocationDTOS);

   useEffect(() => {
      let isMounted = true;
  
      async function getActualLocationInfo(){
         try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') return;
  
            let location = await Location.getCurrentPositionAsync({});
            let latitude = location.coords.latitude.toString();
            let longitude = location.coords.longitude.toString();
  
            const weatherResponse = await api.get(`data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${APP_ID}`);
            const weatherData = weatherResponse.data;
              
            const locationResponse = await api.get(`geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`)
            const locationData = locationResponse.data;
  
            if(isMounted){
               setCurrentLocationWeather(weatherData);
               setCurrentLocationInfo(locationData);
            }
         } catch (error) {
            console.log(error);
         } finally {
            if(isMounted){
               setLoading(false);
            }
         }
      }
  
      getActualLocationInfo();
      return () => {
         isMounted = false;
      };
   }, []);

   return (
      <LocationInfoContext.Provider
         value={{
            loading, currentLocationWeather, currentLocationInfo
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