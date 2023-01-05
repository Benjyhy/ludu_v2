import React from "react";
import { useState } from "react";
import filters from "../mocks/filterMockData";
import { View, Text } from "react-native";
import { Button, Checkbox } from 'react-native-paper';

interface FilterProps {
    active: boolean;
    onFilterClick: (value: boolean) => void;
}

const Filter = (props: FilterProps) => {
    const [checked, setChecked] = useState({ "FilterA": false, "FilterB": false, "FilterC": false });
    const onButtonPress = () => {
        props.onFilterClick(!props.active);
    };
    return (
        <View style={{
            justifyContent: "space-between",
            height: 100
        }}>

            {filters.map((filter, index) => (
                <View key={index.toString()} >
                    <Checkbox status={checked[filter] ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked({ ...checked });
                        }} key={index} /><Text>{filter}</Text>
                </View>
            ))}
            <View style={{
                flexDirection: "row"
            }}>
                <Button onPress={onButtonPress}>Cancel</Button>
                <Button onPress={onButtonPress} buttonColor="orange">Filter</Button>
            </View>
        </View>
    );
};

export default Filter;
