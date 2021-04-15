import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFE4B5",
    },
    btn: {
        backgroundColor: '#000',
        width: '90%',
        height: 45,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
    },
    input: {
        backgroundColor: "#fff",
        width: '90%',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginBottom: 15,
    },
    containerName: (text='none')=>({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#191919",
        display: text,
    }),
}); 
export {css};