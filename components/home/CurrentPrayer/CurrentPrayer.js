import {Text, View} from 'react-native'
import styles from './CurrentPrayer.style'
import moment from "moment-timezone";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {COLORS} from "../../../constants";


const CurrentPrayer = ({prayerTimes, prayerName, date, userTimezone, sunnahTimes}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>Prayer times for {moment(date).format("MMMM DD, YYYY")}</Text>
            <Text style={styles.currentPrayer}>Current Prayer: {prayerName(prayerTimes.currentPrayer())}</Text>
            <View style={styles.prayer}>
                <MaterialCommunityIcons name="weather-sunset-up" size={40} color={COLORS.green}/>
                <Text style={styles.prayerName}>
                    Fajr: {moment(prayerTimes.fajr)
                    .tz(userTimezone)
                    .format("h:mm A")}
                </Text>
            </View>
            <View style={styles.prayer}>
                <MaterialCommunityIcons name="white-balance-sunny" size={40} color={COLORS.green}/>
                <Text style={styles.prayerName}>
                    Dhuhr: {moment(prayerTimes.dhuhr)
                    .tz(userTimezone)
                    .format("h:mm A")}
                </Text>
            </View>
            <View style={styles.prayer}>
                <MaterialCommunityIcons name="weather-sunset-down" size={40} color={COLORS.green}/>
                <Text style={styles.prayerName}>
                    Asr: {moment(prayerTimes.asr)
                    .tz(userTimezone)
                    .format("h:mm A")}
                </Text>
            </View>
            <View style={styles.prayer}>
                <MaterialCommunityIcons name="weather-sunset" size={40} color={COLORS.green}/>
                <Text style={styles.prayerName}>
                    Maghrib: {moment(prayerTimes.maghrib)
                    .tz(userTimezone)
                    .format("h:mm A")}
                </Text>
            </View>
            <View style={styles.prayer}>
                <MaterialCommunityIcons name="weather-night" size={40} color={COLORS.green}/>
                <Text style={styles.prayerName}>
                    Isha: {moment(prayerTimes.isha)
                    .tz(userTimezone)
                    .format("h:mm A")}
                </Text>
            </View>
            <Text style={styles.prayerName}>
                Middle of the night: {moment(sunnahTimes.middleOfTheNight)
                .tz(userTimezone)
                .format("h:mm A")}
            </Text>
            <Text style={styles.prayerName}>
                Last third of the night: {moment(sunnahTimes.lastThirdOfTheNight)
                .tz(userTimezone)
                .format("h:mm A")}
            </Text>
        </View>
    )
}

export default CurrentPrayer;