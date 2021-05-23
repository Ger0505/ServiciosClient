import React, { Component } from 'react';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { View, Image, StyleSheet } from 'react-native';
import { Form, Item, Input, Text, Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API } from '../helpers'
import { colors } from '../global.json'

import Logo from '../assets/logo.png'

class Login extends Component {
  state = {
    correo: '',
    password: '',
    textError: ''
  }

  login = async () => {
    let params = {
      correo: this.state.correo,
      password: this.state.password
    }
    let res = await API.getLog("log/usu", params)
    console.log(res);
    if (res.code === 401 || res.code === 500) {
      this.setState({ textError: 'Verificar usuario y/o contraseña' })
    } else if (res.code === 200) {
      this.guardarSession(res)
    }
  }

  guardarSession = async res => {
    try {
      await AsyncStorage.setItem('@usuario', JSON.stringify(res.usuario))
      await AsyncStorage.setItem('@token',JSON.stringify(res.token))
      this.props.navigation.navigate('UserApp')
    } catch (err) {
      console.log("ERROR:" + err);
    }
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
            <Text style={{ color: 'red', fontSize: 15, alignSelf: 'center' }} >{this.state.textError}</Text>
            <Form style={styles.mainForm}>
              <Item rounded style={styles.input}>
                <Ionicons name="mail" size={16} color="gray" />
                <Input placeholder="Correo Electrónico"
                  value={this.state.correo}
                  onChangeText={text => this.setState({ correo: text })}
                  onChange={() => this.setState({ textError: '' })}
                />
              </Item>
              <Item rounded style={styles.input}>
                <FontAwesome name="lock" size={24} color="gray" />
                <Input placeholder="Contraseña" secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={text => this.setState({ password: text })}
                  onChange={() => this.setState({ textError: '' })}
                />
              </Item>
              <View style={styles.Button}>
                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText} onPress={this.login}>Iniciar</Text>
                </Button>
              </View>
            </Form>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Registro')}>Registrarse</Text>
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
  image: {
    position: 'relative',
    top: '10%',
    alignSelf: 'center',
    width: 105,
    height: 75
  },
  textContainer: {
    color: '#FCFDFF',
    // fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
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
    top: '15%',
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
  input: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5
  }
});
