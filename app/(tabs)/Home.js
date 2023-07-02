import { View, Text, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import {useEffect, useState} from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES} from '../../constants';
import ScreenHeaderBtn from "../../components/home/Buttons/ScreenHeaderBtn";
import DailyAyah from "../../components/home/DailyAyah/DailyAyah";
import Welcome from "../../components/home/Welcome/Welcome";
import CurrentPrayer from "../../components/home/CurrentPrayer/CurrentPrayer";
import * as Location from 'expo-location';
import {
    Coordinates,
    CalculationMethod,
    PrayerTimes,
    SunnahTimes,
    Prayer,
    Qibla
} from "adhan";
import moment from "moment-timezone";

const Home = () => {
    const router = useRouter();

 const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

       const coordinates = location ? new Coordinates(location.coords.latitude, location.coords.longitude) : null;
    const params = CalculationMethod.NorthAmerica();
    const date = new Date();
    const prayerTimes = coordinates ? new PrayerTimes(coordinates, date, params) : null;
    const sunnahTimes = prayerTimes ? new SunnahTimes(prayerTimes) : null;


    function prayerName(prayer) {
        if (prayer === Prayer.Fajr) {
            return "Fajr";
        } else if (prayer === Prayer.Sunrise) {
            return "Sunrise";
        } else if (prayer === Prayer.Dhuhr) {
            return "Dhuhr";
        } else if (prayer === Prayer.Asr) {
            return "Asr";
        } else if (prayer === Prayer.Maghrib) {
            return "Maghrib";
        } else if (prayer === Prayer.Isha) {
            return "Isha";
        } else if (prayer === Prayer.None) {
            return "None";
        }
    }

    const userTimezone = moment.tz.guess();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black}}>
            <ScrollView>

            <View style={{
                flex: 1,
                padding: SIZES.medium,
                gap: 30
            }}>
                <Welcome/>
                <DailyAyah/>
                {prayerTimes ?
                    <CurrentPrayer prayerName={prayerName} prayerTimes={prayerTimes} date={date}
                                   sunnahTimes={sunnahTimes} userTimezone={userTimezone}/> :
                    <ActivityIndicator size='large' color={COLORS.green}/>
                }
            </View>
            </ScrollView>
        </SafeAreaView>

    )

}

export default Home;
