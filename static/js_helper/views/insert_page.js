import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class InsertPage extends React.Component {
  state = {currentValueInput:""}
  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem(data.key, data.value, );
    } catch (error) {
      // Error saving data
    }
  };
  render() {
    return (
    <View style = {styles.container}>
      <Text style = {{fontSize:30, fontFamily:'Reckless'}}>Username:</Text>

      <TextInput
        style={styles.textInput}
        maxLength = {6}
        onEndEditing = {() => this._storeData({key:"username",value:this.state.currentValueInput})}
        onChangeText={currentValue => this.setState({currentValueInput:currentValue})}
        value={this.state.currentValueInput}
        //onChangeText={"....AJDE"}
      />
      <TouchableOpacity  style = {styles.button}  title="A" onPress = {() => this.props.navigation.navigate('GameTypePage')}>
        <Text style = {styles.button_text}>SUBMIT</Text>
      </TouchableOpacity>


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
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize:30,
    marginTop:30,
    fontFamily: 'Reckless',
  },
  button_text:{
      color:'white',
      fontSize:30,
      fontFamily: 'Reckless',
      paddingTop:6,
  },
  button:{
    position:'absolute',
    top: height * 3 / 5,
    left: width / 4,
    width: width / 2,
    height: width / 10,
    borderRadius:width/20,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#000',
    margin: 4
  },
});
