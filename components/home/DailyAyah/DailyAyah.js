import { TouchableOpacity, Text, View} from 'react-native';
import styles from './DailyAyah.style';
import {useEffect, useState} from "react";
import {COLORS} from '../../../constants';
import {Ionicons} from "@expo/vector-icons";
import { Audio } from 'expo-av';
import { useSelector } from "react-redux";
import quranData from '../../../data/quran_en.json';

const DailyAyah = () => {

    const reciter = useSelector((state) => state.settings.reciter);
    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 6236) + 1);
    const [ayahNumberArabic, setAyahNumberArabic] = useState('');
    const [data, setData] = useState(null);
    const [sound, setSound] = useState(null);
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    const toArabicNumerals = (number) => {
        return [...number.toString()].map(digit => arabicNumerals[digit]).join('');
    }

    useEffect(() => {
        // Find the surah and verse based on the global verse number
        let verse, surah;
        for (let i = 0; i < quranData.length; i++) {
            const verses = quranData[i].verses;
            for (let j = 0; j < verses.length; j++) {
                if (verses[j].global_verse_number === randNumber) {
                    verse = verses[j];
                    surah = quranData[i];
                    break;
                }
            }
            if (verse) break;
        }

        // Set the state
        if (verse && surah) {
            setData({
                verse: verse,
                surah: surah,
            });
            setAyahNumberArabic(toArabicNumerals(verse.id)); // Use setAyahNumberArabic here
        }
    }, [randNumber]);


    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            { uri: `https://cdn.islamic.network/quran/audio/128/${reciter}/${randNumber}.mp3` }
        );
        setSound(sound);

        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const refreshBtn = () => {
        setRandNumber(Math.floor(Math.random() * 6236) + 1)
    }

    return (
        <View style={styles.container}>
            {!data ? (
                <Text>Loading...</Text>
            ) : (
                <View style={styles.textContainer}>
                    <View style={styles.surahNameContainer}>
                        <Text style={styles.surahName}>{data.surah.translation}</Text>
                        <Text style={styles.arabicName}>{data.surah.name}</Text>
                    </View>
                    <Text style={styles.arabicTxt}>
                        {`${ayahNumberArabic} ${data.verse.text}`}
                    </Text>
                    <Text style={styles.engTranslation}>{`${data.verse.id}. ${data.verse.translation}`}</Text>

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
