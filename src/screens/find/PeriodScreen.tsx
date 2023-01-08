import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text, Checkbox, SegmentedButtons, Button } from 'react-native-paper';
import findRoutes from "../../navigation/appRoutes/findRoutes";
import DateTimePicker from "@react-native-community/datetimepicker";

function PeriodScreen({ route, navigation }: any) {

    const [buttonSelected, setButtonSelected] = useState('morning');
    const [isSelected, setSelection] = useState(false);
    const [clickedId, setClickedId] = useState(0);
    const [checked, setChecked] = React.useState(false);
    const [date, setDate] = useState(new Date());
    const onChange = (event, selectedDate) => {
        if (event?.type === "dismissed") {
            setDate(date);
            return;
        }
        setDate(selectedDate);
    };
    const game = route.params.game;
    // const date = route.params.date;
    const handleChange = (e) => {
        setSelection(e)
    }
    const handleNavigation = () => {
        isSelected
            ? navigation.navigate(findRoutes.BOOKING_FEED, {
                game: game,
                date: date,
            })
            : navigation.goBack();
    }
    return (
        <View style={{ position: "relative", height: "100%", alignItems: "center" }}>
            <View style={{ marginTop: 70 }}>
                <View style={{ paddingHorizontal: 8, alignItems: "center", paddingTop: 5 }}>
                    <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>Booking for: {route.params.game.gameName}</Text>
                    <Text variant="bodyLarge">
                        at{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            Game store name <Text>on</Text>{" "}
                            <Text style={{ fontWeight: "bold" }}>
                                {route.params.date}
                            </Text>
                        </Text>
                    </Text>
                </View>
                <View style={{ width: "auto", flexDirection: "row-reverse", marginTop: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text variant="titleMedium">Bring me the game home</Text>
                    <Checkbox.Android
                        status={isSelected ? 'checked' : 'unchecked'}
                        color="#f04040"
                        uncheckedColor="#f04040"
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                    />
                </View>
            </View>
            {!isSelected ? <View style={styles.container}>
                <Text variant="titleMedium" style={{ marginBottom: 10 }}>When do you want to come and play?</Text>

                <SegmentedButtons value={buttonSelected}
                    onValueChange={setButtonSelected}
                    buttons={[
                        {
                            value: 'morning',
                            label: 'Morning',
                        },
                        {
                            value: 'afternon',
                            label: 'Atfernoon',
                        },
                        { value: 'evening', label: 'Evening' },
                    ]} />

            </View>
                : <View style={styles.container}>
                    <Text variant="titleMedium" style={{ marginBottom: 10 }}>What time do you want the game delivered ?</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ marginRight: 5 }}>
                            <Text variant="bodyLarge">Chosen time:</Text>
                        </View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="time"
                            display="default"
                            onChange={onChange}
                        />
                    </View>
                </View>}
            <Button
                style={[styles.btn]}
                buttonColor="#f04040"
                textColor="white"
                onPress={() => handleNavigation()}
            >
                Continue
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        marginTop: 20
    },
    btn: {
        borderRadius: 5,
        width: "auto",
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    buttonActive: {
        backgroundColor: "#000000",
    },
    textActive: {
        color: "white",
    },
});
export default PeriodScreen;
