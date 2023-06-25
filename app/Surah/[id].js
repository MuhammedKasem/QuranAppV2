import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text, View} from 'react-native'
import {Stack, useLocalSearchParams} from "expo-router";
import {Audio} from 'expo-av';
import quranData from '../../data/quran_en.json';
import styles from '../Surah/Surah.style'
import {COLORS, FONT, SIZES} from '../../constants';

const Surah = () => {
    const params = useLocalSearchParams();
    const {id: idString} = params;
    const id = Number(idString);
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    const [sound, setSound] = useState(null);
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
    }, [id]);

    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
            setSound(null);
        }
    }

    async function playSound(uri) {
        await stopSound();
        const {sound} = await Audio.Sound.createAsync({uri});
        setSound(sound);
        await sound.playAsync();
    }

    const VerseItem = ({verse}) => {
        return (
            <View style={styles.surah}>
                <Text
                    style={styles.arabicName}
                    onPress={() =>
                        playSound(
                            `https://cdn.islamic.network/quran/audio/128/ar.mahermuaiqly/${verse.global_verse_number}.mp3`
                        )
                    }
                >
                    {`(${toArabicNumerals(verse.id)}) - ${verse.text}`}
                </Text>
                <Text style={styles.englishTranslation}>
                    {`${verse.id}. ${verse.translation}`}
                </Text>
            </View>
        );
    };

    const renderItem = ({item: verse}) => <VerseItem verse={verse}/>;

    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);

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
            <View style={{flex: 1, padding: SIZES.medium,}}>
                <View style={styles.container}>
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
