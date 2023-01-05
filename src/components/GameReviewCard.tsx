import React from "react";
import findRoutes from "../navigation/appRoutes/findRoutes";
import { grey500 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const GameReviewCard = ({ item, navigation, direction }: any) => {
    return (
        <View
            style={[
                styles.card, direction === 'row' ? styles.rowCard : styles.colCard
            ]}
            onTouchEnd={() => navigation.navigate(findRoutes.GAME_SCREEN, { item })}
        >
            <View>
                <View

                    style={[direction === 'row' ? styles.rowImg : styles.colImg]}
                >
                    <Image resizeMode="cover" source={{
                        uri: item.avatar
                    }} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={{ margin: 2 }}>
                    <Text variant="titleLarge">
                        {item.name}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </View>
    );

};

export default GameReviewCard;

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: Dimensions.get('window').width - 30,
        marginBottom: 5,
        marginRight: 5,
        overflow: 'hidden',
        borderColor: grey500,
        borderWidth: 1
    },
    rowCard: {
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    colCard: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    rowImg: {
        width: "auto",
        height: "100%"
    },
    colImg: {
        width: "100%",
        height: "auto"
    },
    content: {
        padding: 4,
        margin: 3,
        flex: 1
    }
});
