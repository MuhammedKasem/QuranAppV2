import Stack from "expo-router/src/layouts/Stack";


const StackLayout = (props) => {
    return (
        <Stack>
            <Stack.Screen
            name="QuranList"
            options={{
                headerShown: false
            }}
            >

            </Stack.Screen>
        </Stack>
    )
}

export default StackLayout;