import React from "react";
import findRoutes from "../navigation/appRoutes/findRoutes";
import { Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const GameReviewCard = ({ item, navigation, direction }: any) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(findRoutes.GAME_SCREEN, { item })}>
            <View
                style={[
                    styles.card, direction === 'row' ? styles.rowCard : styles.colCard
                ]}

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
        </TouchableOpacity>
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
