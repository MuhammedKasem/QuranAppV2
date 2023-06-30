import { TouchableOpacity, ActivityIndicator, Text, View} from 'react-native';
import styles from './DailyAyah.style';
import {useEffect, useState} from "react";
import useFetch from '../../../hook/useFetch'
import {COLORS} from '../../../constants';
import {Ionicons} from "@expo/vector-icons";
import { Audio } from 'expo-av';

import AsyncStorage from '@react-native-async-storage/async-storage';


const DailyAyah = () => {

    const [reciter, setReciter] = useState(null);
    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 6236) + 1);
    const {data, error, isLoading} = useFetch(`ayah/${randNumber}/en.sahih`);
    const {data: secondData, error: secondError, isLoading: secondIsLoading} = useFetch(`ayah/${randNumber}`);
    const [sound, setSound] = useState(null);
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let ayahNumberArabic = '';

    const toArabicNumerals = (number) => {
        return [...number.toString()].map(digit => arabicNumerals[digit]).join('');
    }

    if (data && data.surah && data.surah.number) {
        ayahNumberArabic = toArabicNumerals(data.numberInSurah);
    }


    console.log(data)
    console.log(secondData)

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            { uri: `https://cdn.islamic.network/quran/audio/128/${reciter}/${randNumber}.mp3` }
        );
        setSound(sound);

        await sound.playAsync();
    }

    useEffect(() => {
        const getReciter = async () => {
            const settingsString = await AsyncStorage.getItem('SETTINGS');
            if (settingsString) {
                const settings = JSON.parse(settingsString);
                setReciter(settings.reciter);
            }
        }

        getReciter();
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound, reciter]);



    const refreshBtn = () => {
        setRandNumber(Math.floor(Math.random() * 6236) + 1)
    }


    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <View style={styles.textContainer}>
                    <View style={styles.surahNameContainer}>
                        <Text style={styles.surahName}>{data.surah.englishName}</Text>
                        <Text
                            style={styles.arabicName}>{secondData?.surah.name || 'Loading...'}</Text>
                    </View>
                    <Text style={styles.arabicTxt}>
                        {`(${ayahNumberArabic}) ${secondData?.text || 'Loading...'}`}
                    </Text>
                    <Text style={styles.engTranslation}>{`${data.numberInSurah}. ${data.text}`}</Text>
                </View>

            )}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.playBtn} onPress={playSound}>
                    <Text style={styles.playBtnTxt}>Play Audio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshBtn} onPress={refreshBtn}>
                    <Ionicons name="refresh" size={30} color={COLORS.lightWhite}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default DailyAyah;