import { StyleSheet } from "react-native";



export const style = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
    },

    top_container: {
        display: 'flex',
        flexDirection: 'row-reverse',
        height: 70,
        width: "100%",
        // backgroundColor: 'blue',
        alignItems: 'center',
        // alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 90,

    },

    bottom_container: {
        marginBottom: 0,
        height: "55%",
        width: "100%",
        backgroundColor: '#86fa8f',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,

    },

    buttons_container: {
        height: '90%',
        width: '85%',
        // backgroundColor: 'red',
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },

    button_div: {
        height: '17%',
        width: '100%',
        // backgroundColor: 'purple',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        height: '80%',
        width: '70%',
        // backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo_container: {

        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginRight: 20,

    },


    title_container: {
        display: 'flex',
        flexDirection: 'column',
        height: 50,
        width: 150,
        // backgroundColor: 'purple',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title_text: {
        fontSize: 19,
        fontWeight: 'bold',
    },


})
