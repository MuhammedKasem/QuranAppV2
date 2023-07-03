import React, {useEffect, useState, useRef} from 'react';
import {ActivityIndicator, Animated, FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Stack, useLocalSearchParams} from "expo-router";
import {Audio} from 'expo-av';
import quranData from '../../../../data/quran_en.json';
import styles from './Surah.style'
import {COLORS, FONT, SIZES} from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector} from "react-redux";
import { Alert } from 'react-native';


const Surah = () => {
    const params = useLocalSearchParams();
    const flatListRef = useRef(null);
    const {id: idString} = params;
    const id = Number(idString);
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    const showEnglish = useSelector((state) => state.settings.showEnglish);
    const showArabic = useSelector((state) => state.settings.showArabic);
    const [selectedAyah, setSelectedAyah] = useState(null);
    const reciter = useSelector((state) => state.settings.reciter);
    const [sound, setSound] = useState(new Audio.Sound());
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
    const [surahData, setSurahData] = useState(null);

    const toArabicNumerals = (number) => {
        return [...number.toString()].map(digit => arabicNumerals[digit]).join('');
    }



    const customHeader = () => (
        <View style={styles.surahName}>
            <Text style={{
                color: COLORS.green,
                fontFamily: FONT.bold,
                fontSize: SIZES.large
            }}>{surahData.transliteration}</Text>
            <Text style={{
                color: COLORS.green,
                fontSize: SIZES.xLarge,
                fontFamily: FONT.kitabBold
            }}>{surahData.name}</Text>
        </View>
    );

    useEffect(() => {
        const surahDataFound = quranData.find((surah) => surah.id === id);
        setSurahData(surahDataFound);

        if (surahDataFound) {
            sound.setOnPlaybackStatusUpdate(async (playbackStatus) => {
                if (playbackStatus.didJustFinish && isPlaying) {
                    if (currentAyahIndex < surahDataFound.verses.length - 1) {
                        setCurrentAyahIndex(currentAyahIndex + 1);
                        setSelectedAyah(null);
                        await playSound(surahDataFound.verses[currentAyahIndex + 1]);
                        if (flatListRef.current) {
                            flatListRef.current.scrollToIndex({ index: currentAyahIndex + 1 });
                        }
                    } else {
                        setIsPlaying(false);
                    }
                }
            });
        }

        return () => {
            sound.setOnPlaybackStatusUpdate(null);
        };
    }, [id, sound, currentAyahIndex, isPlaying, surahData]);



    async function playSound(verse) {
        try {
            if (sound._loaded) {
                await sound.unloadAsync();
            }
            const uri = `https://cdn.islamic.network/quran/audio/128/${reciter}/${verse.global_verse_number}.mp3`;
            await sound.loadAsync({ uri });
            await sound.playAsync();
        } catch (error) {
            console.log(error);
        }
    }



    const handlePlayPause = async () => {
        if (isPlaying) {
            await sound.pauseAsync();
        } else {
            if (!sound._loaded) {
                if (selectedAyah) {
                    setCurrentAyahIndex(selectedAyah.id - 1); // update the currentAyahIndex
                    await playSound(selectedAyah);
                } else {
                    await playSound(surahData.verses[currentAyahIndex]);
                }
            } else {
                await sound.playAsync();
            }
        }
        setIsPlaying(!isPlaying);
    };





    const VerseItem = ({verse, index}) => {
        const fadeAnim = useRef(new Animated.Value(0.5)).current  // Initial value for opacity: 0.5

        useEffect(() => {
            if (index === currentAyahIndex && isPlaying) {
                Animated.loop(
                    Animated.sequence([
                        Animated.timing(
                            fadeAnim,
                            {
                                toValue: 1,
                                duration: 2000,
                                useNativeDriver: false
                            }
                        ),
                        Animated.timing(
                            fadeAnim,
                            {
                                toValue: 0.5,
                                duration: 2000,
                                useNativeDriver: false
                            }
                        )
                    ]),
                    { iterations: -1 }
                ).start();
            } else {
                fadeAnim.setValue(1);
            }
        }, [currentAyahIndex, isPlaying]);

        return (
            <Animated.View style={[styles.surah, {opacity: fadeAnim}]}>
                <TouchableOpacity
                    onPress={() => {
                        setSelectedAyah(verse);
                        playSound(verse);
                    }}
                    onLongPress={() => {
                        Alert.alert(
                            'Options',
                            'Select an action',
                            [
                                {
                                    text: 'Play from this ayah',
                                    onPress: async () => {
                                        setSelectedAyah(verse);
                                        setCurrentAyahIndex(verse.id - 1);
                                        setIsPlaying(false);
                                        await playSound(verse);
                                        setIsPlaying(true);
                                    },
                                },
                                {
                                    text: 'Cancel',
                                    style: 'cancel',
                                },
                            ],
                            {cancelable: true},
                        );
                    }}
                >
                    <Text style={styles.arabicName}>
                        {showArabic ? `${toArabicNumerals(verse.id)} - ${verse.text}` : null}
                    </Text>
                    <Text style={styles.englishTranslation}>
                        {showEnglish ? `${verse.id}. ${verse.translation}`: null}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };



    const renderItem = ({item: verse, index}) => <VerseItem verse={verse} index={index}/>;


    if (!surahData) {
        return <ActivityIndicator/>;
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.black},
                    headerShadowVisible: false,
                    headerTitle: () => customHeader(),
                    headerTintColor: COLORS.green,
                    headerTitleStyle: {color: COLORS.green, fontFamily: FONT.bold, fontSize: SIZES.large}
                }}
            />

            <View style={styles.container}>
                <View style={{flex: 1, padding: SIZES.medium,}}>
                    <FlatList
                        ref={flatListRef}
                        data={surahData.verses}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={handlePlayPause} style={styles.playBtn}>
                            <Text style={styles.buttonTxt}>{isPlaying ? 'Pause' : 'Play'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}
export default Surah;