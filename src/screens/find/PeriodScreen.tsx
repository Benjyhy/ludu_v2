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
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        setShow(false);
        if (event?.type === "dismissed") {
            setDate(date);
            return;
        }
        setDate(selectedDate);
    };
    const showTimePicker = () => {
        setShow(true);
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
        <View style={{ alignItems: "center", paddingTop: 100 }}>
            <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
                <Text variant="titleMedium">Booking for: {route.params.game.gameName}</Text>
                <Text>
                    at{" "}
                    <Text style={{ fontWeight: "bold" }}>
                        Game store name on{" "}
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                            {route.params.date}
                        </Text>
                    </Text>
                </Text>
                <View style={{ width: "100%", flexDirection: "row-reverse", marginTop: 50 }}>
                    <Text>Bring me the game home</Text>
                    <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                    />
                </View>
            </View>
            {!isSelected ? <View style={styles.container}>
                <Text style={{ marginTop: 5 }}>When do you want to come and play?</Text>

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
                : <View style={{ alignItems: "center", paddingTop: 5 }}>
                    <Button
                        style={{ width: 80 }}
                        buttonColor="#545454"
                        onPress={() => {
                            showTimePicker();
                        }}
                    >
                        Choose Time for delivery
                    </Button>
                    <View>
                        <Text>Time chosen:</Text>
                        <Text style={{ fontWeight: "bold" }}>
                            {`${`0${date.getHours()}`.slice(
                                -2,
                            )}:${`0${date.getMinutes()}`.slice(-2)}`}
                        </Text>
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="time"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>}
            <Button
                buttonColor="#545454"
                style={{
                    width: 80,
                    borderRadius: 5,
                    position: "absolute",
                    top: "210%"
                }}
                onPress={() => handleNavigation()}
            >
                Continue
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 70,
    },
    button: {
        borderColor: "#545454",
        borderWidth: 1,
        borderRadius: 6,
        width: 300,
        height: 40,
        marginTop: 20,
    },
    buttonActive: {
        backgroundColor: "#000000",
    },
    textActive: {
        color: "white",
    },
});
export default PeriodScreen;
