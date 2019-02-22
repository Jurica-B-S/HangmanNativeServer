import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default class HangmanText extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text  style = {styles.text_style}>
          {this.props.guessingWord}
        </Text>
        <View style = {styles.infoContainer}>
          <Text  style = {styles.infoText}>
            {this.props.info}
          </Text>
        </View>
      </View>
    );
  }
}
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: height * 2 / 5,
    width: width,
    height: height * 1 / 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style:{
    fontSize:25,
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft:10,
    paddingTop:height * 1 / 15,
    fontFamily: 'Reckless',
  },
  infoContainer: {
    position:'absolute',
    top: width * 1 / 20,
    left: width * 1 / 2 - width * 2 / 4 /2,
    width: width * 2 / 4,
    height: width * 1 / 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  infoText:{
    fontSize:20,
    flex: 1,
    flexWrap: 'wrap',
    color:'red',
    fontFamily: 'Reckless',
  }
});
