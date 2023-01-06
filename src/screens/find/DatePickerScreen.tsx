import React, { useCallback, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, Button } from "react-native-paper"
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import findRoutes from "../../navigation/appRoutes/findRoutes";

function DatePickerScreen({ route, navigation }: any) {
    const format = moment(new Date()).format('YYYY-MM-DD');
    const [selected, setSelected] = useState(format);

    const onDayPress = useCallback((day) => {
        setSelected(day.dateString);
    }, []);

    const marked = useMemo(() => {
        return {
            [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#545454',
                selectedTextColor: '#ffffff'
            },
        };
    }, [selected]);


    const gameName = route.params.gameName;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginTop: 70 }}>
                    <View style={{ paddingHorizontal: 8, alignItems: "center", paddingTop: 5 }}>
                        <Text variant="titleMedium">Booking for: {gameName}</Text>
                        <Text>
                            at <Text style={{ fontWeight: "bold" }}>Game store name</Text>
                        </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Calendar
                            current={format}
                            onDayPress={onDayPress}
                            markedDates={marked}
                            theme={{
                                selectedDayBackgroundColor: '#545454',
                                selectedDayTextColor: '#ffffff',
                                arrowColor: '#545454',
                                monthTextColor: '#545454',
                                textDayHeaderFontWeight: '300',
                            }}
                        />
                        <View style={{ alignItems: "center", paddingTop: 5 }}>
                            <Text>Date chosen:</Text>
                            <Text style={{ fontWeight: "bold" }}>
                                {moment(selected).format("DD/MM/YYYY")}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", paddingTop: 10 }}>
                    <Button
                        buttonColor="#545454"
                        style={{ width: 80, borderRadius: 5, alignSelf: "center" }}
                        onPress={() =>
                            navigation.navigate(findRoutes.PERIOD_FEED, {
                                date: moment(selected).format("DD/MM/YYYY"),
                                gameName: gameName
                            })
                        }
                    >
                        Continue
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DatePickerScreen;
