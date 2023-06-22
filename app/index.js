import {Redirect, Stack, useRouter} from 'expo-router';

const StartPage = () => {
    const router = useRouter();

    return (
       <Redirect href="./(tabs)/Home"/>
    )
}

export default StartPage;