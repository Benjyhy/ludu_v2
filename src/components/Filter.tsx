import React, { useEffect, useRef } from "react";
import { useState } from "react";
import filters from "../mocks/filterMockData";
import { View, Text, Animated, Dimensions } from "react-native";
import { Button, Checkbox } from 'react-native-paper';

interface FilterProps {
    active: boolean;
    onFilterClick: (value: boolean) => void;
}

const Filter = (props: FilterProps) => {
    const [checked, setChecked] = useState({ "FilterA": false, "FilterB": false, "FilterC": false });
    const slideAnim = useRef(new Animated.Value(-1000)).current;
    const animation = Animated.timing(
        slideAnim,
        {
            useNativeDriver: true,
            toValue: 0,
            duration: 500,
        }
    );
    useEffect(() => {
        if (props.active) {
            animation
                .start();
        } else {
            animation.reset()
        }
    }, [props.active])
    const onButtonPress = () => {
        props.onFilterClick(!props.active);
        animation.reset();
    };
    return (
        <Animated.View style={{
            justifyContent: "space-between",
            height: 500,
            width: "100%",
            position: "absolute",
            transform: [{ translateY: slideAnim }],
            zIndex: 100,
            backgroundColor: "white",
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4.65,

            elevation: 8,
        }}>
            {filters.map((filter, index) => (
                <View key={index.toString()} style={{ flexDirection: "row", alignItems: "baseline" }}>
                    <Checkbox status={checked[filter] ? 'checked' : 'unchecked'} color="green" uncheckedColor="green"
                        onPress={() => {
                            setChecked({ ...checked });
                        }} key={index} /><Text>{filter}</Text>
                </View>
            ))}
            <View style={{
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <Button onPress={onButtonPress}>Cancel</Button>
                <Button onPress={onButtonPress} buttonColor="orange">Filter</Button>
            </View>
        </Animated.View>
    );
};

export default Filter;
