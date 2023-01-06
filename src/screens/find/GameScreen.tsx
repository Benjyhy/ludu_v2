import React from 'react';
import gameData from '../../mocks/gameMockData';
import GameReviewCard from '../../components/GameReviewCard';
import GameCard from '../../components/GameCard';
import { TouchableOpacity } from 'react-native';
import { InlineTextIcon } from '../../components/InlineTextIcon';
import { Button, Divider, Text } from 'react-native-paper';
import { View, ScrollView, SafeAreaView, Image } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const GameScreen = ({ route, navigation }: any) => {
    const game = gameData.find((game) => game.id === route.params.item.id);

    if (!game) {
        return (
            <View style={{ flex: 1 }}>
                <Text variant="bodyMedium">An error occured</Text>
            </View>
        );
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ marginHorizontal: 2 }}>
                {/* display title and button to like review and shares */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text variant="titleLarge">
                        {game.gameName}
                    </Text>
                    <Divider />
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <TouchableOpacity onPress={() => console.log('press like')}>
                                <Ionicons size={24} name="star" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: 2 }}>
                            <TouchableOpacity onPress={() => console.log('press comment')}>
                                <Ionicons size={24} name="chatbubbles" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => console.log('press share')}>
                                <Ionicons size={24} name="share" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Display likes reviews and share number*/}
                <View style={{ flexDirection: "row", marginBottom: 2 }}>
                    <View>
                        <InlineTextIcon icon={'star'} text={'22 Likes'} />
                    </View>
                    <View style={{ marginHorizontal: 8 }}>
                        <InlineTextIcon icon={'chatbubbles'} text={'4 Reviews'} />
                    </View>
                    <View>
                        <InlineTextIcon icon={'share'} text={'12 Shares'} />
                    </View>
                </View>

                {/* display image, tags, description */}
                <View style={{ flexDirection: "row", marginBottom: 2, marginLeft: 2.5, marginRight: 1 }}>
                    <View>
                        <Image
                            source={{
                                uri: game.gameImgUrl,
                            }}
                        ></Image>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginHorizontal: 4
                        }}
                    >
                        {game.tags.map((tag: string, index) => (
                            <Text
                                style={{ backgroundColor: 'black', color: 'white', paddingHorizontal: 2, borderRadius: 20, borderWidth: 1, borderStyle: "solid", fontSize: 14, marginLeft: 1, marginRight: 1, marginBottom: 1 }}
                                key={index}
                            >
                                {tag}
                            </Text>
                        ))}
                        <Text style={{ marginLeft: 1, fontSize: 12 }}>
                            {game.description}
                        </Text>
                    </View>
                </View>

                {/* render 'play now' and 'book' button */}
                <View
                    style={{ flexDirection: "row", marginBottom: 4, width: "100%", justifyContent: "space-around" }}
                >
                    <TouchableOpacity onPress={() => console.log('Play now')}>
                        <InlineTextIcon icon={'happy'} text={'Play now'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Book')}>
                        <InlineTextIcon icon={'book'} text={'Book'} />
                    </TouchableOpacity>
                </View>

                {/* render 'they loved playing it' */}
                <Text style={{ marginTop: 3, marginBottom: 2, marginLeft: 1 }}>
                    They loved playing it
                </Text>
                <ScrollView horizontal>
                    {game.reviews.map((review, index) => (
                        <GameReviewCard item={review} key={index} direction={'row'} />
                    ))}
                </ScrollView>

                {/* render 'game alike' */}
                <Text variant="titleMedium" style={{ marginTop: 3, marginBottom: 2, marginLeft: 1 }}>
                    Game alike
                </Text >
                <ScrollView horizontal>
                    {gameData.map((game: any, index) => (
                        <GameCard
                            item={game}
                            navigation={navigation}
                            direction="row"
                            key={game.id}
                        />
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GameScreen;
