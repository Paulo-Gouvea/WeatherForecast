import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { useTheme } from "styled-components";

import { MyLocation } from "../screens/MyLocation";
import { Search } from "../screens/Search";
import { Forecast } from "../screens/Forecast";
import { Settings } from "../screens/Settings";

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor: theme.colors.light_weather_card,
                    height: 70,
                },
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.black,
                tabBarLabelStyle: {
                    marginTop: -10,
                    marginBottom: 15
                }
            }}
        >
            <Screen 
                name="Localização"
                component={MyLocation}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <Ionicons
                            name="location-sharp"
                            size={20}
                            color={focused ? theme.colors.white : theme.colors.black}
                        />
                    )
                }}
            />
            <Screen 
                name="Procurar"
                component={Search}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <FontAwesome
                            name="search"
                            size={20}
                            color={focused ? theme.colors.white : theme.colors.black}
                        />
                    )
                }}
            />
            <Screen 
                name="Previsão"
                component={Forecast}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <FontAwesome
                            name="folder"
                            size={20}
                            color={focused ? theme.colors.white : theme.colors.black}
                        />
                    )
                }}
            />
            <Screen 
                name="Configurações"
                component={Settings}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <MaterialIcons
                            name="settings"
                            size={20}
                            color={focused ? theme.colors.white : theme.colors.black}
                        />
                    )
                }}
            />
        </Navigator>
    )
}