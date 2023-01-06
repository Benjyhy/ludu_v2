import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, RadioButton, Switch, Button } from "react-native-paper";
import findRoutes from "../../navigation/appRoutes/findRoutes";
import storeMockData from "../../mocks/storeMockData";
import StoreListing from "../../components/StoreListing";
import * as RootNavigation from "../../navigation/rootNavigation";
import { useSelector } from "react-redux";
import { MainAppState } from "../../models/states";


function BookingGameScreen({ route, navigation }: any) {
    const item = route.params.game;
    const gamePlaces = storeMockData;

    const game = gamePlaces.find(game => game.gameId.id === item.id);
    const items = gamePlaces.filter(game => game.gameId.id === item.id);
    const gameName = game.gameId.gameName;
    const [value, setValue] = React.useState('first');

    // const storeId = items.find(store => store.id === game.id)
    // const getBackgroundColor = () => {
    //     let color;
    //     if (storeId) {
    //         color = "#545454";
    //     } else {
    //         color = "";
    //     }
    //     return color;
    // };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={{
                        alignItems: "center",
                        padding: 20,
                        borderWidth: 3,
                        borderColor: "#545454",
                        borderRadius: 5,
                        borderStyle: "solid"
                    }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                        Booking for {gameName}
                    </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={{ marginTop: 10 }}>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View>
                                <Text>Game stores based on your current location</Text>
                                <RadioButton value="location" />
                            </View>
                        </RadioButton.Group>
                        <Text style={{ marginLeft: 8, fontWeight: "bold", fontSize: 17 }}>
                            Your Address
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 8,
                                justifyContent: "space-between"
                            }}
                        >
                            <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 1 }}>
                                Choose your game store
                            </Text>
                            <View style={{ alignItems: "center" }}>
                                <Text>Map view</Text>
                                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                            </View>
                        </View>
                        <ScrollView>
                            {items.map(item => <StoreListing item={item} key={item.id} />)}
                            <Button
                                buttonColor="#545454"
                                style={{ marginVertical: 10, borderRadius: 5 }}
                                onTouchEnd={() => navigation.navigate(findRoutes.DATEPICKER_FEED, { gameName: gameName })}
                            >
                                Continue
                            </Button>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default BookingGameScreen;
