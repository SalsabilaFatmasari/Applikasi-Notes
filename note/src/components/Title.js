import React from 'react';
import {View, Text} from 'react-native';
const Title = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#373248',
          textAlign: 'center',
        }}>
        My Notes
      </Text>
      <Text style={{marginTop: 0, textAlign: 'center', marginHorizontal: 50, marginBottom:35}}>
        Let's save your story with My Notes
      </Text>
    </View>
  );
};

export default Title;