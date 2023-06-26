import {Text, View, SafeAreaView, FlatList, Switch,  TouchableOpacity} from 'react-native'
import {COLORS, SIZES} from "../../constants";
import styles from '../../ScreenStyles/Settings.style'
import {useState} from "react";

const Settings = () => {
    const [isSwitchEnabled, setSwitchEnabled] = useState(false);
    const [isTestEnabled, setTestEnabled] = useState(false);
    const settingsOptions = [
        { name: 'Option 1', type: 'switch', value: isTestEnabled, onValueChange: isTestEnabled},
        { name: 'Option 2', type: 'switch', value: isSwitchEnabled, onValueChange: isSwitchEnabled},
        { name: 'Option 3', type: 'modal',  value: isTestEnabled, onValueChange: isTestEnabled },
    ];



    const renderItem = ({ item }) => {
        if (item.type === 'switch') {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.optionName}>{item.name}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSwitchEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={item.onValueChange}
                        value={item.value}/>
                </View>
                )
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black}}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
                <Text style={styles.optionName}>TESTING</Text>
                <View style={styles.container}>
                    <FlatList data={settingsOptions} renderItem={renderItem} keyExtractor={item => item.name}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Settings;