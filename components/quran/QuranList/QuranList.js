import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import englishChapters from '../../../data/englishChapters.json';
import {useRouter} from "expo-router";
import styles from '../QuranList/QuranList.style'

const QuranList = () => {
    const router = useRouter();
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const toArabicNumerals = (number) => {
        return [...number.toString()].map(digit => arabicNumerals[digit]).join('');
    }

    const handleSurahPress = (surah) => {
        router.push({pathname: `/Surah/${surah.id}`, params: {id: surah.id, name: surah.transliteration}})

    }


    const renderItem = ({ item: surah }) => (
        <TouchableOpacity onPress={() => {handleSurahPress(surah)}}>
            <View style={styles.surah}>
                <View style={styles.surahName}>
                    <Text style={styles.englishName}>
                        {`${surah.id} - ${surah.transliteration}`}
                    </Text>
                    <Text style={styles.arabicName}>
                        {`${toArabicNumerals(surah.id)} - ${surah.name}`}
                    </Text>
                </View>
                <View>
                    <Text style={styles.englishTranslation}>{surah.translation}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList data={englishChapters} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}/>
        </View>
    )
}

export default QuranList;