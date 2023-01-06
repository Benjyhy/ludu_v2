import React from "react";
import { View } from "react-native";
import { blueGrey50, grey200, grey600 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Divider, Text } from 'react-native-paper';

const StoreListing = ({ item }: any) => {
    return (
        <View
            style={{ borderBottomWidth: 1, borderColor: grey200, paddingVertical: 6 }}
        >
            <View
                style={{ margin: 3, justifyContent: "space-between" }}
            >
                {/* <Avatar
                                    size="48px"
                                    source={{
                                        uri: item.avatarUrl,
                                    }}
                                /> */}
                <View>
                    <Text
                        style={{ fontWeight: "bold", color: blueGrey50 }}
                    >
                        {item.storeName}
                    </Text>
                    <Text
                        style={{ color: grey600 }}
                    >
                        {item.city}
                    </Text>
                </View>
                <Divider />
            </View>
        </View>
    )
}

export default StoreListing;