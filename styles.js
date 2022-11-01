import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    general: {
        backgroundColor: "#2c3e50",
        height:"100%",
        
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 25
    },
    subcontainer: {
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 10,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    },
    

    input: {
        borderBottomWidth: 1,
        // marginBottom: 10,
        width: '70%',
        textAlign: "center",
        fontSize: 20,
        color: "whitesmoke",
        // fontWeight: "bold",
        textAlign: "center",
    },
    btnTxt: {
        fontSize: 15,
        color: "white",
        fontStyle: "italic"
    },
    btn: {
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DB2A64",
    }


});
