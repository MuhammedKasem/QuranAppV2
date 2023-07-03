import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Slider, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import {toggleDarkMode,  toggleShowArabic, setReciter} from '../../Redux/SettingsSlice';


import styles from '../../ScreenStyles/Settings.style';
import {COLORS, FONT} from "../../constants";
import {store} from "../../Redux/store";

const Settings = () => {

    const darkMode = useSelector((state) => state.settings.darkMode);
    const fontSize = useSelector((state) => state.settings.fontSize);
    const showArabic = useSelector((state) => state.settings.showArabic);
    const reciter = useSelector((state) => state.settings.reciter);

    const dispatch = useDispatch();

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    const handleToggleShowArabic = () => {
        dispatch(toggleShowArabic());
        console.log(store.getState()); // Log the state to the console
    }
    const handleChangeReciter = (newReciter) => {
        dispatch(setReciter(newReciter));
    }




    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black}}>
            <View style={styles.container}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Dark Mode</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={(value) => {
                            handleToggleDarkMode();
                        }}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Show Arabic</Text>
                    <Switch
                        value={showArabic}
                        onValueChange={(value) => {
                            handleToggleShowArabic();
                        }}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Font Size</Text>
                    <Slider style={{width: 200, height: 40}}
                            value={fontSize}
                            onValueChange={(value) => {
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
                            handleChangeReciter(itemValue)
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

