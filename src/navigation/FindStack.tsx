import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import findRoutes from "./appRoutes/findRoutes";
import HomeFeedScreen from "../screens/find/HomeFeedScreen";
import MapViewScreen from "../screens/find/MapViewScreen";
import GameScreen from "../screens/find/GameScreen";
import BookingGameScreen from "../screens/find/BookingGameScreen";
import DatePickerScreen from "../screens/find/DatePickerScreen";
import PeriodScreen from "../screens/find/PeriodScreen";

const Stack = createNativeStackNavigator();

const FindStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={findRoutes.HOME_FEED}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={findRoutes.HOME_FEED} component={HomeFeedScreen} />
            <Stack.Screen name={findRoutes.MAP_VIEW} component={MapViewScreen} />
            <Stack.Screen name={findRoutes.GAME_SCREEN} component={GameScreen} />
            <Stack.Screen
                name={findRoutes.BOOKING_FEED}
                component={BookingGameScreen}
            />
            <Stack.Screen
                name={findRoutes.DATEPICKER_FEED}
                component={DatePickerScreen}
            />
            <Stack.Screen name={findRoutes.PERIOD_FEED} component={PeriodScreen} />
        </Stack.Navigator>
    );
};

export default FindStack;
