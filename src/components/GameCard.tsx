import React from "react";
import findRoutes from "../navigation/appRoutes/findRoutes";
import Tag from "./Tag";
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';


const GameCard = ({ item, navigation, direction }: any) => {
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
                        uri: item.gameImgUrl
                    }} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={{ margin: 5 }}>
                    <Text variant="titleLarge">
                        {item.gameName}
                    </Text>
                    <View style={{ margin: 3, flexDirection: 'row' }}>
                        {item.tags.map((tag: string, index: React.Key | null | undefined) =>
                            <Tag tagName={tag} key={index} />
                        )}
                    </View>
                </View>
                <View style={{ marginBottom: 8 }}>
                    <Text style={{ fontWeight: "bold" }}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default GameCard;

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
