import React from 'react';
import { Text } from "react-native-paper";
import { orange500 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Tag = ({ tagName }: any) => {
    return (
        <Text
            style={{
                color: orange500,
                borderRadius: 3,
                borderColor: orange500,
                borderWidth: 1,
                fontSize: 11,
                fontWeight: "bold",
                paddingHorizontal: 1,
                paddingVertical: 1,
                width: "auto"
            }}
        >
            {tagName}
        </Text>
    );
}

export default Tag;