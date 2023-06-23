import {ActivityIndicator, Text, View} from 'react-native';
import styles from './DailyAyah.style';
import {useState} from "react";
import useFetch from '../../../hook/useFetch'
import {COLORS} from '../../../constants';

const DailyAyah = () => {

    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 6236) + 1);
    const {data, error, isLoading} = useFetch(`ayah/${randNumber}/en.sahih`);
    const {data: secondData, error: secondError, isLoading: secondIsLoading} = useFetch(`ayah/${randNumber}`);
    console.log(data);



    return (
        <View style={styles.container}>
            <View style={styles.cardNameContainer}>
                <Text style={styles.cardTitle}>Daily Ayah</Text>
            </View>
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <View style={styles.textContainer}>
                    <View style={styles.surahNameContainer}>
                        <Text style={styles.surahName}>{data.surah.englishName}</Text>
                        <Text
                            style={styles.arabicName}>{}</Text>
                    </View>
                    <Text
                        style={styles.arabicTxt}>{secondData?.text || 'Loading...'} </Text>
                    <Text style={styles.engTranslation}>{data?.text}</Text>
                </View>
            )}

        </View>
    )
}

export default DailyAyah;