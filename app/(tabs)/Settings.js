import {Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import {COLORS, SIZES} from "../../constants";
import styles from '../../ScreenStyles/Settings.style'

const Settings = () => {
    const settingsOption = ["Reciter", "Font" ]

    const renderItem = ({item: option}) => (
        <TouchableOpacity>
            <Text style={styles.optionName}>{option}</Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black}}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
                <Text style={styles.optionName}>TESTING</Text>
                <View style={styles.container}>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Settings;