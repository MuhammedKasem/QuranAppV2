import {Text, View, SafeAreaView} from 'react-native'
import {COLORS, SIZES} from "../../constants";

const Memorize = () => {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black}}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Text>Memorize</Text>
                </View>
        </SafeAreaView>
    )
}

export default Memorize;