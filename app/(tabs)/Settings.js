import { Text, View, SafeAreaView} from 'react-native'
import {COLORS, SIZES} from "../../constants";

const Settings = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black}}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
            </View>
        </SafeAreaView>
    )
}

export default Settings;