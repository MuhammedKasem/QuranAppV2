import { View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import englishChapters from '../../../data/englishChapters.json';
import {useRouter} from "expo-router";
import styles from '../QuranList/QuranList.style'
import Bismillah from '../../../assets/images/bismillah.svg';
import {COLORS} from "../../../constants";

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
<View style={styles.quranListWrapper}>
    <Bismillah style={styles.Bismillah} width="100%" height={85} fill={COLORS.green}/>
    <Text style={styles.headerText}>In the name of Allah, the Most Gracious, the Most Merciful</Text>
        <View style={styles.container}>

            <FlatList data={englishChapters}
                      renderItem={renderItem}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={(item) => item.id.toString()}/>
        </View>
</View>
    )
}

export default QuranList;