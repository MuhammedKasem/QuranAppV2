import { View, Text, FlatList} from 'react-native';
import englishChapters from '../../../data/englishChapters.json';

import styles from '../QuranList/QuranList.style'

const QuranList = () => {
    const renderItem = ({ item: surah }) => (
        <View style={styles.surah}>
        <View style={styles.surahName}>
            <Text style={styles.englishName}>
                {surah.transliteration}
            </Text>
            <Text style={styles.arabicName}>
                {surah.name}
            </Text>
        </View>
            <View>
                <Text style={styles.englishTranslation}>{surah.translation}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <FlatList data={englishChapters} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}/>
        </View>
    )
}

export default QuranList;