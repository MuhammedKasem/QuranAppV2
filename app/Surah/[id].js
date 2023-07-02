import React, {useEffect, useState, useRef} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Stack, useLocalSearchParams} from "expo-router";
import {Audio} from 'expo-av';
import quranData from '../../data/quran_en.json';
import styles from '../Surah/Surah.style'
import {COLORS, FONT, SIZES} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Surah = () => {
    const params = useLocalSearchParams();
    const {id: idString} = params;
    const id = Number(idString);
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    const [sound, setSound] = useState(new Audio.Sound());
    const [reciter, setReciter] = useState(null);
    const [arabicShown, setArabicShown] = useState(null);
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
        const fetchSettings = async () => {
            const settingsString = await AsyncStorage.getItem('SETTINGS');
            if (settingsString) {
                const settings = JSON.parse(settingsString);
                setReciter(settings.reciter);
                setArabicShown(settings.showArabic);
            }
        }

        fetchSettings();
        const surahDataFound = quranData.find((surah) => surah.id === id);
        setSurahData(surahDataFound);
    }, [id]);

    async function playSound(uri) {
        try {
            if (sound._loaded) {
                await sound.unloadAsync();
            }
            await sound.loadAsync({ uri });
            await sound.playAsync();
        } catch (error) {
            console.log(error);
        }
    }

    const VerseItem = ({verse}) => {
        return (
            <View style={styles.surah}>
                <TouchableOpacity
                    onPress={() =>
                        playSound(
                            `https://cdn.islamic.network/quran/audio/128/${reciter}/${verse.global_verse_number}.mp3`
                        )
                    }>
                    <Text
                        style={styles.arabicName}
                    >
                        {arabicShown ? `${toArabicNumerals(verse.id)} - ${verse.text}` : null}

                    </Text>
                    <Text style={styles.englishTranslation}>
                        {`${verse.id}. ${verse.translation}`}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    };

    const renderItem = ({item: verse}) => <VerseItem verse={verse}/>;

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
                        data={surahData.verses}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )

}
export default Surah;