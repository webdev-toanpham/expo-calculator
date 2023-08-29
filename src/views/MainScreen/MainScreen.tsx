import React, { useRef, useState } from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import styles from './MainScreen.style';

const MainScreen = () => {
    const ref = useRef<ScrollView>(null)
    const [value, setValue] = useState('0');
    const [bracketOpen, setBracketOpen] = useState(false)

    const onPressHandler = (key: string) => {
        switch (key) {
            case 'AC':
                setValue('0');
                setBracketOpen(false)
                break;
            case '=':
                try {
                    if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {
                        if (value.slice(-1) === '+' ||
                            value.slice(-1) === '-' ||
                            value.slice(-1) === '*' ||
                            value.slice(-1) === '/' ||
                            value.slice(-1) === '%' ||
                            value.slice(-1) === '.') {
                            setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                        } else {
                            setValue(`${eval(value.replace('()', '(0)'))}`)
                        }
                    }
                } catch (e) {
                    setValue('Format Error')
                }
                break;
            case '<':
                if (value !== '0') {
                    if (value.length !== 1) {
                        setValue((prev) => prev.slice(0, -1));
                    } else {
                        setValue('0');
                    }
                }
                break;
            case '()':
                if (value === '0') {
                    setValue('(');
                    setBracketOpen(true)
                } else if (value.slice(-1) === '+' ||
                    value.slice(-1) === '-' ||
                    value.slice(-1) === '*' ||
                    value.slice(-1) === '/' ||
                    value.slice(-1) === '%' ||
                    value.slice(-1) === '.') {
                    setValue(prev => prev + '(');
                    setBracketOpen(true)
                } else {
                    if (bracketOpen) {
                        setValue(prev => prev + ')');
                        setBracketOpen(false)
                    } else {
                        setValue(prev => prev + '(');
                        setBracketOpen(true)
                    }
                }
                break;
            default:
                if (value === 'Format Error' || value === 'Infinity') {
                    setValue(key)
                } else if (value === '0') {
                    if (isNaN(Number(key))) {
                        if (key === '.') {
                            setValue((prev) => prev + key)
                        }
                        if (key === '-') {
                            setValue(key)
                        }
                    } else {
                        setValue(key);
                    }
                } else if (isNaN(Number(key))) {
                    if (value.slice(-1) === '+' ||
                        value.slice(-1) === '-' ||
                        value.slice(-1) === '*' ||
                        value.slice(-1) === '/' ||
                        value.slice(-1) === '%' ||
                        value.slice(-1) === '.' ||
                        value.slice(-1) === '(') {
                        setValue((prev) => prev.slice(0, -1) + key)
                    } else {
                        setValue((prev) => prev + key)
                    }
                } else {
                    setValue((prev) => prev + key)
                }
                break;
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.resultWrap} ref={ref} onContentSizeChange={() => ref.current?.scrollToEnd({ animated: true })}>
                <Text style={styles.resultText}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </ScrollView>
            <View style={styles.keypadWrap}>
                <View style={styles.keypadRow}>
                    <Pressable onPress={() => onPressHandler('AC')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadRed, { backgroundColor: pressed ? '#bdbdbd' : 'red' }]}>
                        <Text style={[styles.text, styles.textWhite]}>AC</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('()')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'gray' }]}>
                        <Text style={[styles.text, styles.textWhite]}>{'()'}</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('%')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'gray' }]}>
                        <Text style={[styles.text, styles.textWhite]}>%</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('*')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'gray' }]}>
                        <Text style={[styles.text, styles.textWhite]}>*</Text>
                    </Pressable>
                </View>
                <View style={styles.keypadRow}>
                    <Pressable onPress={() => onPressHandler('7')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>7</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('8')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>8</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('9')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>9</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('/')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'gray' }]}>
                        <Text style={[styles.text, styles.textWhite]}>/</Text>
                    </Pressable>
                </View>
                <View style={styles.keypadRow}>
                    <Pressable onPress={() => onPressHandler('4')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>4</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('5')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>5</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('6')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>6</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('+')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'gray' }]}>
                        <Text style={[styles.text, styles.textWhite]}>+</Text>
                    </Pressable>
                </View>
                <View style={styles.keypadRow}>
                    <Pressable onPress={() => onPressHandler('1')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>1</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('2')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>2</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('3')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>3</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('-')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'gray' }]}>
                        <Text style={[styles.text, styles.textWhite]}>-</Text>
                    </Pressable>
                </View>
                <View style={styles.keypadRow}>
                    <Pressable onPress={() => onPressHandler('0')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>0</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('.')} style={({ pressed }) => [styles.keypadButton, styles.keypadRounded, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'white' }]}>
                        <Text style={[styles.text, styles.textBlack]}>.</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('<')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'red' }]}>
                        <Text style={[styles.text, styles.textWhite]}>{'<'}</Text>
                    </Pressable>
                    <Pressable onPress={() => onPressHandler('=')} style={({ pressed }) => [styles.keypadButton, styles.keypadCircle, styles.keypadGrey, { backgroundColor: pressed ? '#bdbdbd' : 'red' }]}>
                        <Text style={[styles.text, styles.textWhite]}>=</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default MainScreen;