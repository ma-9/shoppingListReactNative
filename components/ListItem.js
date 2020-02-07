import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.ListItem}>
      <View style={styles.ListItemView}>
        <Text style={styles.ListItemText}> {item.title} </Text>
        <Icon
          onPress={() => deleteItem(item._id)}
          name="remove"
          size={20}
          color="firebrick"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  ListItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListItemText: {
    fontSize: 18,
  },
});

export default ListItem;
