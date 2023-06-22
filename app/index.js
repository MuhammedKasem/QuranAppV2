import {Redirect, Stack, useRouter} from 'expo-router';

const StartPage = () => {
    const router = useRouter();

    return (
       <Redirect href="/Home"/>
    )
}

export default StartPage;