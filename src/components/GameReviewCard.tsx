import React from "react";
import findRoutes from "../navigation/appRoutes/findRoutes";
import { Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const GameReviewCard = ({ item, navigation, direction }: any) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(findRoutes.GAME_SCREEN, { item })}>
            <View
                style={[
                    styles.card
                ]}

            >
                <View>
                    <Image style={[styles.img]} resizeMode="cover" source={{
                        uri: "https://via.placeholder.com/150"
                    }} />
                    <Text variant="bodyMedium" style={{ fontWeight: "bold", textAlign: "center", marginTop: 10 }}>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text variant="bodySmall">
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
        height: "auto",
        width: Dimensions.get('window').width - 60,
        marginBottom: 5,
        marginRight: 15,
        overflow: 'hidden',
        borderWidth: 1,
        padding: 20,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    colCard: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        width: 75,
        height: 75
    },
    content: {
        flex: 1,
        marginLeft: 15
    }
});
