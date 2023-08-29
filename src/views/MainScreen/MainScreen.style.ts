import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#efefef'
    },
    resultWrap: {
        flex: 1,
        width: '100%',
        padding: 16,
        marginBottom: 32,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: 'white',
        overflow: 'scroll',
    },
    resultText: {
        textAlign: 'right',
        fontSize: 40,
        height: '100%'
    },
    keypadWrap: {
        flexDirection: 'column',
        rowGap: 16
    },
    keypadRow: {
        flexDirection: 'row',
        columnGap: 16
    },
    keypadButton: {
        width: (screenWidth - 72) / 4,
        height: (screenWidth - 72) / 4,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    keypadCircle: {
        borderRadius: 50
    },
    keypadRounded: {
        borderRadius: 10
    },
    keypadRed: {
        backgroundColor: 'red'
    },
    keypadWhite: {
        backgroundColor: 'white'
    },
    keypadGrey: {
        backgroundColor: 'gray'
    },
    textWhite: {
        color: 'white'
    },
    textBlack: {
        color: 'black'
    },
    text: {
        fontSize: 24
    }
})
export default styles;