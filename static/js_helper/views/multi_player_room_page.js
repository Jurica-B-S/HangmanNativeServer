import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions } from 'react-native';

export default class MultiPlayerRoomPage extends React.Component {
  render() {
    return (
    <View style = {styles.container}>
      <Button
        title="ROOM 1"
        onPress={() =>
          this.props.navigation.navigate('Room')
        }
      />
      <Button
        title="ROOM 2"
        onPress={() =>
          this.props.navigation.navigate('')
        }
      />

    </View>
    );
  }
}

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    width: width,
    height: height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 80,
    width:200,
    borderColor: 'gray',
    borderWidth: 1
  },
});
