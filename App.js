import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import routes from './src/config/routes';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const LogoImage = (props) => (
  <Image source={{uri:'https://picsum.photos/100/100?image=56'}} style={props.style}/>
);

const Navigator = FluidNavigator(routes);

export default class App extends Component {
  render() {
    return (
       <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
