import { Button, Text, Modal, View, ImageBackground, StyleSheet } from "react-native";


const ModalItem = (props) => {
    const { visible, onDelete, noDelete } = props;

    if (!visible) return null;

    return (
        <Modal animationType="slide" visible={visible}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../assets/favicon.png')}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalHeader}>Accion en Producto</Text>
                    </View>
                    <View>
                        <Text style={styles.modalMessage}>Desea Borrar el producto??</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button color="red" onPress={onDelete} title="SI, ELIMINAR" />
                        <Button color="green" onPress={noDelete} title="NO BORRAR, DEJAR COMO ESTA" />
                    </View>
                </ImageBackground>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey"
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        // width: "100%",
        // height: "100%",
        // marginTop: 50,
        resizeMode: "cover"

    },
    modalTitle: {
        backgroundColor: "#ccc",
        color: "white",
        alignItems: "center",
    },
    modalHeader: {
        fontSize: 28
    },
    modalMessage: {
        fontSize: 28,
        marginBottom: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        color: 'green'
    },
    modalButton: {
        marginTop: 15
    },
    modalItem: {
        fontSize: 30
    },
})

export default ModalItem;