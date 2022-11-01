import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onHandlerChangeItem = (t) => setTextItem(t)

  const addItem = () => {
    if (textItem) {
        setItemList(currentItems => [
            ...currentItems,
            {
                id: Math.random().toString(),
                value: textItem
            }
        ])
        setTextItem("")
        Alert.alert('Producto Ingresado')
    }
    else Alert.alert('Debe ingresar un producto')
}

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.value}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.viewOne}>
        <TextInput
          style={styles.textInputOne}
          placeholder="INGRESAR ITEM A LA LISTA"
          value={textItem}
          onChangeText={onHandlerChangeItem}
        />

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.textOne}
            onPress={addItem}> AGREGAR
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        >
        </FlatList>
      </View>
      {<StatusBar style="auto" />}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4c9ad',
    padding: 30
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    backgroundColor: '#26ade4',
    borderRadius: 4,
    elevation: 9
  },
  textOne: {
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 1,
    color: '#fff'
  },
  textInputOne: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200
  },
  viewOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
