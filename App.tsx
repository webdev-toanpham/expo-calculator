import IntroScreen from '@/views/IntroScreen/IntroScreen';
import MainScreen from '@/views/MainScreen/MainScreen';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'expo-dev-client';

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000)
    }, [])

    return (
        <View>
            {loaded ? <MainScreen /> : <IntroScreen />}
        </View>
    )
}
