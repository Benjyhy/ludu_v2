import React from 'react';
import { Text } from "react-native-paper";

const Tag = ({ tagName }: any) => {
    return (
        <Text
            style={{
                borderRadius: 3,
                borderWidth: 1,
                fontSize: 11,
                fontWeight: "bold",
                paddingHorizontal: 1,
                paddingVertical: 1,
                width: "auto",
                marginRight: 10
            }}
        >
            {tagName}
        </Text>
    );
}

export default Tag;