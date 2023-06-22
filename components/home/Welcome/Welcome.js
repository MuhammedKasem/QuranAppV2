import { useState } from 'react'
import { Text, View, } from 'react-native';
import { useRouter } from 'expo-router'

import { icons, SIZES} from "../../../constants";
import styles from './Welcome.style';


const Welcome = () => {

    const router = useRouter();
    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.greeting}>Assalamu Alaykum!</Text>
                <Text style={styles.welcomeMessage}>Read your daily Quran!</Text>
            </View>


        </View>

    )
}

export default Welcome;