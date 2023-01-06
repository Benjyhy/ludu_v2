import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text, Checkbox, SegmentedButtons, Button } from 'react-native-paper';
import findRoutes from "../../navigation/appRoutes/findRoutes";

function PeriodScreen({ route, navigation }: any) {

    const [buttonSelected, setButtonSelected] = useState('morning');
    const [isSelected, setSelection] = useState(false);
    const [clickedId, setClickedId] = useState(0);
    const [checked, setChecked] = React.useState(false);
    const gameName = route.params.gameName;
    const date = route.params.date;
    const handleChange = (e) => {
        setSelection(e)
    }
    const handleNavigation = () => {
        isSelected
            ? navigation.navigate(findRoutes.TIME_FEED, {
                gameName: gameName,
                date: date,
            })
            : navigation.goBack();
    }
    // function ButtonGroup({ buttons }) {
    //     {
    //         <View />;
    //         buttons.map((buttonLabel, index) => {
    //             return (
    //                 <TouchableOpacity
    //                     onPress={item => handleClick(item, index)}
    //                     key={index}
    //                     style={[
    //                         index === clickedId
    //                             ? styles.buttonActive
    //                             : styles.button,
    //                     ]}
    //                 >
    //                     <Text color="#000000" paddingTop={5}>
    //                         {buttonLabel}
    //                     </Text>
    //                 </TouchableOpacity>
    //             );
    //         });
    //     }
    // }
    return (
        <View style={{ alignItems: "center", paddingTop: 100 }}>
            <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
                <Text variant="titleMedium">Booking for: {route.params.gameName}</Text>
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
                <Text style={{ marginTop: 5 }}>When do you want to come and play?</Text>
            </View>
            <View style={styles.container}>
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
