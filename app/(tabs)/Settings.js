import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Slider, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

import styles from '../../ScreenStyles/Settings.style';
import {COLORS, FONT} from "../../constants";

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [reciter, setReciter] = useState("ar.mahermuaiqly");
    const [fontSize, setFontSize] = useState(14);
    const [showArabic, setShowArabic] = useState(true);

    const initialSettings = {
        isDarkMode: false,
        reciter: "ar.mahermuaiqly",
        fontSize: 14,
        showArabic: true
    };

    const saveSettings = async (newSettings) => {
        try {
            await AsyncStorage.setItem('SETTINGS', JSON.stringify(newSettings));
        } catch (error) {
            // saving error
            console.log(error);
        }
    };

    const loadSettings = async () => {
        try {
            let settings = await AsyncStorage.getItem('SETTINGS');
            if (settings !== null) {
                settings = JSON.parse(settings);
            } else {
                settings = initialSettings;
                await AsyncStorage.setItem('SETTINGS', JSON.stringify(initialSettings));
            }
            setIsDarkMode(settings.isDarkMode);
            setReciter(settings.reciter);
            setFontSize(settings.fontSize);
            setShowArabic(settings.showArabic);
        } catch (error) {
            // loading error
            console.log(error);
        }
    };

    useEffect(() => {
        loadSettings();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black}}>
            <View style={styles.container}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Dark Mode</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={(value) => {
                            setIsDarkMode(value);
                            saveSettings({ ...initialSettings, isDarkMode: value });
                        }}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Show Arabic</Text>
                    <Switch
                        value={showArabic}
                        onValueChange={(value) => {
                            setShowArabic(value);
                            saveSettings({ ...initialSettings, showArabic: value });
                        }}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Font Size</Text>
                    <Slider style={{width: 200, height: 40}}
                            value={fontSize}
                            onValueChange={(value) => {
                                setFontSize(value);
                                saveSettings({ ...initialSettings, fontSize: value });
                            }}
                            minimumValue={10}
                            maximumValue={30}
                            step={1}
                    />
                </View>
                <View style={styles.optionPicker}>
                    <Text style={styles.pickerName}>Reciter</Text>
                    <Picker
                        selectedValue={reciter}
                        style={{ color: 'red', fontSize: 18 }}
                        onValueChange={(itemValue, itemIndex) => {
                            setReciter(itemValue);
                            saveSettings({ ...initialSettings, reciter: itemValue });
                        }}
                    >
                        <Picker.Item label="Maher Muaqily" color={COLORS.green} value="ar.mahermuaiqly" />
                        <Picker.Item label="Al Afasy" color={COLORS.green} value="ar.alafasy" />
                        <Picker.Item label="Muhammad Jibreel" color={COLORS.green} value="ar.muhammadjibreel" />
                    </Picker>
                </View>
            </View>
        </View>
    );

};


export default Settings;

