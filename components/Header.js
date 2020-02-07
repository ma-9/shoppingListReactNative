import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    padding: 7,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Header;
