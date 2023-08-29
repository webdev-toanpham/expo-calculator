import React from 'react';
import { Image, View } from 'react-native';
import styles from './IntroScreen.style';
import images from '@/assets/images';

const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={images.splash} style={styles.img} />
            </View>
        </View>
    );
}

export default IntroScreen;