import { Text, View, StyleSheet, Image } from "react-native";

export default function Header() {

    return (

        <View style={styles.header}>
            <Text style={styles.text}>
                Bienvenidos
            </Text>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/favicon.png')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        color: "whitesmoke",
        backgroundColor: "#808A9B",
        marginTop:5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
    },
    text: {
        fontSize: 30,
        marginTop:5
    },
    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius:10
    }
})