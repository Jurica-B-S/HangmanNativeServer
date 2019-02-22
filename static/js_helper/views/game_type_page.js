import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class GameTypePage extends React.Component {
  render() {
    return (
    <View style = {styles.container}>
    <TouchableOpacity  style = {styles.button}  title="A" onPress = {() => this.props.navigation.navigate('SinglePlayerPage')}>
      <Text style = {styles.button_text}>SINGLE PLAYER</Text>
    </TouchableOpacity>
    </View>
    );
  }
}
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button_text:{
      color:'white',
      fontSize:30,
      fontFamily: 'Reckless',
      paddingTop:6,
  },
  button:{
    position:'absolute',
    width: width / 2,
    height: width / 10,
    borderRadius:width/20,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#000',
    margin: 4
  },

});
