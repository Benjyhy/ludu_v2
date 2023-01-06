import React from "react";
import findRoutes from "../navigation/appRoutes/findRoutes";
import Tag from "./Tag";
import { Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';


const GameCard = ({ item, navigation, direction }: any) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(findRoutes.GAME_SCREEN, { item })}>
            <View
                style={[
                    styles.card, direction === 'row' ? styles.rowCard : styles.colCard, { height: "auto" }
                ]}

            >
                <Image style={[direction === 'row' ? styles.rowImg : styles.colImg]} resizeMode="cover" source={{
                    uri: "https://via.placeholder.com/150"
                }} />
                <View style={styles.content}>
                    <View style={{ marginVertical: 15 }}>
                        <Text variant="headlineSmall">
                            {item.gameName}
                        </Text>
                        <View style={{ margin: 3, flexDirection: 'row' }}>
                            {item.tags.map((tag: string, index: React.Key | null | undefined) =>
                                <Tag tagName={tag} key={index} />
                            )}
                        </View>
                    </View>
                    <View style={{ marginBottom: 8 }}>
                        <Text>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default GameCard;

const styles = StyleSheet.create({
    card: {
        width: "auto",
        marginBottom: 15,
        overflow: 'hidden',
        borderWidth: 1,
        paddingVertical: 20
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
        width: 150,
        height: 150
    },
    colImg: {
        width: 150,
        height: 150
    },
    content: {
        padding: 4,
        margin: 3,
        flex: 1
    }
});
