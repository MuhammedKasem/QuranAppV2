import { Stack } from 'expo-router'
import { useCallback } from 'react';
import { useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import ScreenHeaderBtn from "../components/home/Buttons/ScreenHeaderBtn";
import { Ionicons } from '@expo/vector-icons';

import { COLORS, icons, images, SIZES} from '../constants';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        Kitab: require('../assets/fonts/Kitab-Regular.ttf'),
        KitabBold: require('../assets/fonts/Kitab-Bold.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;
    return (
      <Stack onLayout={onLayoutRootView}>
          <Stack.Screen name="(tabs)" options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconName="menu-outline"
                            color={COLORS.lightWhite}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconName="mail-outline"
                            color={COLORS.lightWhite}
                        />
                    ),
                }} />
      </Stack>
    )
}

export default Layout;