import { View, Text, StyleSheet } from "react-native";

const ListaItem = ({value, id}) => {

    return (
        <View style={{ marginTop: 20 }}>
                <Text style={styles.itemLista}>{value} {"  <<=== PULSA PARA REMOVER"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemLista: {
        fontSize: 20,
        marginLeft: 10,
        color: "white"
    }
})

export default ListaItem;
