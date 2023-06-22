import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES} from '../../constants';
import ScreenHeaderBtn from "../../components/home/Buttons/ScreenHeaderBtn";
import DailyAyah from "../../components/home/DailyAyah/DailyAyah";
import Welcome from "../../components/home/Welcome/Welcome";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
                <Welcome/>
                <DailyAyah/>
            </View>
        </SafeAreaView>

    )

}

export default Home;
