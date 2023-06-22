import { View, Text } from 'react-native';
import styles from './DailyAyah.style';

const DailyAyah = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cardNameContainer}>
                <Text style={styles.cardTitle}>Daily Ayah</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.surahNameContainer}>
                    <Text style={styles.surahName}>Al-Mumtahanah</Text>
                    <Text style={styles.arabicName}>{'\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0627\u0644\u0646\u0651\u0650\u0633\u064e\u0627\u0621\u0650'}</Text>
                </View>
                <Text style={styles.arabicTxt}>{`\u0648\u064e\u0644\u064e\u0627 \u062a\u064f\u062c\u064e\u0640\u0670\u062f\u0650\u0644\u06e1 \u0639\u064e\u0646\u0650 \u0671\u0644\u0651\u064e\u0630\u0650\u06cc\u0646\u064e \u06cc\u064e\u062e\u06e1\u062a\u064e\u0627\u0646\u064f\u0648\u0646\u064e \u0623\u064e\u0646\u0641\u064f\u0633\u064e\u0647\u064f\u0645\u06e1\u06da \u0625\u0650\u0646\u0651\u064e \u0671\u0644\u0644\u0651\u064e\u0647\u064e \u0644\u064e\u0627 \u06cc\u064f\u062d\u0650\u0628\u0651\u064f \u0645\u064e\u0646 \u0643\u064e\u0627\u0646\u064e \u062e\u064e\u0648\u0651\u064e\u0627\u0646\u064b\u0627 \u0623\u064e\u062b\u0650\u06cc\u0645\u08f0\u0627\n`} </Text>
                <Text style={styles.engTranslation}>6. You certainly have an excellent example in them for whoever has hope in Allah and the Last Day. But whoever turns away, then surely Allah ˹alone˺ is the Self-Sufficient, Praiseworthy.</Text>
            </View>
        </View>
    )
}

export default DailyAyah;