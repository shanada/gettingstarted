import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const LogoImage = (props) => (
    <Image source={{uri:'https://picsum.photos/100/100?image=56'}} style={props.style}/>
  );
class Screen3 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Transition shared="logo">
            <LogoImage style={styles.smallLogo}/>
          </Transition>
          <Transition appear="horizontal">
            <Text style={styles.paragraph}>
              <Text style={{fontWeight:'normal'}}>
                Now you should have a basic understanding of how this app works. 
                Please sign up and take part in this fantastic user experience!
              </Text>
            </Text>  
          </Transition>
          <Transition appear="horizontal">
            <Text style={styles.paragraph}>
                This is the last page of the onboarding.
            </Text>  
          </Transition>
          <Transition appear="horizontal">
          <Button title="Next" onPress={() => this.props.navigation.navigate("Screen2")} />
          </Transition>
        </View>
      );
    }
  }
export default Screen3
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#ffffff',
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