import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, icons, images, SIZES} from './../../constants';
import {persistor, store} from '../../Redux/store';
import { Provider } from 'react-redux';
import {BlurView} from "expo-blur";
import {PersistGate} from "redux-persist/integration/react";
import ScreenHeaderBtn from "../../components/home/Buttons/ScreenHeaderBtn";
import {View} from "react-native";

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Details') {
                        iconName = focused ? 'podium' : 'podium-outline';
                    } else if (route.name === 'Quran') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Memorize') {
                        iconName = focused ? 'bookmarks' : 'bookmarks-outline';
                    }

                    // Add your own size here
                    let size = 24;

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1ed760',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: COLORS.lightGray}

            })}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <View style={{ paddingLeft: SIZES.medium }}>
                            <ScreenHeaderBtn
                                iconName="menu-outline"
                                color={COLORS.lightWhite}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ paddingRight: SIZES.medium }}>
                            <ScreenHeaderBtn
                                iconName="mail-outline"
                                color={COLORS.lightWhite}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Quran"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Settings"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Memorize"
                options={{ headerShown: false }}

            />
        </Tabs>
            </PersistGate>
        </Provider>
    )
}
