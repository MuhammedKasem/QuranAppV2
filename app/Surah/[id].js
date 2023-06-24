import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, FlatList} from 'react-native'
import quranData from '../../data/quran_en.json';
import {Stack, useLocalSearchParams, useRouter, useSearchParams} from "expo-router";
import { useCallback, useState} from 'react';
import AppLoading from 'expo-app-loading';

import { COLORS, icons, SIZES} from '../../constants';
import useFetch from "../../hook/useFetch";


const Surah = () => {
    const params = useLocalSearchParams();
    const { id: idString } = params;
    const id = Number(idString);

    const [surahData, setSurahData] = useState(null);


    useEffect(() => {
        const surahDataFound = quranData.find((surah) => surah.id === id);
        setSurahData(surahDataFound);
    }, [id]);

    const renderItem = ({ item: verse }) => (
        <View>
            <Text>
                {verse.text}
            </Text>
            <Text>
                {`${verse.id}. ${verse.translation}`}
            </Text>
        </View>
    );
    if (!surahData) {
        return <ActivityIndicator/>;
    }
    return (

        <FlatList
            data={surahData.verses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
/>
    )
}

export default Surah;