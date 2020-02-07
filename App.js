import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [Items, setItems] = useState([
    {_id: uuid(), title: 'Milk'},
    {_id: uuid(), title: 'Egg'},
    {_id: uuid(), title: 'Bread'},
    {_id: uuid(), title: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevState => prevState.filter(item => item._id !== id));
  };

  const addItem = data => {
    if (!data) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevState => {
        return [{_id: uuid(), title: data}, ...prevState];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={Items}
        renderItem={({item}) => (
          <ListItem key={item._id} item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
