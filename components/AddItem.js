import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
  const [TextValue, SetText] = useState();

  const handleOnChange = text => SetText(text);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter New Item"
        onChangeText={handleOnChange}
      />
      <TouchableOpacity onPress={() => addItem(TextValue)} style={styles.btn}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} color="blue" />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
