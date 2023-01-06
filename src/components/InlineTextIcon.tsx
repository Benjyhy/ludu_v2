import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

interface IInlineTextIcon {
    text: string;
    inversed?: boolean;
    icon?: Props["ionIconsName"];
    background?: string;
}

type Props = {
    ionIconsName: keyof typeof Ionicons.glyphMap;
}
export const InlineTextIcon = ({ text, icon, inversed }: IInlineTextIcon) => {
    return (
        <View style={[styles.inlineText]}>
            {inversed ? (
                <>
                    <Text style={{ marginRight: 8 }}>{text}</Text>
                    <Ionicons name={icon} color="purple" size={24} />
                </>
            ) : (
                <>
                    <Ionicons name={icon} color="purple" size={24} />
                    <Text style={{ marginLeft: 8 }}>{text}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inlineText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
