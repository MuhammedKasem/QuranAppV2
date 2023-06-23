import { TouchableOpacity, ActivityIndicator, Text, View} from 'react-native';
import styles from './DailyAyah.style';
import {useState} from "react";
import useFetch from '../../../hook/useFetch'
import {COLORS} from '../../../constants';
import {Ionicons} from "@expo/vector-icons";

const DailyAyah = () => {

    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 6236) + 1);
    const {data, error, isLoading} = useFetch(`ayah/${randNumber}/en.sahih`);
    const {data: secondData, error: secondError, isLoading: secondIsLoading} = useFetch(`ayah/${randNumber}`);

    const refreshBtn = () => {
        setRandNumber(Math.floor(Math.random() * 6236) + 1)
    }


    return (
        <View style={styles.container}>
            {/*<View style={styles.cardNameContainer}>*/}
            {/*    <Text style={styles.cardTitle}>Daily Ayah</Text>*/}
            {/*</View>*/}
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
                    <Text
                        style={styles.arabicTxt}>{secondData?.text || 'Loading...'} </Text>
                    <Text style={styles.engTranslation}>{`${data.numberInSurah}. ${data.text}`}</Text>
                </View>

            )}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.playBtn}>
                    <Text style={styles.playBtnTxt}>Play Audio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshBtn} onPress={refreshBtn}>
                    <Ionicons name="refresh" size={30} color={COLORS.gray}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default DailyAyah;