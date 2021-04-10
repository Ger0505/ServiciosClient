import React, {Component} from 'react';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {View, Image, StyleSheet} from 'react-native';
import {Form, Item, Input, Body, Text, CheckBox, Button} from 'native-base';
import { colors } from '../app.json'

import Logo from '../assets/logo.png'

class Login extends Component {
  state = {
    correo: '',
    password: ''
  }

  login = () =>{
    this.props.navigation.navigate('UserApp')
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Image source={Logo} style={styles.image} />
          {/* <Text style={styles.textContainer}>Servicios</Text> */}

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Iniciar Sesión</Text>
            <Form style={styles.mainForm}>
            <Item rounded style={styles.input}>
              <Ionicons name="mail" size={16} color="gray" />
              <Input placeholder="Correo Electrónico" />
            </Item>
              <Item rounded style={styles.input}>
                <FontAwesome name="lock" size={24} color="gray"/>
                <Input placeholder="Contraseña" secureTextEntry={true}/>
              </Item>
              <View style={styles.Button}>
                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText} onPress={this.login}>Iniciar</Text>
                </Button>
              </View>
            </Form>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{textDecorationLine: 'underline'}} onPress={() => navigation.navigate('Registro')}>Registrarse</Text>
          </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    position: 'relative',
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  image:{
    position: 'relative',
    top: '15%',
    alignSelf: 'center',
    width: 105,
    height: 75
  },
  textContainer: {
    color: '#FCFDFF',
    // fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    top: '20%',
    paddingBottom: 40,
  },
  signin: {
    top: 0,
    color: '#2D3057',
    marginTop: 15,
  },
  loginAs: {
    paddingLeft: 46.6,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    // fontFamily: 'GoogleSans-Bold',
    fontWeight: 'bold',
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: colors.second,
  },
  btnText: {
    color: '#FFF',
    // fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
  input:{
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5
  }
});
