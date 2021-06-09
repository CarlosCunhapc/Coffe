import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        paddingTop: '10%',
        paddingBottom: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFE4B5",
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFE4B5",
    },
    // darkbg: {
    //     backgroundColor: "#191919",
    // },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
    },
    containerBtn: {
        
        flexDirection: 'row', 
        marginTop: 0,
        padding: 0,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#FFE4B5",
    },
    login__msg: (text='none')=>({
        fontWeight: "bold",
        fontSize: 22,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text,
    }),
    login__form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    login__input: {
        backgroundColor: "#fff",
        width: '90%',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginBottom: 15,
    },
    login__btnLogar: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
    },
    login__btnVisitor: {
        backgroundColor: '#35AAFF',
        marginTop: 15,
        marginRight: 5,
        width: '45%',
        height: 45,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    login__btnCadastrar: {
        backgroundColor: '#35AAFF',
        marginTop: 15,
        width: '45%',
        height: 45,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    login__buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
    },
}); 
export {css};