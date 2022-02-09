import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { useTheme } from "styled-components";

import { MyLocation } from "../screens/MyLocation";
import { Search } from "../screens/Search";
import { Forecast } from "../screens/Forecast";

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor: theme.colors.custom_light_weather_card,
                    height: 70,
                },
                tabBarActiveTintColor: theme.colors.custom_white,
                tabBarInactiveTintColor: theme.colors.custom_black,
                tabBarLabelStyle: {
                    marginTop: -10,
                    marginBottom: 15
                }
            }}
        >
            <Screen 
                name="My Location"
                component={MyLocation}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <Ionicons
                            name="location-sharp"
                            size={20}
                            color={focused ? theme.colors.custom_white : theme.colors.custom_black}
                        />
                    )
                }}
            />
            <Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <FontAwesome
                            name="search"
                            size={20}
                            color={focused ? theme.colors.custom_white : theme.colors.custom_black}
                        />
                    )
                }}
            />
            <Screen 
                name="Forecast"
                component={Forecast}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <FontAwesome
                            name="folder"
                            size={20}
                            color={focused ? theme.colors.custom_white : theme.colors.custom_black}
                        />
                    )
                }}
            />
            <Screen 
                name="Settings"
                component={MyLocation}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <MaterialIcons
                            name="settings"
                            size={20}
                            color={focused ? theme.colors.custom_white : theme.colors.custom_black}
                        />
                    )
                }}
            />
        </Navigator>
    )
}