import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, icons, images, SIZES} from './../../constants';

export default () => {
    return (
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
                    }

                    // Add your own size here
                    let size = 24;

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1ed760',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tabs.Screen
                name="Home"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Quran"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Settings"
                options={{ headerShown: false }}
            />
        </Tabs>
    )
}
