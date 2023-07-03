import React from 'react';
import {SafeAreaView, Switch, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {setReciter, toggleDarkMode, toggleShowArabic, toggleShowEnglish} from '../../Redux/SettingsSlice';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


import styles from '../../ScreenStyles/Settings.style';
import {COLORS} from "../../constants";

const Settings = () => {

    const darkMode = useSelector((state) => state.settings.darkMode);
    const fontSize = useSelector((state) => state.settings.fontSize);
    const showArabic = useSelector((state) => state.settings.showArabic);
    const showEnglish = useSelector((state) => state.settings.showEnglish);
    const reciter = useSelector((state) => state.settings.reciter);

    const dispatch = useDispatch();

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };
    const handleToggleShowArabic = () => {
        dispatch(toggleShowArabic());
    }
    const handleToggleShowEnglish = () => {
        dispatch(toggleShowEnglish());
    }
    const handleChangeReciter = (newReciter) => {
        dispatch(setReciter(newReciter));
    }


    return (

        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
            <Text style={styles.settingsTxt}>Settings</Text>

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
                    <Text style={styles.optionName}>Show English</Text>
                    <Switch
                        value={showEnglish}
                        onValueChange={(value) => {
                            handleToggleShowEnglish();
                        }}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionName}>Font Size</Text>
                    <View style={{marginHorizontal: 20}}>
                        <MultiSlider
                            values={[fontSize]}
                            sliderLength={220}
                            onValuesChange={() => {
                            }}
                            min={10}
                            max={32}
                            step={2}
                            optionsArray={[14, 16, 18, 20, 22, 24, 26, 28, 30, 32]}
                            containerStyle={{height: 40}}
                            trackStyle={{
                                height: 10,
                                backgroundColor: COLORS.lightWhite,
                            }}
                            selectedStyle={{
                                backgroundColor: 'black',
                            }}
                            markerStyle={{
                                height: 30,
                                width: 30,
                                borderRadius: 20,
                                backgroundColor: COLORS.green,
                            }}
                            pressedMarkerStyle={{
                                backgroundColor: '#D3D3D3',
                            }}
                        />
                    </View>
                </View>
                <View style={styles.optionPicker}>
                    <Text style={styles.pickerName}>Reciter</Text>
                    <Picker
                        selectedValue={reciter}
                        style={{color: 'red', fontSize: 18}}
                        onValueChange={(itemValue, itemIndex) => {
                            handleChangeReciter(itemValue)
                        }}
                    >
                        <Picker.Item label="Maher Muaqily" color={COLORS.green} value="ar.mahermuaiqly"/>
                        <Picker.Item label="Al Afasy" color={COLORS.green} value="ar.alafasy"/>
                        <Picker.Item label="Muhammad Jibreel" color={COLORS.green} value="ar.muhammadjibreel"/>
                    </Picker>
                </View>
            </View>
        </SafeAreaView>
    );

};


export default Settings;

