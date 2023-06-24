import { View, Text, SafeAreaView } from 'react-native';
import QuranList from "../../components/quran/QuranList/QuranList";

import { COLORS, SIZES} from "../../constants";

const Quran = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black}}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
            <QuranList/>
            </View>
        </SafeAreaView>
    )
}

export default Quran;