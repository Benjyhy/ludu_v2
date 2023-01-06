import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, Checkbox } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import findRoutes from "../../navigation/appRoutes/findRoutes";

function TimePickerScreen({ route, navigation }: any) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [checked, setChecked] = React.useState(false);
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
    return (
        <View style={{ alignItems: "center", paddingTop: 100 }}>
            <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
                <Text variant="titleMedium">Booking for: {route.params.gameName}</Text>
                <Text>
                    at <Text style={{ fontWeight: "bold" }}>Game store name on{" "}</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {route.params.date}
                    </Text>
                </Text>
                <View style={{ width: "100%", flexDirection: "row-reverse", marginTop: 50 }}>
                    <Text>Bring me the game home</Text>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                </View>
                <Text style={{ marginTop: 5 }}>When do you want us to bring you the game?</Text>
            </View>
            <View style={{ alignItems: "center", paddingTop: 5 }}>
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
            </View>
            <Button
                style={{ width: 80, borderRadius: 5, position: "absolute", top: "190%" }}
                buttonColor="#545454"
            >
                Continue
            </Button>
        </View>
    );
}

export default TimePickerScreen;
