import { Tabs } from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default () => {
    return (
        <Tabs screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
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

                            return <Ionicons name={iconName} size={size} color={color}/>;
                        },
                    })}
                    tabBarStyle={{
                        activeTintColor: '#4cc9f0',
                        inactiveTintColor: 'gray',
                        borderRadius: 20,
                    }}>

            <Tabs.Screen name="Home" options={{
                headerShown: false
            }} />
            <Tabs.Screen name="Quran" options={{
                headerShown: false
            }} />
            <Tabs.Screen name="Settings" options={{
                headerShown: false
            }} />
        </Tabs>
    )
}